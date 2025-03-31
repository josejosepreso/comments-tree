class Action {
    static addComment() {
	const author = "Jesus";
	const content = document.querySelector("input#new-comment-content").value;		
	const comment = new Comment(author, content);

	const comments = document.querySelector("div#comments-list");
	
	comments.insertBefore(comment, comments.children[0]);
    }
}

const addComment = document.querySelector("button#add-comment");

addComment.addEventListener("click", Action.addComment.bind(null));
