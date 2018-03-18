module.exports = function (sequelize, Sequelize) {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return User;
}