<?php
    include "./controllers/SiteController.php";
    $siteController = new SiteController();

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['param_1']) && isset($_GET['param_2']) && isset($_GET['param_3'])){
            $siteController->error_404();
        } else if(isset($_GET['param_1']) && isset($_GET['param_2'])){
            $siteController->error_404();
        } else if(isset($_GET['param_1'])){
            switch ($_GET['param_1']) {
                case 'home':
                case 'index.php':
                    $siteController->index();
                    break;
                case 'info':
                    $siteController->info();
                    break;
                case 'activity':
                    $siteController->activity();
                    break;
                case 'achievement':
                    $siteController->achievement();
                    break;
                case 'recruitment':
                    $siteController->recruitment();
                    break;
                default:
                    $siteController->error_404();
                    break;
            }
        } else{
            $siteController->index();
        }
    } else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_GET['param_1']) && isset($_GET['param_2']) && isset($_GET['param_3'])){

        } else if(isset($_GET['param_1']) && isset($_GET['param_2'])){

        } else if(isset($_GET['param_1'])){

        }
    }
?>