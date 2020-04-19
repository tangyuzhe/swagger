'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const AlumnusSchema = new mongoose.Schema({
    id: {
      type: String
    },
    name: {
      type: 'string',
      required: true,
    },
    sex: {
      type: 'string'
    },
    birthday: {
      type: 'string'
    },
    IDNumber: {
      type: 'string'
    },
    school: {
      type: 'string'
    },
    studentNumber: {
      type: 'string'
    },
    collegeName: {
      type: 'string'
    },
    specialityName: {
      type: 'string'
    },
    admissionTime: {
      type: 'number'
    },
    graduationTime: {
      type: 'number'
    },
    workArea: {
      type: 'string'
    },
    company: {
      type: 'string'
    },
    companyPost: {
      type: 'string'
    },
    contact: {
      type: 'string'
    },
    QQ: {
      type: 'string'
    }
  }, {
    versionKey: false,
  });
  return mongoose.model('Alumnus', AlumnusSchema, 'alumnus');
};
