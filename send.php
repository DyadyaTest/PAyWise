<?php 
    //in case of incorrect operation, it will display a message on the screen. 
    ini_set('display_errors','On');
    error_reporting('E_ALL');
    // If everything works, then comment out these two lines

    if (isset($_POST["send"])) {
    $to = "example@gmail.com"; //DON'T FORGET TO PUT THE E-MAIL HERE ON WHICH YOU NEED TO RECEIVE MESSAGES
    $subject = "Letter from the site";
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "I want to get a Paywise card. My e-mail: ".$_POST["postmail"]."\n"; //I am forming a message
    mail($to, $subject, $msg, $headerss);
    print "<script>alert(\"Message sent successfully!\");window.location = window.location.href</script>"; //successful shipment message
    }

?>
