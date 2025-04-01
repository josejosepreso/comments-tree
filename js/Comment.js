class Comment {
    constructor(id, author, content, parentId) {
	this.next = null;
	this.id = id
	this.author = author;
	this.content = content;
	this.children = new SinglyLinkedList();
	this.parentId = parentId;
    }
    
    addChild(node) {
	this.children.addLast(node);	
	return true;
    }
}
