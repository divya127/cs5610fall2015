module.exports = function(app, model) {

    app.get("/api/project/profile/user/:userId", findProfileForUser);
    app.get("/api/project/profile", findAllProfiles);
    app.delete("/api/project/profile/:id", deleteProfile);
    app.post("/api/project/profile", addNewProfile);
    app.put("/api/project/profile/:id", updateProfile);
    app.get("/api/project/profile/:id", findProfileById);


        function findAllProfiles(req, res) {
            model
                .findAllProfiles()
                .then(function(profiles){
                    res.json(profiles);
                });
        }

        function findProfileForUser(req, res) {
            model
                .findProfileForUser(req.params.userId)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function findProfileById(req, res) {
            model
                .findProfileById(req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function deleteProfile(req, res) {
            model
                .deleteProfile(req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewProfile(req, res) {
            model
                .addNewProfile(req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateProfile(req, res) {
            model
                .updateProfile(req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

}