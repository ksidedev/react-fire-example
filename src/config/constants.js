import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDSlQqGfwV7ktHUxjIkKXGMia_GxAl0pcY",
  authDomain: "opineng-uat.firebaseapp.com",
  databaseURL: "https://opineng-uat.firebaseio.comm"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth