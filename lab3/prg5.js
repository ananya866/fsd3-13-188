import http from "http";

const server = http.createServer((req, res) => {
  //req method->GET,POST,PUT,DELETE,PATCH
  console.log("Method:", req.method);
  //req url->/pot,/bottle
  console.log("URL:", req.url);
  //Browser can send only GET request to the server
  //POST/ PUT/DELETE/PATCH->can be checked using api tester
  //API Tester->Postman,Thunder Client,Insomnia,echo api
});
