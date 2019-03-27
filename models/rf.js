/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rf', {
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    MAC: {
      type: DataTypes.CHAR(17),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hub',
        key: 'MAC'
      }
    }
  }, {
    tableName: 'rf'
  });
};
