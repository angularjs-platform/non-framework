function login(req, res, next) {

    // This is to simulate a failed login
    if(req.body.userName === 'invalid') {
        res.sendStatus(401);
    }
    else {
        res.json({
            success: true
        });
    }
}

var apiEndpoints = {
    mainUrl: '',
    routes: [{
        method: 'POST',
        url: '/login',
        callback: login
    }]
};

module.exports = apiEndpoints;
