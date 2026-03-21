const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello Engineers from Blue-Green Deployment v1");
});

// ✅ FIX HERE
server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
