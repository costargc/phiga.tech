const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

// mongodb+srv://phigaadmin:phigapassword@phigacluster0.u54vn.mongodb.net/apsdoi?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://phigaread:phigareadpassword@phigacluster0.u54vn.mongodb.net/apsdoi?retryWrites=true&w=majority`
)

db = mongoose.connection;

//Define a schema
var Schema = mongoose.Schema;
jsonSchema = new Schema({
    _id: String,
    affiliations: [
        new Schema({
            name: String
        })],
    authors: [
        new Schema({
            name: String
        })]
})
collection = mongoose.model('json', jsonSchema, 'json');

const app = express();

// start the app
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../webclient/build')));


// api
app.get("/api", (req, res) => {

    if (req.query.doi_json != null) {
        // console.log(req.query.doi_json)

        collection
            .findOne({ "_id": req.query.doi_json })
            .exec(function (err, data) {
                // console.log(JSON.stringify(data));
                res.json(data)
            });

    }

    else if (req.query.affiliations != null) {
        // console.log(req.query.affiliations)
        var perPage = 1000
        var page = Math.max(0, req.query.page * 1)
        if (isNaN(page)) { page = 0 };
        // console.log(perPage, page)

        collection
            .find({ "affiliations": { $elemMatch: { name: { $regex: req.query.affiliations, "$options" : "i" } } } }, '_id')
            .skip(page * perPage)
            .limit(perPage)
            .exec(function (err, data) {

                collection.countDocuments({ "affiliations": { $elemMatch: { name: { $regex: req.query.affiliations, "$options" : "i" } } } }, function (err, count) {
                    // console.log('Count is ' + count);

                    ids_data = [];
                    for (x in data) {
                        // console.log(data[x]._id)
                        ids_data.push(data[x]._id)
                    }
                    // console.log(data)
                    // .count().exec(function (err, count) {
                    res.json({
                        ids: ids_data,
                        current_page: page,
                        total_pages: Math.floor(count / perPage)
                    })
                });

            })

        // console.log(JSON.stringify(data));


    }

    else if (req.query.authors != null) {
        // console.log(req.query.affiliations)
        var perPage = 1000
        var page = Math.max(0, req.query.page * 1)
        if (isNaN(page)) { page = 0 };
        // console.log(perPage, page)

        collection
            .find({ "authors": { $elemMatch: { name: { $regex: req.query.authors, "$options" : "i" } } } }, '_id')
            .skip(page * perPage)
            .limit(perPage)
            .exec(function (err, data) {
                // console.log(data)

                collection.countDocuments({ "authors": { $elemMatch: { name: { $regex: req.query.authors, "$options" : "i" } } } }, function (err, count) {
                    // console.log('Count is ' + count);


                    ids_data = [];
                    for (x in data) {
                        // console.log(data[x]._id)
                        ids_data.push(data[x]._id)
                    }
                    // console.log(data)
                    // .count().exec(function (err, count) {
                    res.json({
                        ids: ids_data,
                        current_page: page,
                        total_pages: Math.floor(count / perPage)
                    })
                });

            })

        // console.log(JSON.stringify(data));


    }


    else {

        res.json(
            {
                message: "Hello from the backend server!",
                support: "We support the following requests:",
                types: [{
                    doi: "/api?doi_json=PhysRev.103.525.json",
                    note: "case sensitive"
                },
                {
                    affiliation: "/api?affiliations=Georgia&page=0",
                    note: "not case sensitive",
                    note2: "1000 ids per page"
                },
                {
                    authors: "/api?authors=kastler&page=0",
                    note: "not case sensitive",
                    note2: "1000 ids per page"
                }],
                params: req.query
            }
        );

    }

});



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../webclient/build', 'index.html'));
});