class Comment extends HTMLDivElement {
    constructor(authorName, contentText) {
	super();
	this.classList.add("comment");
	
	const author = document.createElement("div");
	author.classList.add("comment-author");
	const strong = document.createElement("strong");
	strong.innerText = authorName;
	author.appendChild(strong);

	const content = document.createElement("div");
	content.classList.add("comment-content");
	content.innerText = contentText;

	const interaction = document.createElement("div");
	interaction.classList.add("comment-interaction");
	const a = document.createElement("a");
	a.href = "#";
	a.innerText = "Reply";
	interaction.appendChild(a);

	this.appendChild(author);
	this.appendChild(content);
	this.appendChild(interaction);
    }
}

customElements.define("comment-div", Comment, { extends: "div" });
