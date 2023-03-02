<?php
include_once("header.php");
?>

<body>
    <?php if (isset($_SESSION["user"])) { ?>
        <input id="player" type="hidden" value='<?php echo $_SESSION["user"]["login"]; ?>'>

    <?php } ?>
    <h4 id="message"> </h4>
    <h2 id="counter">0</h2>
    <button id="laborClick">Click to gain credit!</button>
    <div class="btn_div">
        <button id="bonus1"> </button>
        <button id="bonus2"> </button>
        <button id="bonus3"> </button>
    </div>
    <?php if (isset($_SESSION["user"])) { ?>
        <button id="delCredit">Delete Credit</button>
        <button id="delSpeed">Delete Speed Bonus</button>

    <?php
    }  ?>
</body>

</html>