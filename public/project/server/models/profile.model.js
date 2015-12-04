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

        findSkillsByUserId : findSkillsByUserId,
        deleteSkillForUser : deleteSkillForUser,
        addNewSkillForUser : addNewSkillForUser,
        updateSkillsForUser : updateSkillsForUser,
        findSkillById : findSkillById,

        findRecoByUserId : findRecoByUserId,
        deleteRecoForUser : deleteRecoForUser,
        addNewRecoForUser : addNewRecoForUser,
        updateRecoForUser : updateRecoForUser,
        findRecoById : findRecoById
    };
    return api;

    function updateSkillsForUser(userId, skillId, skillObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            var allSkills = prof.skills;
            for(var skill in allSkills) {
                if(allSkills[skill]._id == skillId) {
                    allSkills[skill].title = skillObj.title;
                    allSkills[skill].count = skillObj.count;
                }
            }
            prof.save(function(err, profs){
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

    function addNewSkillForUser(authorId, userId, skillObj) {
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

    function addNewRecoForUser(userId, recoObj) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
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
        profileModel.findOne({userId : userId}, function(err, prof){
                    var allRecos = prof.recos;
                    for(var reco in allRecos) {
                        if(allRecos[reco]._id == recoId) {
                            allRecos.splice(reco, 1);
                        }
                    }
                    prof.save(function(err, profs){
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
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found profile! " + prof);
            deferred.resolve(prof.recos);
        });
        return deferred.promise;
    }

    function findRecoById(userId, recoId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found form! " + forms);
            if(!err){
                var allRecos = prof.recommendations;
                for(var reco in allRecos) {
                    if(allRecos[reco]._id == recoId) {
                       deferred.resolve( allRecos[reco]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function findSkillById(userId, skillId) {
        var deferred = q.defer();
        profileModel.findOne({userId : userId}, function(err, prof){
            console.log("Found form! " + forms);
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
        console.log(newProfile);
        profileModel.create(newProfile, function(err, prof){
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
}