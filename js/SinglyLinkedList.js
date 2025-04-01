class SinglyLinkedList {
    constructor() {
	this.head = null;
	this.size = 0;
    }

    addLast(node) {
	if (this.size == 0) {
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
}
