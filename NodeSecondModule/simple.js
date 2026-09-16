const http = require("http");

const usersData = [
    {
        id: 1,
        name: "Anuj",
        age: 22
    },
    {
        id: 2,
        name: "Rahul",
        age: 23
    },
    {
        id: 3,
        name: "Aman",
        age: 21
    }
];

http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    res.write(JSON.stringify(usersData));

    res.end();

}).listen(6100);