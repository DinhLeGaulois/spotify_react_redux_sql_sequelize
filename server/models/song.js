module.exports = function (sequelize, Sequelize) {
    const Song = sequelize.define("song", {
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
        type: {
            type: Sequelize.STRING
        }
    });

    return Song;
}