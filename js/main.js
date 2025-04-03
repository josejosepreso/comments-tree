document.querySelector("button#comment").addEventListener("click", Action.loadComments.bind(null));

const l = new SinglyLinkedList();

l.addLast(new Node(1));
l.addLast(new Node(2));
l.addLast(new Node(3));

for (let n of l.reverse()) {
    console.log(n.value);
}
