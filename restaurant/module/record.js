import { DaleteData } from "./database.js";

class deleteButton {
    constructor(domNode, time) {
        this.domNode = domNode;
        this.time = time;
    }
    init() {
        this.domNode.addEventListener('click', this.handleClick.bind(this));
    }
    handleClick() {
        DaleteData(this.time);
    }
}


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

import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function SelectData() {
    const dbref = ref(db, 'food/');

    onValue(dbref, (snapshot) => {
        let tbody = document.getElementById('table-body');
        tbody.innerHTML = '';
        if (snapshot.exists()) {
            printt(snapshot.val())
        }
    })
}

function printt(list) {
    let tbody = document.getElementById('table-body');
    if (list === undefined) {
        return
    }
    for (let i = 0; i < Object.keys(list).length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = i + 1;
        let td2 = document.createElement('td');
        td2.innerHTML = Object.keys(list)[i];
        let td3 = document.createElement('td');
        td3.innerHTML = Object.values(list)[i].total;
        let td4 = document.createElement('td');
        for (let j = 0; j < Object.values(list)[i].details.length; j++) {
            td4.innerHTML += Object.values(list)[i].details[j].name + ' x ' + Object.values(list)[i].details[j].count + '<br>';
        }
        let td5 = document.createElement('td');
        let btn = document.createElement('button');
        btn.classList.add('delete-btn');
        btn.innerHTML = '移除訂單';
        var bt = new deleteButton(btn, Object.keys(list)[i]);
        bt.init();
        td5.appendChild(btn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
    }
}

SelectData();