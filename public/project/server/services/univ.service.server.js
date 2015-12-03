
module.exports = function(app, model) {


    app.get("/api/project/univ/uname:name", findUnivByName);
    app.get("/api/project/univ", findAllUnivs);
    app.delete("/api/project/univ/:univId", deleteUniv);
    app.post("/api/project/univ", addNewUniv);
    app.put("/api/project/univ/:univId", updateUniv);
    app.get("/api/project/univ/:univId", findUnivById);

    function findAllUnivs(req, res) {
            model
                .findAllUnivs()
                .then(function(univs){
                    res.json(univs);
                });
        }

        function findUnivByName(req, res) {
            var name = req.params.uname;
            model
                .findUnivByName(name)
                .then(function(univ){
                    res.json(univ);
                });
        }

        function addNewUniv(req, res) {
            var univ = req.body;
            model
                .addNewUniv(univ)
                .then(function(univs){
                    res.json(univs);
                });
        }

        function findUnivById(req, res){
            var univId = req.params.univId;
            model
                .findUnivById(univId)
                .then(function(univ){
                    res.json(univ);
                });
        }

        function updateUniv(req, res) {
        var univId = req.params.univId;
        var univObj = req.body;
            model
                .updateUniv(univId, univObj)
                .then(function(univ){
                    console.log("Updated user: " + univ);
                    res.json(univ);
                });
        }

        function deleteUniv(req, res) {
        var univId = req.params.univId;
            model
                .deleteUniv(univId)
                .then(function(univs){
                    res.json(univs);
                });
        }


};