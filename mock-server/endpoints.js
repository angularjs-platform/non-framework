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
            primaryMenuList: [
                {
                    "id": "main",
                    "menuList": [{
                            "id": "menu-one",
                            "title": "Top Menu One",
                            "ref": "menu-one-ref"
                        },
                        {
                            "id": "menu-two",
                            "title": "Top Menu Two",
                            "url": "menu-two-ref"
                        },
                        {
                            "id": "menu-three",
                            "title": "Top Menu Three",
                            "url": "menu-three-ref"
                        }
                    ]
                },
                {
                    "id": "menu-one-ref",
                    "menuList": [{
                            "id": "menu-one-one",
                            "title": "Menu One One",
                            "url": "menu-one-one-ref"
                        },
                        {
                            "id": "menu-one-two",
                            "title": "Menu One Two",
                            "url": "/menuOneTwo"
                        },
                        {
                            "id": "menu-one-three",
                            "title": "Menu One Three",
                            "url": "menu-one-three-ref"
                        }
                    ]
                }
            ],
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
