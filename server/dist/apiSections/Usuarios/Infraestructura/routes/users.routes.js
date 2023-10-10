"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controllers:
const createNewUser_controller_1 = require("../controllers/createNewUser.controller");
const updateProfile_controller_1 = require("../controllers/updateProfile.controller");
const router = (0, express_1.Router)();
// Create New User
router.post('/newuser', createNewUser_controller_1.createNewUser);
//Update User Data:
router.put('/updateprofile', updateProfile_controller_1.updateProfile);
exports.default = router;
