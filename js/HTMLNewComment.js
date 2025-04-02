class HTMLNewComment extends HTMLDivElement {
    constructor(id) {
	super();
	
	this.id = id;
	this.button = document.createElement("button");

	this.classList.add("comment", "new-comment");

	const div0 = document.createElement("div");
	div0.classList.add("comment-content");
	
	const input = document.createElement("input");
	input.id = "new-comment-content";

	div0.appendChild(input);

	const div1 = document.createElement("div");
	
	this.button.classList.add("add-comment");
	this.button.innerText = "Comment";
	this.button.addEventListener("click", Action.addComment.bind(input));

	div1.appendChild(this.button);

	this.appendChild(div0);
	this.appendChild(div1);
    }
}

customElements.define("new-comment", HTMLNewComment, { extends: "div" });
