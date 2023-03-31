const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Romulo 2",
          email: "romulo2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Alex 2",
          email: "alex2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Josuel 2",
          email: "josuel2@gmail.com",
          password_hash: await bcryptjs.hash("123456123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Pedro 2",
          email: "pedro2@gmail.com",
          password_hash: await bcryptjs.hash("123456123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Malaquias 2",
          email: "malaquias2@gmail.com",
          password_hash: await bcryptjs.hash("123456123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Paulo Guedes 2",
          email: "paulo-guedes2@gmail.com",
          password_hash: await bcryptjs.hash("123456123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Fernando 2",
          email: "fernandinho2@gmail.com",
          password_hash: await bcryptjs.hash("123456123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Maria Feia 2",
          email: "feinha2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Juliceiane 2",
          email: "juliceiane2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: () => {},
};
