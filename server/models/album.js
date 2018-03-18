module.exports = function (sequelize, Sequelize) {
    const Album = sequelize.define("album", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        img: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        }
    });

    return Album;
}