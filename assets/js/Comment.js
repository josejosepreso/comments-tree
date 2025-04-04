class Comment {
    constructor(author, content, parentId, prompt) {
	this.id = null;
	this.author = author;
	this.content = content;
	this.children = new SinglyLinkedList();
	this.parentId = parentId ?? 0;
	this.prompt = prompt ?? false;
    }
    
    addChild(node) {
	this.children.addLast(node);	
	return true;
    }
}
