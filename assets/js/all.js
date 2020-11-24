"use strict";

$(function () {
  var current = location.pathname;
  $('.sidebar-nav .link').each(function () {
    var $this = $(this);
    $this.removeClass('active'); // 放到 gitbub 上取得的路徑會是像 "/DashboardLayout-Answer/index.html" 
    // 第一個斜線後方是資料夾名稱，第二個斜線之後才是路徑名稱，所以用 split 這個字串切割的方法
    // 取得用斜線來分割的第二個字串 (也就是當下路徑) 

    if ($this.attr('href').indexOf(current.split('/')[1]) !== -1) {
      $this.addClass('active');
    }
  });
});
//# sourceMappingURL=all.js.map
