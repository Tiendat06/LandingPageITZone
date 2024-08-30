<?php
ob_start();
class SiteController{
    public function __construct() {

    }

    public function index(){
        $content = 'home';
        include "./views/layouts/index.php";
    }

    public function info(){
        $content = 'info';
        include "./views/layouts/index.php";
    }

    public function activity(){
        $content = 'activity';
        include "./views/layouts/index.php";
    }

    public function achievement(){
        $content = 'achievement';
        include "./views/layouts/index.php";
    }

    public function recruitment(){
        $content = 'recruitment';
        include "./views/layouts/index.php";
    }

    public function error_404(){
        $content = '404';
        include "./views/layouts/index.php";
    }
}

?>