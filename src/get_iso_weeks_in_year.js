var startOfISOYear = require('./start_of_iso_year')
var addWeeks = require('./add_weeks')

var MILLISECONDS_IN_WEEK = 604800000

/**
 * Get the number of ISO weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} number of ISO weeks in a year
 */
var getISOWeeksInYear = function(dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear

