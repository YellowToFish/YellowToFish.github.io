import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDoPf4oTipMl4q82v8RmIi6RZ1cYaHd46A",
    authDomain: "website-test-b515a.firebaseapp.com",
    databaseURL: "https://website-test-b515a-default-rtdb.firebaseio.com",
    projectId: "website-test-b515a",
    storageBucket: "website-test-b515a.appspot.com",
    messagingSenderId: "353575820144",
    appId: "1:353575820144:web:84d8798496d6234d168db5",
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, onValue, child, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function SelectData() {
    const sn = get(ref(db, 'food/')).then((snapshot)=>{
        if (snapshot.exists()){
            console.log(snapshot.val());
            return snapshot.val();
        }
    }).catch((error)=>{
        console.log(error);
    })
    return sn;
}

const data = SelectData();

data.then((value)=>{
    console.log(value);
})