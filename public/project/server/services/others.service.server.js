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

    app.get("/api/project/profile/projects/user/:userId", findProjectsByUserId);
    app.delete("/api/project/profile/projects/:id/user/:userId", deleteProjectForUser);
    app.post("/api/project/profile/projects/user/:userId", addNewProjectForUser);
    app.put("/api/project/profile/projects/:id/user/:userId", updateProjectForUser);
    app.get("/api/project/profile/projects/:id/user/:userId", findProjectById);

    app.get("/api/project/profile/clubs/user/:userId", findClubsByUserId);
    app.delete("/api/project/profile/clubs/:id/user/:userId", deleteClubForUser);
    app.post("/api/project/profile/clubs/user/:userId", addNewClubForUser);
    app.put("/api/project/profile/clubs/:id/user/:userId", updateClubForUser);
    app.get("/api/project/profile/clubs/:id/user/:userId", findClubById);

    app.get("/api/project/profile/testscores/user/:userId", findTestScoresByUserId);
    app.delete("/api/project/profile/testscores/:id/user/:userId", deleteTestScoreForUser);
    app.post("/api/project/profile/testscores/user/:userId", addNewTestScoreForUser);
    app.put("/api/project/profile/testscores/:id/user/:userId", updateTestScoreForUser);
    app.get("/api/project/profile/testscores/:id/user/:userId", findTestScoreById);

    app.get("/api/project/profile/pubs/user/:userId", findPublicationsByUserId);
    app.delete("/api/project/profile/pubs/:id/user/:userId", deletePublicationForUser);
    app.post("/api/project/profile/pubs/user/:userId", addNewPublicationForUser);
    app.put("/api/project/profile/pubs/:id/user/:userId", updatePublicationForUser);
    app.get("/api/project/profile/pubs/:id/user/:userId", findPublicationById);

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

        //SKills crud operations
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

    //Projects Crud Operations
        function findProjectsByUserId(req, res) {
            model
                .findProjectsByUserId(req.params.userId)
                .then(function(skills){
                    res.json(skills);
                });
        }

        function findProjectById(req, res) {
            model
                .findProjectById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deleteProjectForUser(req, res) {
            model
                .deleteProjectForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewProjectForUser(req, res) {
            model
                .addNewProjectForUser(req.params.userId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateProjectForUser(req, res) {
            model
                .updateProjectForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        //Clubs Crud Operations
        function findClubsByUserId(req, res) {
            model
                .findClubsByUserId(req.params.userId)
                .then(function(skills){
                    res.json(skills);
                });
        }

        function findClubById(req, res) {
            model
                .findClubById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deleteClubForUser(req, res) {
            model
                .deleteClubForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewClubForUser(req, res) {
            model
                .addNewClubForUser(req.params.userId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateClubForUser(req, res) {
            model
                .updateClubForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

    //TestScores Crud Operations
        function findTestScoresByUserId(req, res) {
            model
                .findTestScoresByUserId(req.params.userId)
                .then(function(skills){
                    res.json(skills);
                });
        }

        function findTestScoreById(req, res) {
            model
                .findTestScoreById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deleteTestScoreForUser(req, res) {
            model
                .deleteTestScoreForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewTestScoreForUser(req, res) {
            model
                .addNewTestScoreForUser(req.params.userId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updateTestScoreForUser(req, res) {
            model
                .updateTestScoreForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        //Publications Crud Operations
        function findPublicationsByUserId(req, res) {
            model
                .findPublicationsByUserId(req.params.userId)
                .then(function(skills){
                    res.json(skills);
                });
        }

        function findPublicationById(req, res) {
        console.log("Inside server side find publication");
            model
                .findPublicationById(req.params.userId, req.params.id)
                .then(function(skill){
                    res.json(skill);
                });
        }

        function deletePublicationForUser(req, res) {
            model
                .deletePublicationForUser(req.params.userId, req.params.id)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function addNewPublicationForUser(req, res) {
            model
                .addNewPublicationForUser(req.params.userId, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

        function updatePublicationForUser(req, res) {
            model
                .updatePublicationForUser(req.params.userId, req.params.id, req.body)
                .then(function(profile){
                    res.json(profile);
                });
        }

}