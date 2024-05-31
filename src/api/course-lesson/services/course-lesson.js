'use strict';

/**
 * course-lesson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-lesson.course-lesson');
