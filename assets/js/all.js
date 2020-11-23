"use strict";

$(function () {
  // 原路徑會有 /， eg: /admin.html，要把斜線去掉
  var current = location.pathname.substring(1);
  $('.sidebar-nav .link').each(function () {
    var $this = $(this);

    if ($this.attr('href').indexOf(current) !== -1) {
      $this.addClass('active');
    } else {
      $this.removeClass('active');
    }
  });
});
//# sourceMappingURL=all.js.map
