<?php

require_once "./SinglyLinkedList.php";
require_once "./ListIterator.php";
require_once "./Node.php";

class CommentsTree {
    private int $nComments;
    private SinglyLinkedList $roots;

    public function __construct() {
        $this->nComments = 0;
        $this->roots = new SinglyLinkedList();
    }

    private function addToComment(Comment $newComment, SinglyLinkedList $nodes): void {
        if ($nodes->getFirst() == null) {
            return;
        }

        foreach(new ListIterator($nodes) as $current) {
            if ($current->getValue()->getId() == $newComment->getParentId()) {
                $newComment->setId($newComment->isPrompt() ? null : ++$this->nComments);
                $current->getValue()->addChild($newComment);
                return;
            }

            $this->addToComment($newComment, $current->getValue()->getChildren());
        }
    }

    public function addComment(Comment $comment): void {
        if ($comment->getParentId() == null) {
            $comment->setId($comment->isPrompt() ? null : ++$this->nComments);
            $this->roots->addLast(new Node($comment));
            return;
        }

        $this->addToComment($comment, $this->roots);
    }
}
