<?php

namespace bookstore;

class Database 
{
    private $host ;
    private $username;
    private $password;
    private $databasename;
    protected $connection; 

    protected function __construct (){
        $this -> host = "localhost";
        $this -> username = "website";
        $this -> password = "PASSWORD";
        $this -> databasename = "heartbooks";
        $this -> connection = mysqli_connect(
            $this -> host,
            $this -> username,
            $this -> password, 
            $this -> databasename,
            // $this -> connection
        ); 


    }
}

?>