function characterCount(id, textMax) {
  var text_max = textMax;
  $(id).html('You have ' + text_max + ' characters remaining');

  $('textarea').keyup(function() {
      var text_length = $('textarea').val().length;
      var text_remaining = text_max - text_length;

      if (text_length > text_max) {

        var text_reverse_negative =- text_remaining;

        $(id).html('You have ' + text_reverse_negative + ' characters too many').addClass('nhsuk-error-message').removeClass('nhsuk-hint');

      } else {

        $(id).html('You have ' + text_remaining + ' characters remaining').removeClass('nhsuk-error-message').addClass('nhsuk-hint');
      }

  });
}
