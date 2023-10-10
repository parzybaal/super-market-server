"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = void 0;
const createNewUser = (req, res) => {
    try {
        res.send('Aca se crea el usuario');
    }
    catch (error) {
        res.status(500).send({ message: 'Error' });
    }
};
exports.createNewUser = createNewUser;
