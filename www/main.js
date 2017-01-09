ons.ready(function() {
  var options = {
      animation: 'slide',
      onTransitionEnd: function(){}
  };
  var navigator1 = document.getElementById('navigator1');
  navigator1.pushPage('page1',options);
});

function goPage(page) {
  var options = {
    animation: 'slide',
    onTransitionEnd: function(){}
  };
  var navigator1 = document.getElementById('navigator1');
  navigator1.pushPage(page, options);
}