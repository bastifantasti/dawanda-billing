<?
  require_once ('config.php');
  require_once ("lib/OAuth.php");
  include("lib/v1/src/dawanda.php");


  $dawanda_oauth = new DaWandaOAuth($key, $secret, "de");


  $access_token = $dawanda_oauth->loadAccessToken();
  $user         = $dawanda_oauth->getShopDetails($access_token);
  echo json_encode($user);
?>

