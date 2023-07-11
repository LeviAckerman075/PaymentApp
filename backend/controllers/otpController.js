const { admin } = require('../utils/adminInitializer');
const { getAuth, RecaptchaVerifier, signInWithPhoneNumber } = require("firebase/auth") ;
const {initializeApp} = require("firebase/app");

module.exports = {
	async postOtp(req, res) {
		try {
			// Import the functions you need from the SDKs you need
			const firebaseConfig = {
				apiKey: "AIzaSyAypoNEOcqxg726alrbt15-8ucwFvci4K8",
				authDomain: "paymentapp-2c360.firebaseapp.com",
				projectId: "paymentapp-2c360",
				storageBucket: "paymentapp-2c360.appspot.com",
				messagingSenderId: "1095062938993",
				appId: "1:1095062938993:web:dfd50dfa09923d9388c2d0",
				measurementId: "G-CXCHW968KC"
			};

			// Initialize Firebase
			const app = initializeApp(firebaseConfig);


			const phoneNumber = req.body.phoneNumber;
			const auth2 = getAuth(app);
			console.log(1);
			// const appVerifier =  new RecaptchaVerifier(auth2, 'recaptcha-container', {});
			console.log(2)
			signInWithPhoneNumber(auth2, phoneNumber)
				.then((confirmationResult) => {
					// SMS sent. Prompt user to type the code from the message, then sign the
					// user in with confirmationResult.confirm(code).
					window.confirmationResult = confirmationResult;
					// ...
				}).catch((error) => {
					// Error; SMS not sent
					// ...
				});

			// admin
			// 	.auth()
			// 	.createUser({
			// 		phoneNumber: phoneNumber,
			// 	})
			// 	.then((userRecord) => {
			// 		// Send OTP to the user's phone number
			// 		// (You can use a third-party service or Firebase phone number verification)
			// 		// console.log('OTP sent to', userRecord.phoneNumber);
			// 		// res.json({ success: true, msg: "Success" });
			// 		return admin.auth().generatePhoneVerificationCode(userRecord.uid);
			// 	})
			// 	.then((verificationCode) => {
			// 		// Send the verification code to the user via SMS using a third-party service or Firebase phone number verification service
			// 		console.log('Verification code:', verificationCode);
			// 		res.json({ success: true, msg: "Sucess"});
			// 	})
			// 	.catch((error) => {
			// 		console.error('Error creating user:', error);
			// 		res.status(500).json({ success: false, msg: 'Failed to send OTP' });
			// 	});
		} catch (error) {
			console.log(error);
			res.status(400).send({
				success: false,
				msg: error
			});
		}
	},
}

