<?php
require_once("header.php");

?>

<body>


    <!-- //////////////////inscrption\\\\\\\\\\\\\\\\\\\\\ -->
    <div class="forms">
        <div class="section inscrption">
            <h2>sign up</h2>
            <form id="signUp">
                <h3 id="signMsg"></h3>
                <input type="text" placeholder="username" name="username"><br>
                <input type="password" placeholder="password" name="password" required><br>
                <input type="password" placeholder="retype password" name="repass" required><br>
                <button name="inscrptionSub" id="inscrptionSub">submit </button>


            </form>
        </div>
        <!-- //////////////////connexion\\\\\\\\\\\\\\\\\\\\\ -->
        <div class="section connection_form">

            <h2>Sign in!</h2>
            <h3 id="conMsg"></h3>
            <form id="connexion">
                <input type="text" placeholder="username" name="loginUsr" required><br>

                <input type="password" placeholder="password" name="loginPwd" required><br>

                <button type="submit" name="loginSub">sign in</button>

            </form>
            <h3 class="small_link"><a href="inscription.php">
                    <!-- Not a member yet? <strong>Sign Up!</strong> -->
                </a></h3>
            <!-- <a class="logoGit" href="https://github.com/alon-bendavid/livre-or"><img src="..\media\GitHub-Logo.png" alt=""></a> -->
        </div>
    </div>


</body>

</html>