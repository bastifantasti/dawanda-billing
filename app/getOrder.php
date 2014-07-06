<?
  require_once ('config.php');
  require_once ("lib/OAuth.php");
  include("lib/v1/src/dawanda.php");


  $dawanda_oauth = new DaWandaOAuth($key, $secret, "de");


  $access_token = $dawanda_oauth->loadAccessToken();
  $orders       = $dawanda_oauth->getOrders($access_token);
  $date_orders  = $dawanda_oauth->getOrders($access_token, time());
  echo json_encode($orders);
?>

