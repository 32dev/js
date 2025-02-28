class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// 스택 테스트
const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.size()); // 1
console.log(stack.pop()); // 10
console.log(stack.pop()); // Stack is empty
