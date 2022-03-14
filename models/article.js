'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User, {
        as: 'author',
        foreignKey: 'author_id',
      })
    }
  };
  Article.init({
    title: DataTypes.STRING,
    intro: DataTypes.STRING,
    body: DataTypes.STRING,
    image_url: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    published_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Article',
    timestamps: false,
    tableName: 'blog_articles'
  });
  return Article;
};