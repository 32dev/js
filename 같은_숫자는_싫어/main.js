class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


function solution(arr) {
    var stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        let e = stack.peek();
        if (e != arr[i] || e == null) {
            stack.push(arr[i]);
        }
    }
    return stack.items;
}
solution([1, 1, 3, 3, 0, 1, 1]);