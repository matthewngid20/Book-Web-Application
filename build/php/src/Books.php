<?php

namespace bookstore;

use bookstore\Database;

class Books extends Database {

    //private $connection;

    public function __construct() {
        parent:: __construct();
        //$this -> connection = Database.connection;
        
    }

    public function getBooks(){
        $query = "SELECT * FROM book";
        $statement = $this -> connection -> prepare($query);  
        if( $statement -> execute() == false){
            echo "query or database error";
        }
        else {
            $result = $statement -> get_result();
            $books = array();
            //loop throu result to add each book 
            while($row = $result -> fetch_assoc() ){
                array_push($books, $row ); 
            }    
            return $books;
        }

    }

}

?>