class StackNode<T> {
  public next: StackNode<T> | null;
  public data: T;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

interface IStack<T> {
  push(data: T): StackNode<T>;
  pop(): void;
  peek(): StackNode<T> | null;
  search(data: T): StackNode<T> | null;
}

class MyStack<T> implements IStack<T> {
  private head: StackNode<T> | null = null;
  private tail: StackNode<T> | null = null;
  push(data: T): StackNode<T> {
    const node = new StackNode(data);
    if (!this.head && !this.tail) {
      this.head = this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    return node;
  }
  pop(): void {
    const getLastNode = (node: StackNode<T>): StackNode<T> => {
      if (node.next)
        return node.next == this.tail ? node : getLastNode(node.next);
      return node;
    };
    if (!this.head) {
      throw new Error("Can not pop from an empty stack");
    }
    const lastNode = getLastNode(this.head);
    lastNode.next = null;
    this.tail=lastNode;
  }
  peek(): StackNode<T> | null {
    return this.tail;
  }
  search(data: T): StackNode<T> | null {
    const findNode = (node: StackNode<T>): StackNode<T> | null => {
      if (node.next) return node.data == data ? node : findNode(node.next);
      if (node.data == data) return node;
      return null;
    };
    if(this.head){
        const node = findNode(this.head);
        return node
    }
    return null;
  }
}

const stack = new MyStack();
console.log("Pushing",stack.push(10));
console.log("Pushing",stack.push(20));
console.log("Pushing",stack.push(30));
console.log("Peeking",stack.peek());
console.log("Popping");
stack.pop();
console.log("Peeking",stack.peek());
