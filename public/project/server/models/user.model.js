var q = require("q");

module.exports = function(mongoose, db, passport, LocalStrategy, GoogleStrategy) {

    var UsersSchema = require("./user.schema.js")(mongoose);
    var usersModel = mongoose.model("usersModel", UsersSchema);
    var googleCredentials = require("./google.js");

    var api = {
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            findAllUsers: findAllUsers,
            deleteUser : deleteUser,
            addNewUser : addNewUser,
            updateUser: updateUser,
            createGoogleUser : createGoogleUser,
            findByFirstNameOrLastName : findByFirstNameOrLastName,
            getRandomProfiles : getRandomProfiles,
        };

        passport.use(new LocalStrategy(
        function(username, password, done)
        {
            usersModel.findOne({username: username, password: password}, function(err, user)
            {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                return done(null, user);
            })
        }));

        passport.serializeUser(function(user, done)
        {
            done(null, user);
        });

        passport.deserializeUser(function(user, done)
        {
            usersModel.findById(user._id, function(err, user)
            {
                done(err, user);
            });
        });

        passport.use(new GoogleStrategy({
            clientID : googleCredentials.clientID,
            clientSecret : googleCredentials.clientSecret,
            callbackURL : "http://127.0.0.1:3000/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function(){
                createGoogleUser(profile)
                .then(function(user){
                    console.log("New User from google: " + user);
                    return done(null, user);
                });
            });
        }

        ));


        return api;


        function getRandomProfiles(userId){
            var deferred = q.defer();
            var n;
            usersModel.count(function (e, count) {
                   console.log("Count : " + count);
                   n = count;
                   var r = function(){return Math.floor( Math.random() * n )};
                   console.log("random " + r());
                   usersModel.find({'_id': {$ne: userId}}, {} ,{ limit: 3 , skip : r()}, function(err, results) {
                           console.log("2 Random records ! : " + results);
                           deferred.resolve(results);
                        });
                 });
            console.log("%%%%%%%%%%%%%%%%%%%%INside randome profiles model.js!!!");
            return deferred.promise;
        }

        function findByFirstNameOrLastName(term){
            var deferred = q.defer();
            var results = [];
            console.log("****************Search term model : " + term);
            usersModel.find({firstName : new RegExp(term, "i")}, function(err, profs){
                 console.log("Found profile match firstName : ! " + profs);
                 results.push(profs);

                usersModel.find({lastName : new RegExp(term, "i")}, function(err, users){
                      console.log("Found profile match lastName : ! " + users);
                      results.push(users);

                     deferred.resolve(results);
                        });
             });
            return deferred.promise;
        }

        function findUserById(userId) {
        console.log("inside user.model.js findUserById!!!!!");
            var deferred = q.defer();
            usersModel.findById(userId, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
        console.log("inside user.model.js findUserByCredentials");
            var deferred = q.defer();
            console.log(credentials.username + " " + credentials.password);
             usersModel.find({username: credentials.username,
                            password: credentials.password}, function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function findUserByUsername(username) {
        console.log("inside user.model.js findUserByUsername");
            var deferred = q.defer();
            usersModel.find({username : username}, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findAllUsers() {
        console.log("inside user.model.js findAll");
            var deferred = q.defer();
            usersModel.find(function(err, users){
                deferred.resolve(users);
            });
            return deferred.promise;
        }

        function deleteUser(userId) {
        console.log("inside user.model.js deleteUser");
            var deferred = q.defer();
            usersModel.remove({_id: userId}, function(err, user){
                   if(err) {
                       deferred.reject(err);
                   } else {
                       deferred.resolve(user);
                   }
            });
            return deferred.promise;
        }

        function addNewUser(newUser) {
        console.log("inside user.model.js addNewUser Divya project");
            var deferred = q.defer();
            console.log(newUser);
            usersModel.create(newUser, function(err, doc){
            if(err){
                console.log("EROORRRRR no new user " + err);
            } else{
                 console.log("New User created: " + doc);
                 deferred.resolve(doc);
                 }
            });
            return deferred.promise;
        }

        function updateUser(userId, userObj) {
        console.log("inside user.model.js updateUser");
            var deferred = q.defer();
            console.log("update user userId: "+ userId);
            //userObj.delete("_id");
            usersModel.update({_id: userId}, {$set: userObj}, function(err, user) {
                     if(err) {
                        console.log("Cud not find Usr!!");
                         deferred.reject(err);
                     } else {
                     console.log("Update successful!");
                         usersModel.findById(userId, function(err,usr) {
                                console.log(usr);
                                deferred.resolve(usr);
                         });
                     }
                 });
            return deferred.promise;
        }

        function createGoogleUser(googleUser) {
            var deferred = q.defer();
            console.log("Inside createGoogleUser: " + googleUser);
            usersModel.find({googleId: googleUser.id}, function(err, doc) {
                var user = null;
                if (doc && doc.length > 0) {
                    user = doc[0];
                } else {
                    user = new usersModel();
                    user.accountType = "Student";
                }

                user.googleId = googleUser.id;
                user.displayName = googleUser.displayName;
                user.firstName = googleUser.name.givenName;
                user.lastName = googleUser.name.familyName;
                user.photo = googleUser.photos[0].value;
                user.save(function(err, doc) {
                    deferred.resolve(doc);
                });

            });
            return deferred.promise;
        }

}