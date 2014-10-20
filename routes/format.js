/**
 * This Bluemix app uses Watson's Question and Answer  service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 20 Oct 2014
 * File: format.js
 */
exports.list = function(req, res){
  res.render('formatreq', { title: 'Ask Watson a question and get a formatted response'});
};