// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //Insert a node as head
    insertFirst(data) {
        // const node = new Node(data);
        // node.next = this.head;
        // this.head = node;
        this.head = new Node(data, this.head);
        return this.head
    }
    size() {
        let count = 0;
        let node = this.head;
        //if no head, wont pass the while loop
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
        if (!this.head) {
            return null;
        }
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let last = previous.next;
        while (node) {
            previous = last;
            last = last.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            node = node.next;
        }
        node.next = new Node(data);
    }
 
}


module.exports = { Node, LinkedList };
