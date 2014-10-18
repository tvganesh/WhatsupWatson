/**
 * This Bluemix app uses Watson's Question and Answer  service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 18 Oct 2014
 * File: evidence.js
 */
exports.list = function(req, res){
  res.render('evidencereq', { title: 'Ask Watson for responses based on evidence provided'});
};