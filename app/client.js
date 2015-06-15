$(function() {
  $('button').on('click', function() {
    $.get('/verb', function(response) {
      $('#verb').html(response.word);
    });
    $.get('/adjective', function(response) {
      $('#adjective').html(response.word);
    });
    $.get('/noun', function(response) {
      $('#noun').html(response.word);
    });
  });
});
