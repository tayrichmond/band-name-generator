$(function() {

  $('button').on('click', function() {
    $.get('/verb', function(response) {
      var verb = response.word;
      $('#verb').html(verb);
    });

    $.get('/adjective', function(response) {
      var adjective = response.word;
      $('#adjective').html(adjective);
    });

    $.get('/noun', function(response) {
      var noun = response.word;
      $('#noun').html(noun);
    });

  });

});
