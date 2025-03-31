class Node {
    constructor(id) {
	this.__id = id
	this.__next = null;
    }

    getId() {
	return this.__id;
    }

    setId(id) {
	this.__id = id;
    }
    
    getNext() {
	return this.__next;
    }

    setNext(next) {
	this.__next = next;
    }
}
