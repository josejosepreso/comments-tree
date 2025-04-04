class Action {
    static commentsTree = null;

    static addReply(author, input, parentId) {
	const comment = new Comment(author, input.value, parentId)
	
	Action.commentsTree.addComment(comment);
	
	Action.reloadComments();
	
	input.value = "";

	Store.saveComment(comment);
    }

    static reply() {
	Action.commentsTree.addComment(new Comment(null, null, this, true));
	Action.reloadComments();
    } 
    
    static addComment(parentId) {
	if (this.value.trim() === "") {
	    return;
	}

	const author = "Me";

	if (parentId) {
	    Action.addReply(author, this, parentId);
	    return;
	}

	const comment = new Comment(author, this.value);
	
	Action.commentsTree.addComment(comment);

	Action.reloadComments();
	
	this.value = "";

	Store.saveComment(comment);
    }

    static reloadComments() {
	document.querySelector("div#new-comment-0").nextSibling.remove();

	const div = document.createElement("div");

	for (let node of Action.commentsTree.toHTML().reverse()) {
	    div.appendChild(node.value);
	}
	
	document.querySelector("div#comments").appendChild(div);
    }

    static loadComments() {
	const div0 = document.createElement("div");
	div0.id = "comments-container";

	const div1 = document.createElement("div");
	div1.id = "comments-section";

	div0.appendChild(div1);

	const h3 = document.createElement("h3");
	h3.innerText = "Comments";

	const div2 = document.createElement("div");
	div2.id = "comments";

	const newComment = new HTMLNewComment();
	newComment.id = "new-comment-0"
	div2.appendChild(newComment);

	div1.appendChild(h3);
	div1.appendChild(div2);

	Action.commentsTree = new CommentsTree();
	
	const comments = JSON.parse(Store.loadComments());

	for (let k in comments) {
	    Action.commentsTree.addComment(
		new Comment(
		    comments[k].author ?? "Me"
		    , comments[k].content ?? ""
		    , comments[k].parent ?? 0
		)
	    );
	}
	
	const div = document.createElement("div");

	for (let node of Action.commentsTree.toHTML().reverse()) {
	    div.appendChild(node.value);
	}

	div2.appendChild(div);

	document.body.appendChild(div0);
    }
}
