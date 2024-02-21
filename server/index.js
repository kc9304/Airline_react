const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());


app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.rzddyty.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('s31');
const col = db.collection('registerhack');


app.post('/insert', (req, res) => {
    if (req.body.un == null) {
        res.send("fail");
    } else {
        console.log(req.body);
        col.insertOne(req.body);
        res.send("received data");
    }
});

app.post('/check', async (req, res) => {
    try {
        const result = await col.findOne({ "name": req.body.un });

        if (result == null) {
            res.send("user not available");
        } else if (result.password == req.body.pw) {
           
                    res.send("PASS");
        }
    } catch (error) {
        console.error('Error during authentication:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/updatepassword', async (req, res) => {
    try {
        const { un, pw, newPw } = req.body;

        const user = await col.findOne({ "name": un, "password": pw });

        if (user) {
            await col.updateOne({ "name": un }, { $set: { "password": newPw } });
            res.send("done");
        } else {
            res.send("User not found or incorrect current password");
        }
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(8082, () => {
    console.log('Server running on http://localhost:8082');
});
