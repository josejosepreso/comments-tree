class Action {
    static addComment() {
	const author = "Jesus";
	const input = document.querySelector("input#new-comment-content");		
	const comment = new HTMLComment(author, input.value);

	const comments = document.querySelector("div#comments-list");
	
	comments.insertBefore(comment, comments.children[0]);

	input.value = "";
    }
}
