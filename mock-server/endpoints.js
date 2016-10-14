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
                "CMRef": [
                    {
                        "id": "CMRef-create",
                        "title": "Create Customer",
                        "reference": null,
                        "url": "/customer/create"
                    },
                    {
                        "id": "CMRef-list",
                        "title": "List Customer",
                        "reference": null,
                        "url": "/customer/list"
                    }
                ],
                "main": [
                    {
                        "id": "BM",
                        "title": "Bank Maintenance",
                        "reference": "BMRef",
                        "url": null
                    },
                    {
                        "id": "CM",
                        "title": "Customer Maintenance",
                        "reference": "CMRef",
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
