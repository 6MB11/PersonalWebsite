// https://stackoverflow.com/a/54318334/17764200

$(document).ready(function () {
  var min_height = -1;

  $("img").each(function () {
    if ($(this).height() < min_height || min_height == -1) {
      min_height = $(this).height();
    }
    $(".row").height(min_height);
  });

  $("img").each(function () {
    $(this).height(min_height);
  });
});
