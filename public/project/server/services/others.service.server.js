module.exports = function(app, model) {

    app.get("/api/project/profile/skills/user/:userId", findSkillsByUserId);
    app.delete("/api/project/profile/skills/:id/user/:userId", deleteSkillForUser);
    app.post("/api/project/profile/skills/user/:userId", addNewSkillForUser);
    app.put("/api/project/profile/skills/:id/user/:userId", updateSkillsForUser);
    app.get("/api/project/profile/skills/:id/user/:userId", findSkillById);

    app.get("/api/project/profile/reco/user/:userId", findRecoByUserId);
    app.delete("/api/project/profile/reco/:id/user/:userId", deleteRecoForUser);
    app.post("/api/project/profile/reco/user1/:authorId/user2/:receiptId", addNewRecoForUser);
    app.put("/api/project/profile/reco/:id/user/:userId", updateRecoForUser);
    app.get("/api/project/profile/reco/:id/user/:userId", findRecoById);

        function findRecoByUserId(req, res) {
            model
                .findRecoByUserId(req.params.userId)
                .then(function(recos){
                    res.json(recos);
                });
        }

        function findRecoById(req, res) {
            model
                .findRecoById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deleteRecoForUser(req, res) {
            model
                .deleteRecoForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewRecoForUser(req, res) {
            model
                .addNewRecoForUser(req.params.authorId,req.params.receiptId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateRecoForUser(req, res) {
            model
                .updateRecoForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function findSkillsByUserId(req, res) {
            model
                .findSkillsByUserId(req.params.userId)
                .then(function(skills){
                    res.json(skills);
                });
        }

        function findSkillById(req, res) {
            model
                .findSkillById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deleteSkillForUser(req, res) {
            model
                .deleteSkillForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewSkillForUser(req, res) {
            model
                .addNewSkillForUser(req.params.userId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateSkillsForUser(req, res) {
            model
                .updateSkillsForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

}