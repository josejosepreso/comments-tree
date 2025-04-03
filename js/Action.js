class Action {
    static commentsTree = null;

    static addReply(parent) {
	if (this.value.trim() === "") {
	    return;
	}
	
	Action.commentsTree.addComment(new Comment("Hater", this.value, parent));
	Action.reloadComments();
    }

    static reply() {
	Action.commentsTree.addComment(new Comment(null, null, this, true));
	Action.reloadComments();
	
	/*
	const nodes = document.querySelector(`div#new-comment-${this-1}`).children[0];	
	const input = nodes.children[0];
	const button = nodes.children[1];
	
	button.addEventListener("click", Action.addReply.bind(input, this));*/
    } 
    
    static addComment() {
	if (this.value.trim() === "") {
	    return;
	}
	
	const author = "Me";

	const comment = new Comment(author, this.value, 0);
	
	Action.commentsTree.addComment(comment);

	Action.reloadComments();
	
	this.value = "";

	Store.saveComment(comment);
    }

    static reloadComments() {
	document.querySelector("div#new-comment-0").nextSibling.remove();

	for (let node of Action.commentsTree.toHTML().reverse()) {
	    document.querySelector("div#comments").appendChild(node.value);
	}
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
	div2.appendChild(new HTMLNewComment("new-comment-0"));

	div1.appendChild(h3);
	div1.appendChild(div2);

	Action.commentsTree = new CommentsTree();

	for (let k in comments) {
	    Action.commentsTree.addComment(
		new Comment(
		    comments[k].author ?? "Me"
		    , comments[k].content ?? ""
		    , comments[k].parent ?? 0
		)
	    );
	}

	for (let node of Action.commentsTree.toHTML().reverse()) {
	    div2.appendChild(node.value);
	}

	document.body.appendChild(div0);
    }
}
