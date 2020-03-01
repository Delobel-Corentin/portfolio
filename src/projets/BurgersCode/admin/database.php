<?php
    
class Database
{
    
    private static $dbHost = "mysql-corentind.alwaysdata.net";
    private static $dbName = "corentind_burger_code";
    private static $dbUser = "corentind";
    private static $dbUserPassword = "Bidou59840";

    private static $connection = null;
    
    
    public static function connect()
    {
        
    try
    {
        self::$connection = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName,self::$dbUser,self::$dbUserPassword);
    }
    catch(PDOException $e)
    {
    die($e->getMessage());
    }
    return self::$connection;
        
    }
    
    public static function disconnect()
    {
        self::$connection = null;
    }
    
    
}

Database::connect();




?>