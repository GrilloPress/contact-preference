module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  var nunjucksDate = require('nunjucks-date');
  var moment = require('moment');

  filters.today = function(name) {
      return moment().format("Do MMMM YYYY");
  }


  // Filter to print out dates in NHS App format
  //
  // Accepts numbers and strings.
  // Strings for "today" and "tomorrow"
  // Numbers like 5 will return a day 5 days away
  //
  // Usage in your templates:
  //
  // {{ "today" | returnDate }}
  // {{ "tomorrow" | returnDate }}
  // {{ 5 | returnDate }}


  filters.returnDate = function(date) {

    if (date == "today") {

      return moment().format("dddd D MMMM YYYY");

    } else if (date == "tomorrow") {
      return moment().add(1, 'days').format("dddd D MMMM YYYY");
    } else {
      return moment().add(date, 'days').format("dddd D MMMM YYYY");
    }

  }

  filters.returnPastDate = function(date) {

      return moment().subtract(date, 'days').format("dddd D MMMM YYYY");

  }



  // Filter to print placeholder data if data doesn't exist.
  // Useful for prototypes that may also be used as documentation
  //
  // Accepts numbers, strings, data[] and variables
  // If empty prints nothing unless you give it a placeholder which it will print out
  //
  // Usage in your templates:
  //
  // {{ data['role'] | placeholder('Captain of the ship') }}

  filters.placeholder = function(data,placeholder) {
    if (data) {
      return data
    } else if (placeholder) {
      return placeholder
    } else {
      return
    }
  }

  filters.stringOrNot = function(obj) {
    return typeof obj == 'string';
  }

  // Started
  // Complete
  //
  // else
  // Not started

  filters.tagClasses = function(status) {
    var css = {
      "Started":'tag-started',
      "Complete":'tag-completed_blue'
    }

    if (status) {

      return css[status]

    } else {
      return "tag-not-started"
    }

  }


  // Filter to change a number, like 1 "12" or 04, to a month in words
  //
  // Accepts numbers, strings, data[] and variables
  // If empty prints nothing unless you give it a placeholder which it will print out
  //
  // Usage in your templates:
  //
  // With number with filer
  //                    {{ 1 | monthToWord }}
  // With data from previous input
  //                    {{ data['dob-month'] | monthToWord }}
  // With data that's empty with alternative placeholder
  //                    {{ data['dob-month'] | monthToWord('January') }}

  filters.monthToWord = function(month,placeholder) {
    var months = {
      "1":'January',
      "2":'February',
      "3":'March',
      "4":'April',
      "5":'May',
      "6":'June',
      "7":'July',
      "8":'August',
      "9":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }

    if (month) {

      month.toString().replace(/^0+(?=\d)/, '')
      return months[month]

    } else if (placeholder) {
      return placeholder
    } else {
      return
    }

  }


  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
