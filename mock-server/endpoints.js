var loggedIn = false;

function login(req, res, next) {

    // This is to simulate a failed login
    if(req.body.userName === 'invalid') {
        res.sendStatus(401);
        loggedIn = false;
    }
    else {
        loggedIn = true;
        res.json({
            success: true
        });
    }
}

function config(req, res, next) {
     if(!loggedIn) {
        res.sendStatus(401);
    }
    else {
        loggedIn = true;
        res.json({
            menuOrder: {},
            viewConfig: [
                "sampleconfig"
            ]
        });
    }
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'POST',
        url: '/login',
        callback: login
    },
    {
        method: 'GET',
        url: '/config',
        callback: config
    }]
};

module.exports = apiEndpoints;
