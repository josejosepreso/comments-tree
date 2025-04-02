class HTMLComment extends HTMLDivElement {
    constructor(id, authorName, contentText) {
	super();
	this.classList.add("comment");

	this.id = id;
	
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
	a.innerText = "Reply";
	a.style.color = "blue";
	a.style.textDecoration = "underline";
	a.style.cursor = "pointer";
	a.addEventListener("click", Action.reply.bind(this.id));
	
	interaction.appendChild(a);

	this.appendChild(author);
	this.appendChild(content);
	this.appendChild(interaction);
    }
}

customElements.define("comment-div", HTMLComment, { extends: "div" });
