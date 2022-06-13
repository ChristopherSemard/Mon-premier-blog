<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title><?= $title ?></title>
        <!-- CSS only -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="../style.css">
        <link rel="icon" href="https://images.vexels.com/media/users/3/199828/isolated/preview/32b722dcaaa10fe7564cba78529b35b5-chat-bubbles-icon-chat-bubbles.png" type="image/icon type">
        
    </head>

    <body>

        <!-- Header et nav -->
        <?php include_once('header.php');?>
        
        <!-- Main -->
        <main class="container py-5 col-lg-4 vh-80">

        <!-- Inserton de notre contenu ici -->
        <?= $content ?>

        </main>

        <!-- Footer -->
        <?php include_once('footer.php');?>
    </body>
</html>
