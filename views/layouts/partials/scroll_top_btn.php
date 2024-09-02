<?php
?>
<div class="scroll-top">
    <button class="btn scroll-top__btn d-none"><i class="fa-solid fa-arrow-up"></i></button>
</div>
<script>
    window.addEventListener('DOMContentLoaded', () => {
        if (window.scrollToTop){
            window.onscroll = () => {
                scrollToTop();
            }
        }
    })
</script>