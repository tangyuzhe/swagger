'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const SpecialitySchema = new mongoose.Schema({
    id: {
      type: String
    },
    collegeCode: {
      type: Number
    },
    collegeName: {
      type: String
    },
    specialityCode: {
      type: String
    },
    specialityName: {
      type: String
    }
  }, {
    versionKey: false,
  });
  return mongoose.model('Speciality', SpecialitySchema, 'speciality');
};
