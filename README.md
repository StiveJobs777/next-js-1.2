# Практическая работа №1.2: связи таблиц в Sequelize

## Предметная область
Библиотека. Две модели:
- **Author**: name, country
- **Book**: title, year, genre

## Тип связи
Один-ко-многим (1:N): `Author.hasMany(Book)` + `Book.belongsTo(Author)`, внешний ключ `authorId`.

## Запуск
```bash
npm install
node index.js
```