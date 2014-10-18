/**
 * This Bluemix app uses Watson's QAAPI as a service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 18 Oct 2014
 * File: simplesync.js
 */
var express = require('express');
var connect = require('connect');
var http = require('http');
var https = require('https');
var url = require('url');

exports.list = function(req, res) {	
	
  // Get the values from the form
  var syncTimeout = req.body.timeout;
  var query = req.body.query;
  if (syncTimeout == "") 
  {
		  syncTimeout="1";
  }
	  
  console.log("Timeout:" + syncTimeout + " Query:" + query);
         
   // Set the required headers for posting the REST query to Watson
     headers = {'Content-Type'  :'application/json',
                  'X-synctimeout' : syncTimeout,
                  'Authorization' : "Basic " + new Buffer(username+":"+passwd).toString("base64")};
       
	   // Create the request options to POST our question to Watson
	   var options = {host: parts.hostname,
                 port: parts.port,
                 path: parts.pathname,
                 method: 'POST',
                 headers: headers,
                 rejectUnauthorized: false, // ignore certificates
                 requestCert: true,
                 agent: false
                 };
	   
	  var output="";
	   // Create a request to POST to Watson
	   var req = https.request(options, function(result) {
		   result.setEncoding('utf-8');

		   // Retrieve and return the result back to the client  		  	   
		   result.on("data", function(chunk) {     		  
			   output += chunk;  
			   //console.log("output=" + output);			   
			   		  
		   });
		   
		   result.on('end', function(chunk) {		  
           var answers = JSON.parse(output);
			      results = answers[0];
			      res.render(
					 'answer', {
                      "results":results
                                        
			   });
			
		   });
	   });

	  
	   req.on('error',function(e) {
		   console.log("problem"+ e.message);
	   });
  
	   // create the Question text to ask Watson  
	   var question = {question : {questionText :query }};   
	   //var evidence = {"evidenceRequest":{"items":1,"profile":"yes"}};
	   console.log(query);
	   console.log(JSON.stringify(question));
	   
	   // Set the POST body and send to Watson
	   req.write(JSON.stringify(question));
	   req.write("\n\n");
	   req.end();
	
  
  }

//}

