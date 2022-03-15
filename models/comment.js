'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    author_name: DataTypes.STRING,
    body: DataTypes.STRING,
    commented_on: DataTypes.DATE,
    article_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: false,
    tableName: 'blog_comments'
  });
  return Comment;
};