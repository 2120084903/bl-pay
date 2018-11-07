// 自定义JavaScript
// ======================================处理IE======================================
// 针对IE10
if (/*@cc_on!@*/false) {
    document.documentElement.className += ' ie' + document.documentMode;
};
// 针对IE11及非IE浏览器，
// 因为IE11下document.documentMode为11，所以html标签上会加ie11样式类；
// 而非IE浏览器的document.documentMode为undefined，所以html标签上会加ieundefined样式类。
if (/*@cc_on!@*/true) {
    document.documentElement.className += ' ie' + document.documentMode;
};

// 判断是否为IE浏览器，如果是IE就在html标签上面加上类名“IE”，如果不是则不添加
if (window.ActiveXObject || "ActiveXObject" in window) {
    console.log('not IE')
    $('html').addClass('IE');
} else {
    console.log('not IE')
};
// IE低版本升级提示
$(function() {
    if ($('html').is('.ie6,.ie7,.ie8,.ie9')) {
        $('html').addClass('scrollbar');
        var BrowserHtml = '<div class="BrowserBox">'+
            '<div class="IEmask"></div>'+
            '<div class="BrowserMain">'+
            '<div class="closeBtn" title="关闭">'+
            '<i class="iconfont icon-guanbi"></i>'+
            '</div>'+
            '<div class="tsTxtShow">'+
            '<h3>大胸弟！你知道你的Internet Explorer已经过时了吗？</h3>'+
            '<p>为了得到我们网站最好的体验效果，我们建议您升级到最新版本的Internet Explorer或者选择另一个web浏览器。经调查，<span class="sign">长得帅的人一般都用下面的浏览器！</span>赶紧点击下载吧！</p>'+
            '</div>'+
            '<div class="BrowserDownload clearfix">'+
            '<div class="BrowserLi">'+
            '<div class="iconBox">'+
            '<i class="radius"></i>'+
            '<a href="https://pc.qq.com/detail/1/detail_2661.html" target="_blank" class="imgBoxMain Chrome"></a>'+
            '</div>'+
            '<a href="https://pc.qq.com/detail/1/detail_2661.html" target="_blank" class="BrowserName">Chrome</a>'+
            '</div>'+
            '<div class="BrowserLi">'+
            '<div class="iconBox">'+
            '<i class="radius"></i>'+
            '<a href="http://www.firefox.com.cn/" target="_blank" class="imgBoxMain FireFox"></a>'+
            '</div>'+
            '<a href="http://www.firefox.com.cn/" target="_blank" class="BrowserName">FireFox</a>'+
            '</div>'+
            '<div class="BrowserLi">'+
            '<div class="iconBox">'+
            '<i class="radius"></i>'+
            '<a href="http://www.oupeng.com/download/" target="_blank" class="imgBoxMain Opera"></a>'+
            '</div>'+
            '<a href="http://www.oupeng.com/download/" target="_blank" class="BrowserName">Opera</a>'+
            '</div>'+
            '<div class="BrowserLi">'+
            '<div class="iconBox">'+
            '<i class="radius"></i>'+
            '<a href="https://browser.360.cn/se/" target="_blank" class="imgBoxMain Browser360"></a>'+
            '</div>'+
            '<a href="https://browser.360.cn/se/" target="_blank" class="BrowserName">360浏览器</a>'+
            '</div>'+
            '<div class="BrowserLi">'+
            '<div class="iconBox">'+
            '<i class="radius"></i>'+
            '<a href="https://ie.sogou.com/" target="_blank" class="imgBoxMain sougou"></a>'+
            '</div>'+
            '<a href="https://ie.sogou.com/" target="_blank" class="BrowserName">搜狗浏览器</a>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';

        $("body").append(BrowserHtml);
    } else {
        console.log('不是ie或者ie10以上')
    };

    $('.closeBtn').click(function () {
        $('.BrowserBox').remove();
        $('html').removeClass('scrollbar');
    });
});

// ======================================/处理IE======================================

