class HTMLNewComment extends HTMLDivElement {
    constructor(id) {
	super();

	this.id = id;

	this.classList.add("comment", "new-comment");

	const div0 = document.createElement("div");
	div0.classList.add("comment-content");
	
	const input = document.createElement("input");
	input.id = "new-comment-content";

	div0.appendChild(input);

	const div1 = document.createElement("div");

	const button = document.createElement("button");
	button.classList.add("add-comment");
	button.innerText = "Comment";
	button.addEventListener("click", Action.addComment.bind(null, this));

	div1.appendChild(button);

	this.appendChild(div0);
	this.appendChild(div1);
    }
}

customElements.define("new-comment", HTMLNewComment, { extends: "div" });
