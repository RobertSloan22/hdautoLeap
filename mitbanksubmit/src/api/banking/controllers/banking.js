'use strict';

/**
 * banking controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::banking.banking');
