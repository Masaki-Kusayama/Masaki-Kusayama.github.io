<?php
ini_set( 'display_errors', 0 );
$data = array();
$data['title'] = date("H:i:s");
$data['body'] = "し゛ご゛と゛ヤ゛ダ゛ー！！！！！！！！！！！オ゛ウ゛チ゛帰゛る゛ーーーーーーーーーーーーーーーーーーーー！！！！！！！！";
$data['icon'] = 'images/ksymmsk_150_150.png';
$data['data']['link'] = "https://retty.me";
header('Content-Type: application/json');
echo json_encode($data);
?>
