'use strict';

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: "",   // <----------------- Your Password here
    database: "my_spotify",
    host: "127.0.0.1",
    dialect: "mysql",
};

var sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

db.sequelize = sequelize; // the library
db.Sequelize = Sequelize;

db.album_artist = require('../models/album_artist.js')(sequelize, Sequelize);
db.album_song = require('../models/album_song.js')(sequelize, Sequelize);
db.album = require('../models/album.js')(sequelize, Sequelize);
db.artist = require('../models/artist.js')(sequelize, Sequelize);
db.playlist_song = require('../models/playlist_song.js')(sequelize, Sequelize);
db.playlist = require('../models/playlist.js')(sequelize, Sequelize);
db.song = require('../models/song.js')(sequelize, Sequelize);
db.user = require('../models/user.js')(sequelize, Sequelize);

//Relations
// ===> n-m relationships
db.artist.hasMany(db.album_artist, { onDelete: 'cascade' });
db.album_artist.belongsTo(db.artist);
db.album_artist.belongsTo(db.album);
db.album.hasMany(db.album_artist, { onDelete: 'cascade' })

db.album.hasMany(db.album_song, { onDelete: 'cascade' });
db.album_song.belongsTo(db.album);
db.album_song.belongsTo(db.song);
db.song.hasMany(db.album_song, { onDelete: 'cascade' })

db.playlist.hasMany(db.playlist_song, { onDelete: 'cascade' });
db.playlist_song.belongsTo(db.playlist);
db.playlist_song.belongsTo(db.song);
db.song.hasMany(db.playlist_song, { onDelete: 'cascade' })
//Relations
// ===> 1-n relationships
db.user.hasMany(db.playlist, { onDelete: 'cascade' });
db.playlist.belongsTo(db.user);

module.exports = db;
