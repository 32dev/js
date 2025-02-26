class Queue {
    constructor() {
        this.items = [];
    }

    // 데이터 추가 (enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // 데이터 제거 (dequeue)
    dequeue() {
        return this.items.shift(); // 첫 번째 요소 제거 및 반환
    }

    // 큐의 맨 앞 요소 확인
    front() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    // 큐가 비었는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐 크기 확인
    size() {
        return this.items.length;
    }

    // 큐 요소 출력
    print() {
        console.log(this.items.join(" <- "));
    }
}

// 사용 예제
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1 <- 2 <- 3

console.log(queue.dequeue()); // 1
queue.print(); // 2 <- 3
console.log(queue.front()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.size()); // 2
