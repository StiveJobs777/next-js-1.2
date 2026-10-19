const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Author = sequelize.define('Author', {
  name: { type: DataTypes.STRING, allowNull: false },
  country: DataTypes.STRING,
});

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  year: DataTypes.INTEGER,
  genre: DataTypes.STRING,
});

Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' });

module.exports = { Author, Book };