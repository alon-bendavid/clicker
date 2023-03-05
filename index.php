<?php
require_once("header.php");

?>

<body>


    <!-- //////////////////inscrption\\\\\\\\\\\\\\\\\\\\\ -->
    <div class="forms">
        <div class="section inscrption">
            <div class="welcomeBox" id="welcome">
                <p>Welcome to <strong>Le Boulanger</strong> Click Game!<br> Hire employees with bonus buttons to make bougettes, but watch your budget. Use the manual button for instant bougettes. Unlock bonuses for higher profits and faster production. Become the ultimate bougette tycoon!
                    Good luck and have fun!
                    <br><br>
                    As you connect, music will start playing. You can close it if you prefer, but we recommend leaving it on for the full game experience.
                </p>
                <button id="closeWel">close</button>
            </div>
            <form id="signUp">
                <h2>sign up</h2>
                <h3 id="signMsg"></h3>
                <input type="text" placeholder="username" name="username"><br>
                <input type="password" placeholder="password" name="password" required><br>
                <input type="password" placeholder="retype password" name="repass" required><br>
                <button name="inscrptionSub" id="inscrptionSub">submit </button>


            </form>
        </div>



</body>

</html>