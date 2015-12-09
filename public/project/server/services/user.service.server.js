module.exports = function(app, model, passport) {

    var auth = function(req, res, next)
    {
        if (!req.isAuthenticated())
        {
            res.send(401);
        }
        else
        {
            next();
        }
    };

    app.get("/api/project/profile/random/:userId", getRandomProfiles)
    app.post("/api/project/login", passport.authenticate('local'), findUserByUsernameAndPassword);
    app.get("/api/project/user", auth, findAllUsers);
    app.get("/api/project/user/:id", findUserById);
    app.post("/api/project/user", addNewUser);
    app.put("/api/project/user/:id", auth, updateUser);
    app.delete("/api/project/user/:id", auth, deleteUser);
    app.get("/api/project/user/username=:username", auth, findUserByUsername);
    app.get("/api/project/user/search/:term", findByFirstNameOrLastName);
    app.post("/api/project/logout", logout);
    app.get("/api/project/loggedin", getLoggedIn);

        app.get('/auth/google',
            passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/plus.login']}),
            function(req, res) {

            });

        app.get('/auth/google/callback',
            passport.authenticate('google', {failureRedirect: '/#/login'}),
            function(req, res) {
                console.log("^^^^^^^^^Server side google: " + res);
                res.redirect('/project/client/#/account');
            });

    function getRandomProfiles(req, res) {
        console.log("**************INside randome profiles server side!!!");
            model
                .getRandomProfiles(req.params.userId)
                .then(function(profiles){
                    res.json(profiles);
                });
        }

    function getLoggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }


    function findByFirstNameOrLastName(req, res) {
        model.findByFirstNameOrLastName(req.params.term)
        .then(function(users){
            res.json(users);
        });
    }

    function findAllUsers(req, res) {
    console.log("Inside findAllUsers!");
        model
            .findAllUsers()
            .then(function(users){
                res.json(users);
            });
    }

    function findUserByUsername(req, res) {
        console.log("Inside server side findUserByUsername");
        var username = req.params.username;
        model
            .findUserByUsername(username)
            .then(function(user){
                res.json(user);
            });
    }

    function findUserByUsernameAndPassword(req, res) {
    console.log("Inside server side findUserByUsernameAndPassword");
        var username = req.body.username;
        var pwd = req.body.password;
        var credentials = {
            username: username,
            password: pwd
        };
        model
            .findUserByCredentials(credentials)
            .then(function(user){
                console.log(user);
                res.json(user);
            });
    }

    function addNewUser(req, res) {
        console.log("Inside server side addNewUser");
        var user = req.body;
        model
            .addNewUser(user)
            .then(function(users){
                console.log("New user server: "+ users);
                res.json(users);
            });
    }

    function findUserById(req, res){
        console.log("Inside server side findUserById");
        var userId = req.params.id;
        model
            .findUserById(userId)
            .then(function(user){
                res.json(user);
            });
    }

    function updateUser(req, res) {
    console.log("Inside server side updateUser");
    var userId = req.params.id;
    var userObj = req.body;
        userObj.delete("_id");
        model
            .updateUser(userId, userObj)
            .then(function(user){
                console.log("Updated user: " + user);
                res.json(user);
            });
    }

    function deleteUser(req, res) {
    console.log("Inside server side deleteUser");
    var userId = req.params.id;
        model
            .deleteUser(userId)
            .then(function(users){
                res.json(users);
            });
    }

}