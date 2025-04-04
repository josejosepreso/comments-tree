class Store {
    static loadComments() {
	return window.localStorage.getItem("comments") ?? "{}";
    }

    static saveComment(comment) {
	const comments = JSON.parse(Store.loadComments());

	comments[comment.id] = {
	    author: comment.author,
	    content: comment.content,
	    parent: comment.parentId,
	};

	window.localStorage.setItem("comments", JSON.stringify(comments));
    }
}
