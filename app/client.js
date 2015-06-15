$(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function(response) {
      var confirm = response.message + "We saved: <em>" + response.confirm + "</em>";
      $('#adjective-res').html(confirm);
    });
  });


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
