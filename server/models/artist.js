module.exports = function (sequelize, Sequelize) {
    const Artist = sequelize.define("artist", {
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

    return Artist;
}