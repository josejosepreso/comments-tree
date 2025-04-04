<?php

include_once "./SinglyLinkedList.php";

class Comment {
    private ?int $id;
    private string $author;
    private string $content;
    private SinglyLinkedList $children;
    private ?int $parentId;
    private bool $prompt;

    public function __construct(string $author, string $content, ?int $parentId, bool $prompt) {
        $this->id = null;
        $this->author = $author;
        $this->content = $content;
        $this->children = new SinglyLinkedList();
        $this->parentId = $parentId;
        $this->prompt = $prompt ? true : false;
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function setId(int $id): void {
        $this->id = $id;
    }

    public function getParentId(): ?int {
        return $this->parentId;
    }    

    public function isPrompt(): bool {
        return $this->prompt;
    }

    public function getChildren(): SinglyLinkedList {
        return $this->children;
    }

    public function addChild(Comment $comment): bool {
        return $this->children->addLast(new Node($comment));
    }
}
