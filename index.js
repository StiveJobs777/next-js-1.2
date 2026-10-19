const sequelize = require('./db');
const { Author, Book } = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    const author = await Author.create({ name: 'Стругацкие', country: 'СССР' });

    await author.createBook({ title: 'Пикник на обочине', year: 1972, genre: 'sci-fi' });
    await author.createBook({ title: 'Понедельник начинается в субботу', year: 1965, genre: 'sci-fi' });

    console.log('Книг у автора:', await author.countBooks());

    const result = await Author.findAll({
      include: { model: Book, as: 'books' },
    });
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await sequelize.close();
  }
}

main();