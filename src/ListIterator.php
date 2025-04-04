<?php

class ListIterator implements Iterator {
    private ?Node $current;
    private SinglyLinkedList $list;
    private int $index;

    public function __construct(SinglyLinkedList $list) {        
        $this->list = $list;
        $this->current = $this->list->getFirst();
        $this->index = 0;
    }

    public function current(): ?Node {
        return $this->current;
    }

    public function next(): ?Node {
        $this->current = $this->current->getNext();
        $this->index++;
        return $this->current;
    }

    public function valid(): bool {
        return $this->index < $this->list->getSize();
    }

    public function key(): int {
        return $this->index;
    }

    public function rewind(): void {
        $this->index = 0;
        $this->current = $this->list->getFirst();
    }
}
