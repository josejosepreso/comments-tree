class Iterator {
    constructor(head) {
	this.current = head;
    }
    
    next() {
	if (!this.current) {
	    return { value: null, done: true };
	}
	
	const val = this.current;

	this.current = this.current.next;
	
	return { value: val, done: false };
    }
}
