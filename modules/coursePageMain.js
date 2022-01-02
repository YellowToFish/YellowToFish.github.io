import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDire1Trk6iWcIM8hADzsDyQuSeM4Wyphs",
    authDomain: "ilt-history-exam.firebaseapp.com",
    projectId: "ilt-history-exam",
    storageBucket: "ilt-history-exam.appspot.com",
    messagingSenderId: "864725739716",
    appId: "1:864725739716:web:43bd544e81d6e30ac60191",
    databaseURL: "https://ilt-history-exam-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function ReadData(){
    get(ref(db, 'imageUrl/'))
    .then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot.val());
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

ReadData();