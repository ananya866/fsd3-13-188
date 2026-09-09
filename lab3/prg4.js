import http from "http";

const server = http.createServer((req, res) => {
  const products = {
    id: 1,
    name: "Mobile",
    price: 25000,
    rating: 4.5,
    review: 200,
  };

  if (req.url === "/api/products") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(products));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");

    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => console.log("prg4 is running...");
)
