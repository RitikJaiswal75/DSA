class QueueNode<T> {
    public next: QueueNode<T> | null;
    public data: T;
    constructor(data: T){
        this.data = data;
        this.next= null;
    }
}

interface IQueue<T> {
    enqueue(data: T): QueueNode<T>;
    dequeue():QueueNode<T>
    traverse(): T[];
    peek():QueueNode<T> | null;
}

class MyQueue<T> implements IQueue<T>{
    private head: QueueNode<T> | null = null;
    private tail: QueueNode<T> | null = null;
    enqueue(data: T): QueueNode<T> {
        const node = new QueueNode(data);
        if(!this.tail){
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return node;
    }
    dequeue(): QueueNode<T> {
        if(!this.head){
            throw new Error("Can not delete from an empty queue")
        } else {
            const temp = this.head;
            this.head = this.head.next;
            return temp;
        }
    }
    traverse(): T[] {
        const queue = []
        let temp = this.head
        while(temp){
            queue.push(temp.data);
            temp = temp.next;
        }
        return queue;
    }
    peek(): QueueNode<T> | null {
        return this.head;
    }
}

const myQueue = new MyQueue();
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(20));
console.log(myQueue.traverse());
console.log(myQueue.dequeue());
console.log(myQueue.traverse());
console.log(myQueue.enqueue(10));
console.log(myQueue.traverse());
console.log(myQueue.peek());