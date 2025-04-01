const addComment = document.querySelector("button#add-comment");

addComment.addEventListener("click", Action.addComment.bind(null));


tree = new CommentsTree();
tree.addNode(new Comment(0, "Jesus", "Jaja true", null));
tree.addNode(new Comment(1, "Da", "A", 0));
tree.addNode(new Comment(2, "De", "E", 0));
tree.addNode(new Comment(3, "Di", "I", 1));
tree.addNode(new Comment(4, "Jose", "EEE", 2));

document.querySelector("div#comments").appendChild(tree.toHTML());
/*
list = new SinglyLinkedList();
list.addLast(new Comment(0, null, null, null));
list.addLast(new Comment(0, null, null, null));
list.addLast(new Comment(0, null, null, null));
list.addLast(new Comment(0, null, null, null));
list.addLast(new Comment(0, null, null, null));
*/
