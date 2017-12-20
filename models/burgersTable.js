module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    return Burger;
};

// -- CREATE TABLE burgers (
// --   burger_name VARCHAR(255) NULL,
// --   devoured BOOLEAN DEFAULT FALSE,
// --   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// --   PRIMARY KEY (id)
// -- );
