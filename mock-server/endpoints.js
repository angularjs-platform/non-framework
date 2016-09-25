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
                            "id": "menu-customer-mgmt",
                            "title": "Customer Management",
                            "ref": "menu-customer-mgmt-ref"
                        },
                        {
                            "id": "menu-bank-mgmt",
                            "title": "Bank Management",
                            "ref": "menu-bank-mgmt-ref"
                        }
                    ]
                },
                {
                    "id": "menu-customer-mgmt-ref",
                    "menuList": [{
                            "id": "menu-customer-mgmt-list",
                            "title": "List",
                            "url": "#/customer/list"
                        },
                        {
                            "id": "menu-customer-mgmt-create",
                            "title": "Create",
                            "url": "#/customer/create"
                        }
                    ]
                },
                {
                    "id": "menu-bank-mgmt-ref",
                    "menuList": [{
                            "id": "menu-bank-mgmt-list",
                            "title": "List",
                            "url": "#/bank/list"
                        },
                        {
                            "id": "menu-bank-mgmt-create",
                            "title": "Create",
                            "url": "#/bank/create"
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
