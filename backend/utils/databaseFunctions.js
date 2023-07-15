const { db } = require('./firestoreInitializer');

async function checkCollectionExistence(collectionId) {
  try {
    const collections = await db.listCollections();
    const collectionExists = collections.some((collection) => collection.id === collectionId);
    
    if (collectionExists) {
      console.log(`Collection "${collectionId}" exists.`);
      return true;
    } else {
      console.log(`Collection "${collectionId}" does not exist.`);
      return false;
    }
  } catch (error) {
    console.error('Error checking collection existence:', error);
  }
}

async function createCollection(userName, phoneNumber){
	try{
		const docRef = db.collection(phoneNumber).doc('userDetail');
		data = {
			username: 'userName',
			phoneNumber: phoneNumber,
		}
		await docRef.set(data); // Set data for the document
		console.log(`Collection "${phoneNumber}" created with document ID "${docRef.id}".`);
	} catch(error){
        console.error('Error creating new collection:', error);
    }
}

// async function addAppointment(phoneNumber, apointmentData){

// }   

// async function moveAppointment(){

// }

module.exports = {
    checkCollectionExistence,
    createCollection
};





