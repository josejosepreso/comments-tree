class CommentsTree {
    constructor() {
	this.root = new Comment(null, null, null);
	this.root.id = 0;
	this.nNodes = 0;
    }

    __addToNode(newNode, current) {
	if (!current) {
	    return null;
	}
	
	if (current.id == newNode.parentId) {
	    newNode.id = current.prompt ? null : ++this.nNodes;
	    current.addChild(newNode);
	    return;
	}

	this.__addToNode(newNode, current.children.head);
		
	while (current.next) {
	    current = current.next;
	    this.__addToNode(newNode, current);
	}
    }

    addNode(node) {
	if (!this.root) {
	    this.root = node;
	    return;
	}

	if (node.parentId === null) {
	    return;
	}
	
	this.__addToNode(node, this.root);
    }

    __getNodes(current, depth) {
	if (!current) {
	    return null;
	}

	let result = document.createElement("div");

	let comment = new HTMLComment(current.id, current.author, current.content);

	if (current.prompt) {
	    comment = new HTMLNewComment(`new-comment-${current.parentId}`);
	}
	
	comment.style.marginLeft = `${depth}px`;
	
	result.appendChild(comment);

	let node = current.children.head;
	
	while (node) {
	    result.appendChild(this.__getNodes(node, depth + 20));

	    node = node.next;
	}

	return result;
    }

    toHTML() {
	if (!this.root) {
	    return null;
	}

	return this.__getNodes(this.root, -20);
    }
}
