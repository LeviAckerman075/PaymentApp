const dbFunctions = require('../utils/databaseFunctions');

module.exports = {
    async getUser(req, res) {
        try {
            const phoneNumber = req.params.phoneNumber;
            await dbFunctions.checkCollectionExistence(phoneNumber).then((val)=>{
                console.log('success');
                res.status(200).send({
                    doesExist: val
                });
            });
        } catch (error) {
            res.status(400).send({
                msg: error
            });
        }
    },
    async postUser(req, res) {
        try {
            const phoneNumber = req.params.phoneNumber;
            const userName = req.body.userName;
            await dbFunctions.createCollection(userName, phoneNumber).then(()=>{
                console.log('success');
                res.status(200).send({
                    isSuccess: true
                });
            });
        } catch (error) {
            console.error('Error creating document:', error);
            res.status(500).send({
                msg: error
            });
        }
    },
}

