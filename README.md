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

For details on this project and similar post please visit  my blog https://gigadom.wordpress.com/
