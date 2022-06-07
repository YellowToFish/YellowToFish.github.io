import { plusButton, minusButton, draw, result, bill } from './calculate.js';

const foodList = {
    "fastFood": [
        {
            "name": "排骨菜飯",
            "cost": 70,
            "index": 1
        },
        {
            "name": "雞腿菜飯",
            "cost": 80,
            "index": 2
        },
        {
            "name": "魚排菜飯",
            "cost": 85,
            "index": 3
        },
        {
            "name": "一大特餐",
            "cost": 80,
            "index": 4
        }
    ],
    "riceFood": [
        {
            "name": "紅燒牛肉",
            "cost": 100,
            "index": 5
        },
        {
            "name": "生鮮魚片",
            "cost": 90,
            "index": 6
        },
        {
            "name": "咖哩雞塊",
            "cost": 70,
            "index": 7
        },
        {
            "name": "扁魚白菜",
            "cost": 70,
            "index": 8
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    let fastFood = document.getElementById('fast-food');
    for (let i = 0; i < foodList['fastFood'].length; i++) {
        let aa = document.createElement('div');
        aa.classList.add('item');

        let bb = document.createElement('div');
        bb.classList.add('item-name');

        let cc = document.createElement('h3');
        cc.innerHTML = foodList['fastFood'][i]['name'];

        let hh = document.createElement('h3');
        hh.innerHTML = '$' + foodList['fastFood'][i]['cost'];
        hh.classList.add('item-cost');

        let dd = document.createElement('div');
        dd.classList.add('item-count');

        let ee = document.createElement('button');
        ee.innerHTML = '-';

        var bt1 = new minusButton(ee, foodList['fastFood'][i]['index'], foodList['fastFood'][i]['cost']);
        bt1.init();

        let gg = document.createElement('input');
        gg.type = 'text';
        gg.value = 0;
        gg.disabled = true;

        let ff = document.createElement('button');
        ff.innerHTML = '+';

        var bt2 = new plusButton(ff, foodList['fastFood'][i]['index'], foodList['fastFood'][i]['cost']);
        bt2.init();

        dd.appendChild(ee);
        dd.appendChild(gg);
        dd.appendChild(ff);
        bb.appendChild(cc);
        bb.appendChild(hh);
        aa.appendChild(bb);
        aa.appendChild(dd);
        fastFood.appendChild(aa);
    }
    let riceFood = document.getElementById('rice-food');
    for (let i = 0; i < foodList['riceFood'].length; i++) {
        let aa = document.createElement('div');
        aa.classList.add('item');

        let bb = document.createElement('div');
        bb.classList.add('item-name');

        let cc = document.createElement('h3');
        cc.innerHTML = foodList['riceFood'][i]['name'];

        let hh = document.createElement('h3');
        hh.innerHTML = '$' + foodList['riceFood'][i]['cost'];
        hh.classList.add('item-cost');

        let dd = document.createElement('div');
        dd.classList.add('item-count');

        let ee = document.createElement('button');
        ee.innerHTML = '-';

        var bt1 = new minusButton(ee, foodList['riceFood'][i]['index'], foodList['riceFood'][i]['cost']);
        bt1.init();

        let gg = document.createElement('input');
        gg.type = 'text';
        gg.value = 0;
        gg.disabled = true;

        let ff = document.createElement('button');
        ff.innerHTML = '+';

        var bt2 = new plusButton(ff, foodList['riceFood'][i]['index'], foodList['riceFood'][i]['cost']);
        bt2.init();

        dd.appendChild(ee);
        dd.appendChild(gg);
        dd.appendChild(ff);
        bb.appendChild(cc);
        bb.appendChild(hh);
        aa.appendChild(bb);
        aa.appendChild(dd);
        riceFood.appendChild(aa);
    }
})

var cancel = document.getElementById('cancel');
cancel.addEventListener('click', function () {
    document.getElementById('total').innerHTML = '';
    var dw = new draw;
    dw.zero();
    dw.reset();

    var inputText = document.getElementsByClassName('item-count');
    for (let i = 0; i < inputText.length; i++) {
        inputText[i].childNodes[1].value = 0;
    }
})

import { InsertData } from './database.js';

var check = document.getElementById('check');
check.addEventListener('click', InsertData);