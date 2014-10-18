/**
 * This Bluemix app uses Watson's Question and Answer  service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 18 Oct 2014
 * File: itemsreq.js
 */
var express = require('express');
var connect = require('connect');
var http = require('http');
var https = require('https');
var url = require('url');

exports.list = function(req, res) {	
  
	// Get the values from the form
  var question = req.body.query;
  var items = req.body.items;
  console.log("Question:" + question + " Items:" + items);
  
  //Get the VCAP environment variables to connect Watson service to the Bluemix applicatio
 /* if (process.env.VCAP_SERVICES) {
	   var VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
	   // retrieve the credential information from VCAP_SERVICES for Watson QAAPI
	   var hostname   = VCAP_SERVICES["Watson QAAPI-0.1"][0].name;               
	   var passwd = VCAP_SERVICES["Watson QAAPI-0.1"][0].credentials.password; 
	   var userid = VCAP_SERVICES["Watson QAAPI-0.1"][0].credentials.userid; 
       var watson_url = VCAP_SERVICES["Watson QAAPI-0.1"][0].credentials.url;
       
    // Set the required headers for posting the REST query to Watson
       headers = {'Content-Type'  :'application/json',
                  'X-synctimeout' : '10',
                  'Authorization' : "Basic " + new Buffer(userid+":"+passwd).toString("base64")};
             
       
       var parts = url.parse(watson_url);*/
       
	   // create the request options to POST our question to Watson
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
			   //console.log("output=" + output);			   
			   		  
		   });
		   
		   result.on('end', function(chunk) {		  
			  // Capture Watson's response in output. Parse Watson's answer for the fields
			     var answers = JSON.parse(output);
			      results = answers[0];
			      res.render(
					 'itemsres', {
                      "results":results
                                          
			   });
			
		   });
	   });

	   //console.log("Chunk output final =" + output);
	   req.on('error',function(e) {
		   console.log("problem"+ e.message);
	   });
       var question = {"question":{
    	        "questionText":question,
    	        "items":items
    	        }
    	 }
    	
  
	   // create the Question text to ask Watson  
	   console.log("val" + JSON.stringify(question));  
	   // Set the POST body and send to Watson
	   req.write(JSON.stringify(question));	   
	   req.write("\n\n");
	   req.end();
	
  
  //}

}

