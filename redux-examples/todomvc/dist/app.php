<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="keywords" content="微信电影票,电影,最新电影,电影票,即将上映电影,好看的电影,在线买电影票,电影票预订,选座购票,电影票团购,兑换券"/>
    <meta name="description" content="微信电影票是微信电影票官方手机版，提供超过3000家影院的在线购票服务，是目前全国覆盖影院最多的选座购票平台。"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <script type="text/javascript">
      !function(){function e(){var e=document.documentElement.clientWidth, t=document.querySelector("html"), f = e>750?750/18.75:e/18.75;window.fontSize=f;t.style.fontSize=f+"px"}e(),window.addEventListener("resize",e)}();
    </script>
    <script>
      var initJsData = <?php echo json_encode($this->getJsData(), JSON_UNESCAPED_SLASHES); ?>;
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    
    <link href="<?php echo wechatStaticUrl(); ?>/css/react-7f5de154.css" rel="stylesheet">
    
    <title><?php echo $title; ?></title>
  </head>
  <body>
    <div id="app"></div>
    
    <script type="text/javascript" src="<?php echo wechatStaticUrl(); ?>/js/react-86789305.js"></script>
    
    <script type="text/javascript" src="<?php echo wechatStaticUrl(); ?>/js/app-bd8bc04e.js"></script>
    
  </body>
</html>
