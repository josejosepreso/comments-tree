class CommentsTree {
    constructor() {
	this.roots = new SinglyLinkedList();
	this.nComments = 0;
    }

    __addToComment(newComment, nodes) {
	if (!nodes.head) {
	    return;
	}

	for (let current of nodes) {
	    if (false && newComment.prompt) {
		return;
	    }
	    
	    if (current.value.id == newComment.parentId) {	
		newComment.id = newComment.prompt ? null : ++this.nComments;
		current.value.addChild(new Node(newComment));
		return;
	    }

	    this.__addToComment(newComment, current.value.children);	   
	}
    }

    addComment(comment) {
	if (!comment.parentId) {
	    comment.id = comment.prompt ? null : ++this.nComments;
	    this.roots.addLast(new Node(comment));
	    return;
	}

	this.__addToComment(comment, this.roots);
    }

    __getHTMLComment(current, depth) {
	if (!current) {
	    return null;
	}

	let result = document.createElement("div");

	let comment = current.value.prompt
	    ? new HTMLNewComment(current.value.parentId)
	    : new HTMLComment(current.value.id, current.value.author, current.value.content);
	
	comment.style.marginLeft = `${depth}px`;
	
	result.appendChild(comment);

	for (let comment of current.value.children) {
	    result.appendChild(this.__getHTMLComment(comment, depth + 20));
	}
	
	return result;
    }

    toHTML() {	
	const result = new SinglyLinkedList();

	if (this.roots.size == 0) {
	    result.addLast(new Node(document.createElement("div")));
	    return result;
	}

	for (let comment of this.roots) {
	    result.addLast(new Node(this.__getHTMLComment(comment, 0)));
	}
	
	return result;
    }
}
