var nodemailer = require('nodemailer');
var fs = require('fs');

var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "academiainc90@gmail.com",
                pass: "mapreduce"
            }
        });

module.exports = function(app, model) {

    app.get("/api/project/profile/user/:userId", findProfileForUser);
    app.get("/api/project/profile", findAllProfiles);
    app.delete("/api/project/profile/:id", deleteProfile);
    app.post("/api/project/profile", addNewProfile);
    app.get("/api/project/profile/export/:userId", exportProfile);
    app.put("/api/project/profile/:id", updateProfile);
    app.get("/api/project/profile/:id", findProfileById);
    app.post("/send", mailReco);
    app.put("/api/project/profile/:id/univ/:uname", addUnivToAppliedList);

        function mailReco(req,res) {
        var mailOBj = req.body;
            var mailOptions = {
                    to : mailOBj.to,
                    cc : mailOBj.cc,
                    subject : mailOBj.subject,
                    text : mailOBj.content
                };
                console.log(mailOptions);
                smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log("###############################" + error);
                    res.end("error");
                }else{
                    console.log("****************************Message sent: " + response.message);
                    res.end("sent");
                    }
                });
        }

        function exportProfile(req, res) {
            console.log("Reached exxport server!");
            var userId = req.params.userId;
            console.log("INput userId : " + userId);
            var summary = "User Profile Summary\n";

                model.findProjectsByUserId(userId)
                .then(function(projs){
                    console.log("Starting projects");
                    console.log("projs : " + projs);
                    summary += "\n Projects: ";
                    var count = 1;
                    for (var proj in projs) {
                        if (typeof projs[proj].title != "undefined"){
                            summary += "\n " + count + ". Title" + projs[proj].title + "\n " +
                                          projs[proj].description ;
                            count++;
                        } else {
                            break;
                        }
                    }

                    model.findRecoByUserId(userId)
                    .then(function(recos){
                        console.log("Starting recoms");
                        console.log("recos : " + recos);
                        count = 1;
                        summary += "\n\n Recommendations: ";
                        for (var reco in recos) {
                            if (typeof recos[reco].authorName != "undefined"){
                                summary += "\n " + count + ". Professor " + recos[reco].authorName + "\n " +
                                             recos[reco].content ;
                                count++;
                            } else {
                                break;
                            }
                        }

                        model.findSkillsByUserId(userId)
                            .then(function(skills){
                                console.log("Starting skills");
                                console.log("skills : " + skills);
                                summary += "\n\n Skills: ";
                                for (var skill in skills) {
                                    if (typeof skills[skill].title != "undefined"){
                                        summary +=  skills[skill].title + ", ";
                                    } else {
                                        break;
                                    }
                                }

                        model.findPublicationsByUserId(userId)
                            .then(function(pubs){
                                console.log("Starting publications");
                                console.log("pubs : " + pubs);
                                count = 1;
                                summary += "\n\n Publications: ";
                                for (var pub in pubs) {
                                    if (typeof pubs[pub].title != "undefined"){
                                        summary += "\n " + count + ". Title: " + pubs[pub].title +
                                                    "\n Members: " + pubs[pub].members + " \n "+
                                                     pubs[pub].description + " \n";
                                        count++;
                                    } else {
                                        break;
                                    }
                                }

                                model.findClubsByUserId(userId)
                                .then(function(clubs){
                                    console.log("Starting clubs");
                                    console.log("clubs : " + clubs);
                                    summary += "\n Clubs: ";
                                    for (var club in clubs) {
                                        if (typeof clubs[club].clubName != "undefined"){
                                            summary +=  clubs[club].clubName + ", ";
                                        } else {
                                            break;
                                        }
                                    }

                                    console.log("Processed projects, summary " + summary);
                                    res.attachment('profileSummary.txt');
                                    res.setHeader('Content-Type', 'application/octet-stream');
                                    res.end(summary, 'UTF-8');
                                    console.log("Downloaded file!!!");
                                });
                            });
                        });
                    });

                });
        }

        function getSummary(projs) {
            var sum = "";
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!Writing projects: " + data);
            var count = 1;
            for (var proj in projs) {
                sum += "\n " + count+ ". " + projs[proj].title + "\n " +
                            "\n " + projs[proj].description + " \n";
            }
            return sum;
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