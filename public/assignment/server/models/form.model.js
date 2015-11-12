var forms = require('form.mock.json');
module.exports = function(app) {

    var service = {
        findFormByTitle : findFormByTitle,
    };
    return service;

    app.get('/api/user', function (req, res) {
            res.json(forms);
        });

    app.get('/api/user/:id', function (req, res) {
        var index = req.params.id;
        console.log(index);
        res.json(forms[index]);
    });

    app.delete('/api/user/:id', function (req, res) {
        var index = req.params.id;
        forms.splice(index, 1);
        res.json(forms);
    });

    app.post('/api/user', function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        courses.push(newUser);
        res.json(forms);
    });

    app.put('/api/user/:id', function (req, res) {
        var index = req.params.id;
        forms[index] = req.body;
        res.json(forms);
    });

    function findFormByTitle(title) {
        for(var form in forms) {
            if(forms[form].title.localeCompare(title) == 0) {
                console.log("Found form!");
                callback(forms[form]);
            }
        }
        callback(null);
    }


};

