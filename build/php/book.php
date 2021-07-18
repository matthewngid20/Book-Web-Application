<?php
require('vendor/autoload.php');

use bookstore\Books;

$books = new Books();

$book_results = $books -> getBooks();

print_r($book_results);

echo json_encode($book_results);

?>