class SinglyLinkedList {
    constructor() {
	this.head = null;
	this.size = 0;
    }

    addLast(node) {
	if (!node.value) {
	    return false;
	}
	
	if (!this.head) {
	    this.head = node;
	    this.size++;
	    return true;
	}

	let current = this.head;

	while (current.next) {
	    current = current.next;
	}

	current.next = node;
	
	this.size++;

	return true;
    }

    addFirst(node) {
	let head = this.head;

	this.head = node;

	node.next = head;

	return true;
    }

    reverse() {
	const tmp = new SinglyLinkedList();

	for (let node of this) {
	    tmp.addFirst(node);
	}

	return tmp;
    }

    [Symbol.iterator]() {
	return new Iterator(this.head);
    };    
}
