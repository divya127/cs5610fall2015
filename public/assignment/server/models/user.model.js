var users = require('user.mock.json');
module.exports = function(app) {

//    var service = {
//        findUserByUsername : findUserByUsername,
//        findUserByCredentials : findUserByCredentials
//    };
//    return service;

    var api = {
            addPage: addPage,
            addContent: addContent,
            getAllPages: getAllPages,
            getPageById: getPageById
        };
        return api;

        function addContent(pageId, contentType) {
            var deferred = q.defer();

            PageModel.findById(pageId, function(err, page){
                var content = {
                    contentType: contentType,
                    list: {listType: 'ORDERED', items: ["Item 1", "Item 2", "Item 3"]}
                };
                page.content.push(content);
                page.save(function(err, doc){
                    deferred.resolve(doc);
                });
            });

            return deferred.promise;
        }

        function getUserById(id) {
            var deferred = q.defer();

            PageModel.findById(id, function(err, page){
                deferred.resolve(page);
            });

            return deferred.promise;
        }

        function getAllPages() {
            var deferred = q.defer();

            PageModel.find(function(err, pages){
                deferred.resolve(pages);
            });

            return deferred.promise;
        }

        function addPage(page) {
            var deferred = q.defer();

            PageModel.create(page, function(err, doc){
                PageModel.find(function(err, pages){
                    deferred.resolve(pages);
                });
            });

            return deferred.promise;
        }

//    app.get('/api/user', function (req, res) {
//            res.json(users);
//        });
//
//    app.get('/api/user/:id', function (req, res) {
//        var index = req.params.id;
//        console.log(index);
//        res.json(users[index]);
//    });
//
//    app.delete('/api/user/:id', function (req, res) {
//        var index = req.params.id;
//        users.splice(index, 1);
//        res.json(users);
//    });
//
//    app.post('/api/user', function (req, res) {
//        var newUser = req.body;
//        console.log(newUser);
//        courses.push(newUser);
//        res.json(users);
//    });
//
//    app.put('/api/user/:id', function (req, res) {
//        var index = req.params.id;
//        users[index] = req.body;
//        res.json(users);
//    });
//
//    function findUserByUsername(username) {
//        for(var user in users) {
//            if(users[user].username.localeCompare(username) == 0) {
//                console.log("Found user!");
//                callback(users[user]);
//            }
//        }
//        callback(null);
//    }
//
//    function findUserByCredentials(credentials) {
//        for(var user in users) {
//            if(users[user].username.localeCompare(credentials.username) == 0 &&
//            users[user].password.localeCompare(credentials.password) == 0) {
//                console.log("Found user!");
//                callback(users[user]);
//            }
//        }
//        callback(null);
//    }

};

