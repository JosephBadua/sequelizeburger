module.exports = function(sequelize, DataTypes) {
var burgers = sequelize.define("burgers", {
    id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    burger_name: { type: DataTypes.STRING },
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
    });
    return burgers;
};