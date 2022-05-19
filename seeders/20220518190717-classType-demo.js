'use strict'

import module from 'module'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClassTypes', [
      {
        descr_nivel: 'A1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'A2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'A3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'B1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'B2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'B3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClassTypes', null, {})
  }
}
