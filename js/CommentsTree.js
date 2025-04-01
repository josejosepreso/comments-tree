class CommentsTree {
    constructor() {
	this.root = new Comment(0, null, null);
    }

    __addToNode(newNode, current) {
	if (current) {
	    if (current.id == newNode.parentId) {
		current.addChild(newNode);
		return;
	    }
	    
	    this.__addToNode(newNode, current.children.head);
	    
	    while (current.next) {
		current = current.next;
		this.__addToNode(newNode, current);
	    }
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
	
	const comment = new HTMLComment(current.id, current.author, current.content);
	comment.style.marginLeft = `${depth}px`;
	
	result.append(comment);

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
