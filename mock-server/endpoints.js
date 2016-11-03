var loggedIn = false;

function login(req, res, next) {

    // This is to simulate a failed login
    if (req.body.userName === 'invalid') {
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
    if (!loggedIn) {
        res.sendStatus(401);
    }
    else {
        loggedIn = true;
        res.json({
            primaryMenuList: {
                "main": [
                    {
                        "id": "BM",
                        "title": "Bank Maintenance",
                        "reference": "BMRef",
                        "url": null
                    },
                    {
                        "id": "UM",
                        "title": "User Maintenance",
                        "reference": "UMRef",
                        "url": null
                    }
                ],
                "BMRef": [
                    {
                        "id": "BMRef-create",
                        "title": "Create Bank",
                        "reference": null,
                        "url": "/bank/create"
                    },
                    {
                        "id": "BMRef-list",
                        "title": "List Bank",
                        "reference": null,
                        "url": "/bank/list"
                    }
                ],
                "UMRef": [
                    {
                        "id": "UMRef-create",
                        "title": "Create User",
                        "reference": null,
                        "url": "/bankgroup/user/create"
                    },
                    {
                        "id": "UMRef-list",
                        "title": "List User",
                        "reference": null,
                        "url": "/bankgroup/user/list"
                    }
                ]
            },
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
