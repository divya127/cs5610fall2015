var q = require("q");

module.exports = function(mongoose, db) {

    var ProfileSchema = require("./profile.schema.js")(mongoose);
    var profileModel = mongoose.model("profileModel", ProfileSchema);

    var api = {
        findProfileForUser : findProfileForUser,
        findAllProfiles : findAllProfiles,
        deleteProfile : deleteProfile,
        addNewProfile : addNewProfile,
        updateProfile : updateProfile,
        findProfileById : findProfileById,
        addUnivToAppliedList : addUnivToAppliedList,

        //Skills
        findSkillsByUserId : findSkillsByUserId,
        deleteSkillForUser : deleteSkillForUser,
        addNewSkillForUser : addNewSkillForUser,
        updateSkillsForUser : updateSkillsForUser,
        findSkillById : findSkillById,

        //Recommendations
        findRecoByUserId : findRecoByUserId,
        deleteRecoForUser : deleteRecoForUser,
        addNewRecoForUser : addNewRecoForUser,
        updateRecoForUser : updateRecoForUser,
        findRecoById : findRecoById,

        //Projects
        findProjectsByUserId : findProjectsByUserId,
        deleteProjectForUser : deleteProjectForUser,
        addNewProjectForUser : addNewProjectForUser,
        updateProjectForUser : updateProjectForUser,
        findProjectById : findProjectById,

        //Clubs
        findClubsByUserId : findClubsByUserId,
        deleteClubForUser : deleteClubForUser,
        addNewClubForUser : addNewClubForUser,
        updateClubForUser : updateClubForUser,
        findClubById : findClubById,

        //TestScores
        findTestScoresByUserId : findTestScoresByUserId,
        deleteTestScoreForUser : deleteTestScoreForUser,
        addNewTestScoreForUser : addNewTestScoreForUser,
        updateTestScoreForUser : updateTestScoreForUser,
        findTestScoreById : findTestScoreById,

        //Publications
        findPublicationsByUserId : findPublicationsByUserId,
        deletePublicationForUser : deletePublicationForUser,
        addNewPublicationForUser : addNewPublicationForUser,
        updatePublicationForUser : updatePublicationForUser,
        findPublicationById : findPublicationById

    };
    return api;

    function updateSkillsForUser(userId, skillId, skillObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            var allSkills = prof.skills;
            console.log("Inside updateSkills: " + allSkills);
            for(var skill in allSkills) {
                if(allSkills[skill]._id == skillId) {
                    allSkills[skill].title = skillObj.title;
                    allSkills[skill].count = skillObj.count;
                }
            }
            prof.save(function(err, profs){
                console.log("Update skill: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addUnivToAppliedList(userId, univObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.univsApplied.push(univObj);
            prof.save(function(err, profs){
            console.log("Inside model.js updating univs list: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function updateRecoForUser(userId, recoId, recoObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            var allrecos = prof.recommendations;
            for(var reco in allrecos) {
                if(allrecos[reco]._id == recoId) {
                    allrecos[reco].content = recoObj.content;
                }
            }
            prof.save(function(err, profs){
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addNewSkillForUser(userId, skillObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.skills.push(skillObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });

        return deferred.promise;
    }

    function addNewRecoForUser(authorId, receipientId, recoObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : receipientId}, function(err, prof){
            prof.recommendations.push(recoObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });
        return deferred.promise;
    }

    function deleteSkillForUser(userId, skillId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allSkills = prof.skills;
                    for(var skill in allSkills) {
                        if(allSkills[skill]._id == skillId) {
                            allSkills.splice(skill, 1);
                        }
                    }
                    prof.save(function(err, profs){
                        deferred.resolve(profs);
                    });
                });
        return deferred.promise;
    }

    function deleteRecoForUser(userId, recoId) {
        var deferred = q.defer();
        console.log("Inside deletereco");
        profileModel.findOne({userId : userId}, function(err, profile){
                var allRecos = [];
               allRecos = profile.recommendations;
                console.log("All recommendations : " + allRecos);
                for (var reco in allRecos) {
               // console.log("Input recoId : " + recoId + " allRecos[reco]._id : " + allRecos[reco]._id);
                    if(allRecos[reco]._id == recoId) {
                        profile.recommendations.splice(reco, 1);
                        console.log("Delete successful!");
                        break;
                    }
                }
                profile.save(function(err, profs){
                    deferred.resolve(profs);
                });
            });
        return deferred.promise;
    }

    function findSkillsByUserId(userId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found profile! " + prof);
            deferred.resolve(prof.skills);
        });
        return deferred.promise;
    }

    function findRecoByUserId(userId) {
        var deferred = q.defer();
        console.log("input userID findrecofor user : " + userId);
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found profile! " + prof.recommendations);
            deferred.resolve(prof.recommendations);
        });
        return deferred.promise;
    }

    function findRecoById(userId, recoId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            //console.log("Found prof! " + prof);
            if(!err){
                var allRecos = prof.recommendations;
                for(var reco in allRecos) {
                    if(allRecos[reco]._id == recoId) {
                        console.log("Found reco : " + allRecos[reco]);
                       deferred.resolve(allRecos[reco]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findSkillById(userId, skillId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            if(!err){
                var allSkills = prof.skills;
                for(var skill in allSkills) {
                    if(allSkills[skill]._id == skillId) {
                       deferred.resolve(allSkills[skill]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findProfileById(userId){
        var deferred = q.defer();
        profileModel.findById(userId, function(err, user){
                        deferred.resolve(user);
                    });
        return deferred.promise;
    }

    function findProfileForUser(userId) {
        var deferred = q.defer();
        console.log("Inside prof model userId: " + userId);
        profileModel.find({userId : userId}, function(err, user){
                    console.log("Found prof : " + user);
                        deferred.resolve(user);
                    });
        return deferred.promise;
    }

    function findAllProfiles() {
        var deferred = q.defer();
        profileModel.find(function(err, users){
            deferred.resolve(users);
        });
        return deferred.promise;
    }

    function deleteProfile(id) {
        var deferred = q.defer();
        profileModel.remove({_id: userId}, function(err, user){
               if(err) {
                   deferred.reject(err);
               } else {
                   deferred.resolve(user);
               }
        });
        return deferred.promise;
    }

    function addNewProfile(newProfile) {
        var deferred = q.defer();
        console.log("New user profile " + newProfile);
        profileModel.create(newProfile, function(err, prof){
              console.log("Received new prof ! " + prof);
             deferred.resolve(prof);
        });
        return deferred.promise;
    }

    function updateProfile(id, profObj) {
        var deferred = q.defer();
        profileModel.update({_id: id}, {$set: profObj}, function(err, prof) {
                 if(err) {
                    console.log("Cud not find Usr!!");
                     deferred.reject(err);
                 } else {
                 console.log("Update successful!");
                     profileModel.findById(id, function(err,usr) {
                            console.log(usr);
                            deferred.resolve(usr);
                     });
                 }
             });
        return deferred.promise;
    }

//*********************************************************************
    function updateProjectForUser(userId, projId, projObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, proj){
            var allSkills = proj.projects;
            console.log("Inside updateProjects: " + allSkills);
            for(var skill in allSkills) {
                if(allSkills[skill]._id == projId) {
                    allSkills[skill].title = projObj.title;
                    allSkills[skill].description = projObj.description;
                }
            }
            proj.save(function(err, profs){
                console.log("Update projects: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addNewProjectForUser(userId, projObj) {
        var deferred = q.defer();
        console.log("MODEL JS: Receive userId " + userId + " obj "+ projObj);
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.projects.push(projObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });

        return deferred.promise;
    }

    function deleteProjectForUser(userId, projId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allSkills = prof.projects;
                    for(var skill in allSkills) {
                        if(allSkills[skill]._id == projId) {
                            allSkills.splice(skill, 1);
                        }
                    }
                    prof.save(function(err, profs){
                        deferred.resolve(profs);
                    });
                });
        return deferred.promise;
    }

    function findProjectById(userId, projId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            if(!err){
                var allSkills = prof.projects;
                console.log("Found proj: " + allSkills + " projId: " + projId);
                for(var skill in allSkills) {
                    if(allSkills[skill]._id == projId) {
                       deferred.resolve(allSkills[skill]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findProjectsByUserId(userId) {
        var deferred = q.defer();
        console.log("Inside find projects for user : " + userId);
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found profile! " + prof.projects);
            deferred.resolve(prof.projects);
        });
        return deferred.promise;
    }

    //*********************************************************************
    function updateClubForUser(userId, clubId, clubObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, proj){
            var allSkills = proj.clubs;
            console.log("Inside updateClubs: " + allSkills);
            for(var skill in allSkills) {
                if(allSkills[skill]._id == clubId) {
                    allSkills[skill].clubName = clubObj.clubName;
                }
            }
            proj.save(function(err, profs){
                console.log("Update clubs: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addNewClubForUser(userId, clubObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.clubs.push(clubObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });

        return deferred.promise;
    }

    function deleteClubForUser(userId, clubId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allSkills = prof.clubs;
                    for(var skill in allSkills) {
                        if(allSkills[skill]._id == clubId) {
                            allSkills.splice(skill, 1);
                        }
                    }
                    prof.save(function(err, profs){
                        deferred.resolve(profs);
                    });
                });
        return deferred.promise;
    }

    function findClubById(userId, clubId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            if(!err){
                var allSkills = prof.clubs;
                for(var skill in allSkills) {
                    if(allSkills[skill]._id == clubId) {
                       deferred.resolve(allSkills[skill]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findClubsByUserId(userId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            //console.log("Found profile! " + prof);
            deferred.resolve(prof.clubs);
        });
        return deferred.promise;
    }

    //*********************************************************************
    function updateTestScoreForUser(userId, testScoreId, testScoreObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, proj){
            var allSkills = proj.testScores;
            console.log("Inside updateTestScores: " + allSkills);
            for(var skill in allSkills) {
                if(allSkills[skill]._id == testScoreId) {
                    allSkills[skill].test = testScoreObj.test;
                    allSkills[skill].scoreAcheived = testScoreObj.scoreAcheived;
                    allSkills[skill].scoreMax = testScoreObj.scoreMax;
                    allSkills[skill].org = testScoreObj.org;
                }
            }
            proj.save(function(err, profs){
                console.log("Update TestScores: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addNewTestScoreForUser(userId, testScoreObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.testScores.push(testScoreObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });

        return deferred.promise;
    }

    function deleteTestScoreForUser(userId, testScoreId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allSkills = prof.testScores;
                    for(var skill in allSkills) {
                        if(allSkills[skill]._id == testScoreId) {
                            allSkills.splice(skill, 1);
                        }
                    }
                    prof.save(function(err, profs){
                        deferred.resolve(profs);
                    });
                });
        return deferred.promise;
    }

    function findTestScoreById(userId, testScoreId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            if(!err){
                var allSkills = prof.testScores;
                for(var skill in allSkills) {
                    if(allSkills[skill]._id == testScoreId) {
                       deferred.resolve(allSkills[skill]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findTestScoresByUserId(userId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            //console.log("Found profile! " + prof);
            deferred.resolve(prof.testScores);
        });
        return deferred.promise;
    }

    //*********************************************************************
    function updatePublicationForUser(userId, pubId, pubObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, proj){
            var allSkills = proj.publications;
            console.log("Inside updateTestScores: " + allSkills);
            for(var skill in allSkills) {
                if(allSkills[skill]._id == pubId) {
                    allSkills[skill].title = pubObj.title;
                    allSkills[skill].members = pubObj.members;
                    allSkills[skill].description = pubObj.description;
                }
            }
            proj.save(function(err, profs){
                console.log("Update TestScores: " + profs);
                deferred.resolve(profs);
            });
        });
        return deferred.promise;
    }

    function addNewPublicationForUser(userId, pubObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            prof.publications.push(pubObj);
            prof.save(function(err, fields){
                console.log("Saved prof" + fields);
                deferred.resolve(fields);
            });
        });

        return deferred.promise;
    }

    function deletePublicationForUser(userId, pubId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allSkills = prof.publications;
                    for(var skill in allSkills) {
                        if(allSkills[skill]._id == pubId) {
                            allSkills.splice(skill, 1);
                        }
                    }
                    prof.save(function(err, profs){
                        deferred.resolve(profs);
                    });
                });
        return deferred.promise;
    }

    function findPublicationById(userId, pubId) {
        var deferred = q.defer();
        console.log("Inside find publication! ");
        profileModel.findOne({userId : userId}, function(err, prof){
            if(!err){
                console.log("Found profile! " + prof);
                var allSkills = prof.publications;
                for(var skill in allSkills) {
                    if(allSkills[skill]._id == pubId) {
                       deferred.resolve(allSkills[skill]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findPublicationsByUserId(userId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            deferred.resolve(prof.publications);
        });
        return deferred.promise;
    }



}