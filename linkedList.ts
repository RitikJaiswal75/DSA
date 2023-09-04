class ListNode<T> {
  public next: ListNode<T>;
  constructor(public data: T) {}
}

interface ILinkedList<T> {
  insertInBegin(data: T): ListNode<T>;
  insertAtEnd(data: T): ListNode<T>;
  deleteNode(data: T): void;
  traverse(): T[];
  size(): number;
  search(data: T): ListNode<T> | null;
}

class MyLinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null;

  public insertInBegin(data: T): ListNode<T> {
    const node = new ListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return node;
  }
  insertAtEnd(data: T): ListNode<T> {
    const node = new ListNode(data);
    const getLastNode = (node: ListNode<T>):ListNode<T> => {
      return node.next ? getLastNode(node.next) : node;
    };
    if (!this.head) {
      this.head = node;
    } else {
      const lastNode = getLastNode(this.head);
      lastNode.next = node;
    }
    return node;
  }
  deleteNode(data: T): void {
    if (!this.head) {
      throw new Error("Can not delete from empty list");
    }
    const findNode = (node: ListNode<T>):ListNode<T> | null => {
      if (!node) {
        return null;
      }
      return node.next.data == data ? node : findNode(node.next);
    };
    const node = findNode(this.head);
    if(node){
        node.next = node.next.next;
    }
  }
  traverse(): T[] {
    let temp = this.head;
    const arr: Array<T> = [];
    if (!temp) {
      console.log("Empty List");
      arr;
    } else {
      while (temp) {
        arr.push(temp.data);
        temp = temp.next;
      }
    }
    return arr;
  }
  size(): number {
    return this.traverse().length;
  }
  search(data: T): ListNode<T> | null {
    const findNode = (node: ListNode<T>): ListNode<T> | null => {
      if (!node) {
        return null;
      }
      return node.data == data ? node : findNode(node.next);
    };
    if (!this.head) {
      return null;
    } else {
      return findNode(this.head);
    }
  }
}

const a = new MyLinkedList();

console.log(a.insertInBegin(10));
console.log(a.insertInBegin(9));
console.log(a.insertInBegin(8));
console.log(a.insertAtEnd(11));
console.log(a.insertAtEnd(12));
console.log(a.traverse());
console.log(a.search(10));
console.log(a.deleteNode(10));
console.log(a.traverse());
