define(
  [
    'jquery'
  ],
  function(jQuery) {



    var isMobile, fb_app_id;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile= true;
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        isMobile: isMobile,
        fb_app_id: fb_app_id,
        staticInfo: staticInfo,
        shareImage: 'http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/fb-post.jpg'
    };
});
