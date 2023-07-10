const { admin } = require('../utils/adminInitializer');

module.exports = {
	async postOtp(req, res) {
		try {
			const phoneNumber = req.body.phoneNumber;
			admin
				.auth()
				.createUser({
					phoneNumber: phoneNumber,
				})
				.then((userRecord) => {
					// Send OTP to the user's phone number
					// (You can use a third-party service or Firebase phone number verification)
					console.log('OTP sent to', userRecord.phoneNumber);
					res.json({ success: true, msg: "Success" });
				})
				.catch((error) => {
					console.error('Error creating user:', error);
					res.status(500).json({ success: false, msg: 'Failed to send OTP' });
				});
		} catch (error) {
			res.status(400).send({
				success: false,
				msg: error
			});
		}
	},
}

