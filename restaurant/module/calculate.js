var bill = 0;
var result = [];

class draw {
    refresh() {
        for (let i = 0; i < result.length; i++) {
            let el1 = document.createElement('div');
            el1.setAttribute('id', 'total-' + this.index);
            let el2 = document.createElement('div');
            el2.classList.add('total-detail');
            let el3 = document.createElement('h3');
            el3.innerHTML = result[i].name + ' x ' + result[i].count;
            let el4 = document.createElement('h3');
            el4.classList.add('item-cost');
            el4.innerHTML = '$' + result[i].total;

            el2.appendChild(el3);
            el2.appendChild(el4);
            el1.appendChild(el2);
            document.getElementById('total').appendChild(el1);
        }
    }
    reset() {
        let el5 = document.createElement('div');
        el5.setAttribute('id', 'total-total');
        let el6 = document.createElement('div');
        el6.classList.add('total-detail', 'red');
        let el7 = document.createElement('h3');
        el7.innerHTML = '共計';
        let el8 = document.createElement('h3');
        el8.classList.add('item-cost');
        el8.innerHTML = '$' + bill;

        el6.appendChild(el7);
        el6.appendChild(el8);
        el5.appendChild(el6);
        document.getElementById('total').appendChild(el5);
    }
    zero(){
        bill = 0;
        result = [];
    }
}

class plusButton {
    constructor(domNode, index, cost) {
        this.domNode = domNode;
        this.index = index;
        this.cost = cost;
    }
    init() {
        this.domNode.addEventListener('click', this.handleClick.bind(this));
    }
    handleClick() {
        this.inputTextChange(this.domNode.parentNode.childNodes[1]);
        if (result.length != 0) {
            for (let i = 0; i < result.length; i++) {
                if (this.index == result[i].index) {
                    result[i].count += 1;
                    result[i].total += this.cost;
                    bill += this.cost;
                    this.totalTextChange(document.getElementById('total'));
                    return
                }
            }
        }
        let arr = {
            'index': this.index,
            'name': this.domNode.parentNode.parentNode.firstChild.firstChild.innerHTML,
            'count': parseInt(this.domNode.parentNode.childNodes[1].value),
            'cost': this.cost,
            'total': this.cost
        }
        result.push(arr);
        bill += this.cost;
        result.sort(function (a, b) { return parseInt(a.index) - parseInt(b.index) });
        this.totalTextChange(document.getElementById('total'));
    }
    inputTextChange(node) {
        node.value = parseInt(node.value) + 1;
    }
    totalTextChange(node) {
        node.innerHTML = '';
        var dw = new draw;
        dw.refresh();
        dw.reset();
    }
}

class minusButton {
    constructor(domNode, index, cost) {
        this.domNode = domNode;
        this.index = index;
        this.cost = cost;
    }
    init() {
        this.domNode.addEventListener('click', this.handleClick.bind(this));
    }
    handleClick() {
        if (this.inputTextChange(this.domNode.parentNode.childNodes[1], this.index)) {
            this.totalTextChange(document.getElementById('total'));
            return
        };
        if (result.length != 0) {
            for (let i = 0; i < result.length; i++) {
                if (this.index == result[i].index) {
                    result[i].count -= 1;
                    result[i].total -= this.cost;
                    this.totalTextChange(document.getElementById('total'));
                    return
                }
            }
        }
    }
    inputTextChange(node, i) {
        if (node.value - 1 == 0) {
            bill -= this.cost;
        }
        if (node.value - 1 < 1) {
            node.value = 0;
            result = result.filter(function (item) {
                return item.index != i;
            })
            return true
        }
        bill -= this.cost;
        node.value = parseInt(node.value) - 1;
    }
    totalTextChange(node) {
        node.innerHTML = '';
        var dw = new draw;
        dw.refresh();
        dw.reset();
    }
}

export { plusButton, minusButton, draw, result, bill };