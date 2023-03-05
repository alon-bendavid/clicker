<?php
include_once("header.php");

?>

<body>
    </audio>
    <div id="game">
        <?php if (isset($_SESSION["user"])) { ?>
            <input id="player" type="hidden" value='<?php echo $_SESSION["user"]["login"]; ?>'>

        <?php } ?>
        <h4 id="message"> </h4>
        <h2 id="counter" class="counter">0</h2>
        <button id="laborClick">Create a baguette!</button>
        <div class="btn_div">
            <button id="bonus1"> </button>
            <button id="bonus2"> </button>
            <button id="bonus3"> </button>
        </div>
        <?php if (isset($_SESSION["user"])) { ?>
            <!-- <button id="delCredit">Delete Credit</button> -->
            <button id="delSpeed">Delete Progress</button>

        <?php
        }  ?>
    </div>
    <button id="startSound"> <img src="media\speaker.png" alt="" id="sound"></button>
    <button id="stopSound"> <img src="media\noSound.png" alt="" id="noSound"></button>

    <audio id="audio" src="media\Joe.mp3"></audio>
</body>

</html>