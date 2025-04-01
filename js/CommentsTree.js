class CommentsTree {
    constructor() {
	this.root = null;
    }

    __addToNode(newNode, current) {
	if (current.id == newNode.parentId) {
	    current.addChild(newNode);
	    return;
	}

	if (current.children.head)
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

    __getNodes(current, result, depth) {
	if (!current) {
	    return result;
	}
	
	const aux = current;
	
	while (current) {
	    let comment = new HTMLComment(current.id, current.author, current.content);
	    comment.style.marginLeft = `${depth}px`;

	    result.appendChild(comment);

	    current = current.next;
	}

	return this.__getNodes(aux.children.head, result, depth + 20);
    }

    toHTML() {
	if (!this.root) {
	    return null;
	}

	let result = document.createElement("div");

	result = this.__getNodes(this.root, result, 0);

	return result;
    }
}
