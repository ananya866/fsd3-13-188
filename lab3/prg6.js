import http from "http";
import { getAllProducts } from "./products.js";
import { addProducts } from "./products.js";
import { deleteProduct } from "./products.js";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
    const data = getAllProducts();
    res.setHeader("content-type", "application/json");

    res.end(
      JSON.stringify({
        count: data.length,
        data,
      }),
    );
  } else if (req.url === "/api/v1/products" && req.method === "POST") {
    //console.log("Request:", req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      const item = addProducts(product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product added", data: item }));
    });
  } else if (req.url.startsWith("/products") && req.method === "PUT") {
    const productID = req.url.split("/").pop();
    console.log("update product id:", productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID;
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "product UPDATED", product }));
    });
  } else if (
    req.url.startsWith("/api/v1/products/") &&
    req.method === "DELETE"
  ) {
    const pid = Number(req.url.split("/").pop());

    res.statusCode = 200;
    if (deleteProduct(pid)) {
      res.end(JSON.stringify({ msg: "item deleted" }));
    } else {
      res.end(JSON.stringify({ msg: `products with id ${pid} not found` }));
    }
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));
