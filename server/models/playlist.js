module.exports = function (sequelize, Sequelize) {
    const Playlist = sequelize.define("playlist", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Playlist;
}