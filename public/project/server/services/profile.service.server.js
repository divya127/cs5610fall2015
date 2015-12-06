module.exports = function(app, model) {

    app.get("/api/project/profile/user/:userId", findProfileForUser);
    app.get("/api/project/profile", findAllProfiles);
    app.delete("/api/project/profile/:id", deleteProfile);
    app.post("/api/project/profile", addNewProfile);
    app.post("/api/project/profile/export", exportProfile);
    app.put("/api/project/profile/:id", updateProfile);
    app.get("/api/project/profile/:id", findProfileById);
    app.put("/api/project/profile/:id/univ/:uname", addUnivToAppliedList);

        function exportProfile(req, res) {
            console.log("Reached exxport server!");
            res.setHeader('Content-disposition', 'attachment; filename=theDocument.txt');
            res.setHeader('Content-type', 'text/plain');
            res.charset = 'UTF-8';
            res.write(req.body);
            res.end();
            console.log("Downloaded file!!!");
        }

        function addUnivToAppliedList(req, res) {
            model
                .addUnivToAppliedList(req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function findAllProfiles(req, res) {
            model
                .findAllProfiles()
                .then(function(profiles){
                    res.json(profiles);
                });
        }

        function findProfileForUser(req, res) {
            console.log("Inside server side: prof for user : " + req.params.userId);
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