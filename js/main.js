document.querySelector("div#comments").appendChild(new HTMLNewComment("new-comment-0"));

tree = new CommentsTree();
tree.addNode(new Comment(1, "Jesus", "Jaja true", 0));
tree.addNode(new Comment(2, "Da", "A", 1));
tree.addNode(new Comment(3, "De", "E", 1));
tree.addNode(new Comment(4, "Di", "I", 2));
tree.addNode(new Comment(5, "Jose", "EEE", 3));
tree.addNode(new Comment(6, "Roberto", "Jiji", 0));
tree.addNode(new Comment(7, "Mario", "Jeje", 4));
tree.addNode(new Comment(8, "Luis", "Jojo", 2));

document.querySelector("div#comments").appendChild(tree.toHTML());
for (let c of document.querySelectorAll("div.comment")) {
    if (c.id === "0") {
	c.remove();
	break;
    }
}
