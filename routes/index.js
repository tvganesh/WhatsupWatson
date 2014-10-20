/**
 * This Bluemix app uses Watson's Question and Answer  service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 20 Oct 2014
 * File: index.js
 */

exports.index = function(req, res){
  res.render('index', { title: 'A Bluemix app using Watson QAAPI' });
};