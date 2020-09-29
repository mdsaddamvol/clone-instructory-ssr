const { firebase } = require("firebase/app");
const Config = {
	apiKey: "AIzaSyCTm4AJEUvu5dnoww5BToaEeFry2e2IPhQ",
	authDomain: "clone-insturctory-vdo.firebaseapp.com",
	databaseURL: "https://clone-insturctory-vdo.firebaseio.com",
	projectId: "clone-insturctory-vdo",
	storageBucket: "clone-insturctory-vdo.appspot.com",
	messagingSenderId: "245841745747",
	appId: "1:245841745747:web:b56434c1b5a572c3ccb3a6",
	measurementId: "G-RR0ET8DEFE",
};
firebase.initializeApp(Config);
const storage = firebase.storage();

const storageRef = storage.ref();

const imagesRef = storageRef.child("images");
