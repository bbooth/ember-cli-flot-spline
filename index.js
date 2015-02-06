/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-flot-spline',
  included: function (app) {
    app.import(app.bowerDirectory + "/flot-spline/js/jquery.flot.spline.js");
  }
};
