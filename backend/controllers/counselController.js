const counselModel = require('../models/counselModel');

module.exports = {
    async getCounsels(req, res) {
        try {
            const userName = req.params.userName;
            return res.status(200).send({
                msg: "Get Request Successful!!",
                userName
            });
        } catch (error) {
            res.status(400).send({
                msg: error
            });
        }
    },
    async postCounsel(req, res) {
        try {
            const userName = req.params.userName;
            return res.status(200).send({
                msg: "Post Request Successful!!",
                userName
            });
        } catch (error) {
            res.status(400).send({
                msg: error
            });
        }
    },
    async deleteCounsel(req, res) {
        try {
            const userName = req.params.userName;
            const counselId = req.params.counselId;
            return res.status(200).send({
                msg: "Delete Request Successful!!",
                userName,
                counselId
            });
        } catch (error) {
            res.status(400).send({
                msg: error
            });
        }
    }
}