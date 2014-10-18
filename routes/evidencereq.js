/**
 * This Bluemix app uses Watson's Question and Answer  service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 18 Oct 2014
 * File: evidencereq.js
 */
var express = require('express');
var connect = require('connect');
var http = require('http');
var https = require('https');
var url = require('url');

exports.list = function(req, res) {	
  
  // Get the values from the form
  var evidence = req.body.evidence;
  var items = req.body.items;
  
  console.log("Evidence:" + evidence + " Items:" + items);
       
	   // Create the request options to POST our question to Watson
	   var options = {host: parts.hostname,
                 port: 443,
                 path: parts.pathname,
                 method: 'POST',
                 headers: headers,
                 rejectUnauthorized: false, // ignore certificates
                 requestCert: true,
                 agent: false};
	  var output="";
	   // Create a request to POST to Watson
	   var req = https.request(options, function(result) {
		   // retrieve and return the result back to the client  	   
		   result.on("data", function(chunk) {     		  
			   output += chunk;  		   
			   		  
		   });
		   
		   result.on('end', function(chunk) {		  
			  // Capture Watson's response in output. Parse Watson's answer for the fields
			     var answers = JSON.parse(output);
			      results = answers[0];
			  
			      res.render(
					 'evidenceres', {
                      "results":results
                                          
			   });
			
		   });
	   });
	   
	   req.on('error',function(e) {
		   console.log("problem"+ e.message);
	   });
	   
	   // Format the question
       var question = {"question":{
    	        "questionText":evidence,
    	        "evidenceRequest":{"items":items,"profile":"yes"}}
    	 }   

	   // Set the POST body and send to Watson
	   req.write(JSON.stringify(question));	   
	   req.write("\n\n");
	   req.end();
	 
  

}

