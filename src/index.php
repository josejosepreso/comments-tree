<?php

require_once "./CommentsTree.php";
require_once "./Comment.php";

$tree = new CommentsTree();

$tree->addComment(new Comment("", "", null, false));
$tree->addComment(new Comment("", "", 1, false));
$tree->addComment(new Comment("", "", null, false));
$tree->addComment(new Comment("", "", 2, false));
