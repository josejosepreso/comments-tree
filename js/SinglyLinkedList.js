class SinglyLinkedList {
    constructor() {
	this.head = null;
	this.size = 0;
    }

    addLast(node) {
	if (this.size == 0) {
	    this.head = node;
	    return true;
	}

	let current = this.head;

	while (current != null) {
	    current = current.getNext();
	}

	current.setNext(node);

	return true;
    }
}
