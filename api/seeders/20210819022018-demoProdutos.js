'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        code: 'tshirt-long-sleeve',
        name: 'Tech T-Shirt Long Sleeve',
        price: 150.00,
        description: 'A Tech T-shirt é nosso upgrade da camiseta básica masculina, feita com fibras até 3x mais macias que algodão.',
        sku: 'tshirt-long-sleeve-black',
        category: 'Camisetas',
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        code: 'jogger-gang-moletinho',
        name: 'CALÇA JOGGER MOLETINHO PRETA GANG MASCULINA',
        price: 99.99,
        description: 'Calça em moletinho na cor preta com punho em modelagem jogger com punho e perna mais ajustadas.',
        sku: 'jogger-gang-moletinho-black',
        category: 'Calças',
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        code: 'nike-sb-charge-canvas',
        name: 'Tênis Nike SB Charge Canvas - Preto+Branco',
        price: 197.99,
        description: 'Capriche nas manobras no sk8 e no estilo com Tênis Nike SB Charge!',
        sku: 'jogger-gang-moletinho-black',
        category: 'Tênis',
        createdAt: new Date(),
			  updatedAt: new Date()
      },
      {
        code: 'watch-lince-5atm',
        name: 'Relógio Masculino 5ATM Lince',
        price: 249.90,
        description: 'Despojado e moderno, é ideal para o dia a dia!',
        sku: 'watch-lince-5atm-black',
        category: 'Relógios',
        createdAt: new Date(),
			  updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
