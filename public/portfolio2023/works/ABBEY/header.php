<?php
if (isset($hbgcolor) && $hbgcolor) {
    $hbgwhite = "hbgwhite";
} else {
    $hbgwhite = "";
}

if (isset($hbmenu) && $hbmenu) {
    $hbmenuspan = "hbmenuspan";
} else {
    $hbmenuspan = "";
}

if (isset($hccolor) && $hccolor) {
    $hccblack = "hccblack";
} else {
    $hccblack = "";
}
?>

<header id="header" class="<?php echo $hbgwhite ?>">
    <div class="headerwrap <?php echo $hccblack ?>">
        <a href="./index.php" class="header-logo">ABBEY</a>
        <nav class="header-nav <?php echo $hccblack ?>">
            <div class="nav-item"><a href="./gallery2.php">GALLERY</a></div>
            <div class="nav-item"><a href="./index.php#staff">STAFF</a></div>
            <div class="nav-item"><a href="./index.php#menu">MENU</a></div>
            <div class="nav-item"><a href="./index.php#access">ACCESS</a></div>
            <div class="nav-item"><a href="./FAQ.php">FAQ</a></div>
            <div class="nav-item"><a href="#">ご予約</a></div>
        </nav>
        <div class="hamburger">
            <span class="<?php echo $hbmenuspan ?>"></span>
            <span class="<?php echo $hbmenuspan ?>"></span>
            <span class="<?php echo $hbmenuspan ?>"></span>
        </div>
    </div>
</header>
