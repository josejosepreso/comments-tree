<?php

require_once "./Node.php";

class SinglyLinkedList {
    private ?Node $head = null;
    private int $size;
    
    public function __construct() {
        $this->head = null;
        $this->size = 0;
    }
    
    public function getFirst(): ?Node {
        return $this->head;
    }

    public function setFirst(Node $node): void {
        $this->head = $node;
    }

    public function getSize(): int {
        return $this->size;
    }

    public function addLast(Node $node): bool {
        if ($this->head == null) {
            $this->setFirst($node);
            $this->size++;
            return true;
        }

        $current = $this->head;

        while ($current->getNext() != null) {
            $current = $current->getNext();
        }

        $current->setNext($node);

        $this->size++;

        return true;
    }
}
