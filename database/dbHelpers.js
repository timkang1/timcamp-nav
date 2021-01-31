const mongoose = require('mongoose');
const db = require('./index.js');

module.exports = {

  searchLocations: (searchTerm, callback) => {
    db.Location.find({
      'city': { '$regex': searchTerm, '$options': 'i' }
    }).limit(5).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  searchCamps: (searchTerm, callback) => {
    db.Camp.find({
      'name': { '$regex': searchTerm, '$options': 'i' }
    }).limit(8).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

};
