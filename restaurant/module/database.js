import { result, bill } from "./calculate.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDoPf4oTipMl4q82v8RmIi6RZ1cYaHd46A",
    authDomain: "website-test-b515a.firebaseapp.com",
    databaseURL: "https://website-test-b515a-default-rtdb.firebaseio.com",
    projectId: "website-test-b515a",
    storageBucket: "website-test-b515a.appspot.com",
    messagingSenderId: "353575820144",
    appId: "1:353575820144:web:84d8798496d6234d168db5"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function SelectData(time) {
    const dbref = ref(db);

    get(child(dbref, 'food/' + time))
        .then((snapshot) => {
            if (snapshot.exists()) {
                var text = '';
                for (let i = 0; i < snapshot.val().details.length; i++) {
                    text += snapshot.val().details[i].name + ' x ' + snapshot.val().details[i].count + '<br>';
                }
                text += '共計：' + snapshot.val().total;
                document.getElementById('dialog').innerHTML = text;
            }
        })
        .catch((error) => {
            alert(error);
        })
}

function InsertData() {
    if (result.length == 0) {
        return
    }
    const time = Date.now();
    set(ref(db, 'food/' + time), {
        details: result,
        total: bill
    })
        .then(() => {
            SelectData(time);
            $(function () {
                $('#dialog').dialog({
                    modal: true
                })
            })
        })
        .catch((error) => {
            alert(error);
        })
}
function DaleteData(time){
    remove(ref(db, 'food/' + time))
    .catch((error)=>{
        alert(error);
    })
}

export { InsertData, SelectData, DaleteData }