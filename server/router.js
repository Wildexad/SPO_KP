const RouterClass = require('express').Router;

const { CheckAuth } = require('./users');
const Users = require("./users.js");
const Admins = require("./admins.js");
const Flowers = require("./flowers.js");
const Providers = require("./providers.js");
const Vendors = require("./vendors.js");
const mainRouter = new RouterClass();

// Users
mainRouter.get('/users/list', Users.GetAllUsers);
mainRouter.get('/users/info', CheckAuth, Users.GetUserById);
mainRouter.post('/users/register', Users.PostUserForRegister);
mainRouter.post('/users/login', Users.PostUserForLogin);
mainRouter.post('/users/refresh-token', Users.RefreshToken);
mainRouter.get('/users/logout', CheckAuth, Users.GetUserForLogout);

// Admins
mainRouter.get('/admins/list', Admins.GetAllAdmins);
mainRouter.get('/admins/info', CheckAuth, Admins.GetAdminById);
mainRouter.post('/admins/register', Admins.PostAdminForRegister);
mainRouter.post('/admins/login', Admins.PostAdminForLogin);
mainRouter.post('/admins/refresh-token', Admins.RefreshToken);
mainRouter.get('/admins/logout', CheckAuth, Admins.GetAdminForLogout);

// Flowers
mainRouter.get('/flowers/list', CheckAuth, Flowers.GetAllFlowers);
mainRouter.get('/flowers/:id', CheckAuth, Flowers.GetFlowerById);
mainRouter.post('/flowers/', CheckAuth, Flowers.CreateFlower);
mainRouter.put('/flowers/:id', CheckAuth, Flowers.UpdateFlower);
mainRouter.delete('/flowers/:id', CheckAuth, Flowers.DeleteFlower);

// Providers
mainRouter.get('/providers/list', CheckAuth, Providers.GetAllProviders);
mainRouter.get('/providers/:id', CheckAuth, Providers.GetProviderById);
mainRouter.post('/providers/:id', CheckAuth, Providers.CreateProvider);
mainRouter.put('/providers/', CheckAuth, Providers.UpdateProvider);
mainRouter.delete('/providers/:id', CheckAuth, Providers.DeleteProvider);

// Vendors
mainRouter.get('/vendors/list', CheckAuth, Vendors.GetAllVendors);
mainRouter.get('/vendors/:id', CheckAuth, Vendors.GetVendorsById);
mainRouter.post('/vendors/:id', CheckAuth, Vendors.CreateVendor);
mainRouter.put('/vendors/', CheckAuth, Vendors.UpdateVendor);
mainRouter.delete('/vendors/:id', CheckAuth, Vendors.DeleteVendor);

module.exports.mainRouter = mainRouter