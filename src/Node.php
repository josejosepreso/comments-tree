<?php

/** @template T */
class Node {
    /** @var T */
    private $value;
    /** @var Node<T>|null */
    private ?Node $next;

    public function __construct($value) {
        $this->value = $value;
        $this->next = null;
    }

    public function getNext(): ?Node {
        return $this->next;
    }

    public function setNext(Node $node): void {
        $this->next = $node;
    }

    public function getValue() {
        return $this->value;
    }
}
