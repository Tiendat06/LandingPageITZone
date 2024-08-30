<?php
    /**
     * @var $content
     */
    if($content == 'home'){
        include "./views/site/home.php";
    } else if($content == 'activity'){
        include "./views/site/activity.php";
    } else if($content == 'achievement'){
        include "./views/site/achievement.php";
    } else if($content == 'recruitment'){
        include "./views/site/recruitment.php";
    } else if($content == 'info'){
        include "./views/site/info.php";
    } else if($content == '404'){
        include "./views/error/404.php";
    }
?>