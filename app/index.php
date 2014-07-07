<?
  require_once ('config.php');
  require_once ("lib/OAuth.php");
  include("lib/v1/src/dawanda.php");

  session_start();

  $dawanda_oauth = new DaWandaOAuth($key, $secret, "de");

  if($_REQUEST['token'] && $_REQUEST['token_secret']) {
    $access_token = $dawanda_oauth->getAccessToken($_REQUEST['token'], $_REQUEST['token_secret']);
    $dawanda_oauth->saveAccessToken($access_token);
    
    Header("Location: index.html#/order");
  }
  
  $access_token = $dawanda_oauth->loadAccessToken();
  $user         = $dawanda_oauth->getUserDetails($access_token);
  $orders       = $dawanda_oauth->getOrders($access_token);
  $date_orders  = $dawanda_oauth->getOrders($access_token, time());
?>
<!doctype html> <html class="no-js"> <head> <meta charset="utf-8"> <title></title> <meta name="description" content=""> <meta name="viewport" content="width=device-width"> <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"> <link href="http://fonts.googleapis.com/css?family=Grand+Hotel" rel="stylesheet" type="text/css"> <!-- Place favicon.ico and apple-touch-icon.png in the root directory --> <link rel="stylesheet" href="styles/main.css">  <body ng-app="dawandaBillingApp"> <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]--> <!-- Add your site or application content here --> <div class="container"> <div class="header hidden-print"> <ul class="nav nav-pills pull-right"> <li class="active"><a ng-href="#">Home</a></li> <li><a href="index.html#/about">Über mich</a></li> <li><a href="index.html#/contact">Kontakt</a></li> </ul> <h3 class="text-muted hotel" style="font-size: 32px">Dawanda Rechnungen</h3> <span class="hotels">Always a pleasure scaffolding your billings. :)</span> </div> <div ng-view="">
    <div class="jumbotron"> <img src="images/dawanda-header.png"> <p class="lead" style="margin-top: 15px; padding-left: 40px; font-size: 16px"> <span class="text-muted">1.&nbsp;&nbsp;<span class="glyphicon glyphicon-shopping-cart"></span> Dawand Login bestätigen</span><br> <span class="text-muted">2.&nbsp;&nbsp;<span class="glyphicon glyphicon-globe"></span> Bestellung raussuchen</span><br> <span class="text-muted">3.&nbsp;&nbsp;<span class="glyphicon glyphicon-print"></span> Rechnung als PDF speichern -- BÄM! --</span><br> </p> </div>
    <a href="authorize.php"><button type="button" class="btn btn-primary btn-lg btn-block btn-success">LOGIN</button></a>
    </div> <div class="footer hidden-print"> <p class="hotel" style="font-size: 21px">with <span class="glyphicon glyphicon-heart"></span> from <a href="http://about.me/sebastian.felix.schwarz">Sebastian Felix Schwarz</a></p></div> <iframe src="http://ghbtns.com/github-btn.html?user=bastifantasti&repo=dawanda-billing&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe> <iframe src="http://ghbtns.com/github-btn.html?user=bastifantasti&repo=dawanda-billing&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe> <iframe src="http://ghbtns.com/github-btn.html?user=bastifantasti&type=follow&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>  </div> <!-- Google Analytics: change UA-XXXXX-X to be your site's ID --> <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

       ga('create', 'UA-XXXXX-X');
       ga('send', 'pageview');</script> <!--[if lt IE 9]>


  </body>
</html>