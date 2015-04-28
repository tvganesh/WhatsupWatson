Whats up, Watson? Using IBM Watson with Bluemix and NodeExpress
This project uses a IBM Watson's Question and Answer service with Bluemix. The app has been developed using NodeExpress with Enide Studio. The Watson's QAAPI has the medical corpus and is based on ingested medical facts. Users can ask Watson questions like
What is Parkinson's disease? or
Am I at risk of a heart attack


Files

app.js
This file sets up the routes and views for the application. It also starts the Webserver

routes/
The routes format the questions in the required QAAPI format of Watson.

views/
This directory contains the views of the application. The views format the response from Watson

public/
This directory contains the stylesheet

manifest.yml

package.json
This file is required by the Node.js environment. It specifies this Node.js project name, dependencies, and other configurations of your Node.js application.


For other posts with Node.js,NodeExpress,Bluemix - MongoDB,PostgreSQL or Cloudant take a look at these posts

1. [Getting started with Node.js & MongoDB](https://gigadom.wordpress.com/2014/07/13/getting-started-with-node-js-and-mongodb/)
2. [Working with Node.js & PostgreSQL](https://gigadom.wordpress.com/2014/07/20/working-with-node-js-and-postgresql/)
3. [Elements of CRUD with NodeExpress and MongoDB using Enide Studio](https://gigadom.wordpress.com/2014/08/04/elements-of-crud-with-nodeexpress-and-mongodb-using-enide-studio/)
4. [Brewing a potion with Bluemix, PostgreSQL & Node.js in the cloud](https://gigadom.wordpress.com/2014/07/22/brewing-a-potion-with-bluemix-postgresql-node-js-in-the-cloud/)
6. [A Bluemix recipe with MongoDB and Node.js](https://gigadom.wordpress.com/2014/07/27/a-bluemix-recipe-with-mongodb-and-node-js/)
7. [Spicing up IBM Bluemix with MongoDB and NodeExpress](https://gigadom.wordpress.com/2014/08/07/spicing-up-a-ibm-bluemix-cloud-app-with-mongodb-and-nodeexpress/)
8. [A Cloud Medley with IBM’s Bluemix, Cloudant and Node.js](https://gigadom.wordpress.com/2014/08/15/a-cloud-medley-with-ibm-bluemix-cloudant-db-and-node-js/)
9. [Rock N’ Roll with Bluemix, Cloudant & NodeExpress](https://gigadom.wordpress.com/2014/08/19/rock-n-roll-with-bluemix-cloudant-nodeexpress/)
11. [What’s up Watson? Using IBM Watson’s QAAPI with Bluemix, NodeExpress – Part 1](https://gigadom.wordpress.com/2014/10/11/whats-up-watson-using-ibm-watsons-qaapi-with-bluemix-nodeexpress-part-1/)
13. [Bend it like Bluemix, MongoDB with autoscaling – Part 1](https://gigadom.wordpress.com/2014/11/05/bend-it-like-bluemix-mongodb-using-auto-scale-part-1/)
For details on this project and similar post please visit  my blog https://gigadom.wordpress.com/
