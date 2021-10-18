const express = require('express');
const fs = require("fs");
const app = express();

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
});

app.get('/user', (req, res) => {
    const uid = req.query['uid'];

    try {
        let found = 0;
        const usersJSON = fs.readFileSync("./users.json");
        const users = JSON.parse(usersJSON);

        for (let i = 0; i < users.length; i++) {
            if (users[i].id == uid) {
                found = 1;
                res.json(users[i]);
            }
        }

        if (found === 0) {
            res.send(`User ID ${uid} does not exist.`);
        }

    } catch (err) {
        res.send(err);
    }
});

app.get('/users/all', (req, res) => {
    try {
        const usersJSON = fs.readFileSync("./users.json");
        const users = JSON.parse(usersJSON);

        users.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        res.json(users);

    } catch (err) {
        res.send(err);
    }
});

app.listen(2741, () => {
    console.log("APPLICATION STARTED");
});