"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = void 0;
const updateProfile = (req, res) => {
    try {
        res.json('Aca se actualizan los datos del usuario');
    }
    catch (error) {
        res.status(500).send({ message: error });
    }
};
exports.updateProfile = updateProfile;
