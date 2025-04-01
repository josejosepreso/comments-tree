class Action {
    static addComment(input) {
	const author = "Jesus";
	const comment = new HTMLComment(author, input.value);

	const comments = document.querySelector("div#comments-list");
	
	comments.insertBefore(comment, comments.children[0]);

	input.value = "";
    }
}
