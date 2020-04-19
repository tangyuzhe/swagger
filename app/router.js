'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/swagger-ui.html')
  router.resources('speciality', '/api/speciality', controller.speciality)
  router.get('/api/getCollegeList', controller.speciality.findCollegeList)
  router.get('/api/getSpecialityList', controller.speciality.findSpecialityList)
};
