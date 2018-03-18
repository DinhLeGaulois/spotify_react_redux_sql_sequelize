const Sequelize = require('sequelize');

const db = require("../models");

var SpotifyWebApi = require('spotify-web-api-node');

const uuidv4 = require('uuid/v4')

// // Incantations
// uuidv4();
const clientId = 'f20e61a6d38d4b269e2a0f770bb4e6db'
const clientSecret = '87121addc8044792ac1e5644e3b63fb7'

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,  // <================== Enter yours
    clientSecret: clientSecret,  // <================== Enter yours
});

spotifyApi.clientCredentialsGrant().then(data => {
    spotifyApi.setAccessToken(data.body['access_token']);
})

const Op = Sequelize.Op;

module.exports = function (app) {
    app.get('/api/myspotify/search/track/:name', (req, res) => {
        spotifyApi.searchTracks(req.params.name)
            .then(function (data) {
                //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
                // console.log("https://api.spotify.com/v1/search?q=tania+bowra&type=artist, data: " + JSON.stringify(data.body.tracks.items, null, 5))
                res.status(200).json(data.body.tracks.items)
            }, function (err) {
                res.status(400).json(err)
            });
    })

    //******************************************************************  
    //******************************************************************
    //******************************************************************
    // In case we have all the information, from the 'user' to the artist
    app.post('/api/myspotify/add', (req, res) => {
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("api-routes/add, req.body: " + JSON.stringify(req.body, null, 5))
        // db.user.findOne({
        //     where: { id: req.body.userId }
        // }).then(data => {
        //     if (data != null) { // the user had been recorded
        //         db.playlist.findOrCreate({
        //             where: {
        //                 name: req.body.playlist.name,
        //                 tags: req.body.playlist.tags,
        //                 userId: req.body.userId
        //             }
        //         }).then(data => {
        //             const playlistId = data.id;
        //             db.song.findOrCreate({
        //                 where: {
        //                     title: req.body.song.title,
        //                     description: req.body.song.description
        //                 }
        //             }).then(data => {
        //                 const songId = data.id;
        //                 db.playlist_song.findOrCreate({
        //                     where: {
        //                         playlistId: playlistId,
        //                         songId: songId
        //                     }
        //                 }).then(data => {
        //                     db.album.findOrCreate({
        //                         where: {
        //                             year: req.body.album.year,
        //                             genre: req.body.album.genre,
        //                             title: req.body.album.title,
        //                             format: req.body.album.format
        //                         }
        //                     }).then(data => {
        //                         const albumId = data.id;
        //                         db.album_song.findOrCreate({
        //                             where: {
        //                                 songId: songId,
        //                                 albumId: albumId
        //                             }
        //                         }).then(data => {
        //                             db.artist.findOrCreate({
        //                                 where: {
        //                                     name: req.body.artist.name,
        //                                     country: req.body.artist.country,
        //                                     style: req.body.artist.style
        //                                 }
        //                             }).then(data => {
        //                                 db.album_artist.findOrCreate({
        //                                     where: {
        //                                         albumId: albumId,
        //                                         artistId: data.id
        //                                     }
        //                                 })
        //                             })
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     }
        // })
    })

    app.post('/api/myspotify/signup', (req, res) => {
        db.user.findOne({
            where: {
                username: req.body.username,
                email: req.body.email
            },
            attributes: ['id']
        })
            .then(data => {
                if (data == null) { // user doesn't exist
                    db.user.create({
                        id: uuidv4(),
                        username: req.body.username,
                        email: req.body.email
                    }).then(data => {
                        res.status(200).json(data)
                    }).catch(err => res.status(400).json("Could not signup the new user! Err: " + err))
                }
                else res.status(400).json("User Exists Already!")
            })
    })

    app.post('/api/myspotify/signin', (req, res) => {
        db.user.findOne({
            where: {
                username: req.body.username,
                email: req.body.email
            },
            attributes: ['id']
        })
            .then(data => {
                if (data == null)  // user doesn't exist
                    res.status(400).json("Could not find the new user!")
                else res.status(200).json(data)
            })
    })

    app.post('/api/myspotify/add/playlist', (req, res) => {
        db.user.findOne({
            where: { id: req.body.userId },
            attributes: ['id']
        })
            .then(data => {
                if (data == null) { // user doesn't exist
                    res.status(400).json("User Doesn't Exist: No Insertion for the Playlist!")
                }
                else {
                    db.playlist.create({
                        name: req.body.name,
                        tags: req.body.tags,
                        userId: data.id
                    }).then(data => {
                        res.status(200).json(data)
                    }).catch(err => res.status(400).json("Could not Insert the Playlist! Err: " + err))
                }
            }).catch(err => { res.status(400).json("Could not Find the User! Err: " + err) })
    })

    app.get('/api/myspotify/get/playlist/:userId', (req, res) => {
        db.user.findOne({
            where: { id: req.params.userId },
            attributes: ['id']
        })
            .then(data => {
                if (data == null) { // user doesn't exist
                    res.status(400).json("User Doesn't Exist: No Insertion for the Playlist!")
                }
                else {
                    db.playlist.findAll({
                        where: { userId: data.id }
                    }).then(data => {
                        res.status(200).json(data)
                    }).catch(err => res.status(400).json("Could not Find any Playlist! Err: " + err))
                }
            }).catch(err => { res.status(400).json("Could not Find the User! Err: " + err) })
    })


    app.post('/api/myspotify/add/song', (req, res) => {
        db.song.create({
            name: req.body.name,
            tags: req.body.tags,
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })

    app.post('/api/myspotify/add/album', (req, res) => {
        db.album.findOrCreate({
            year: req.body.year,
            genre: req.body.genre,
            title: req.body.title,
            format: req.body.format
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })

    app.post('/api/myspotify/add/artist', (req, res) => {
        db.artist.findOrCreate({
            name: req.body.name,
            country: req.body.country,
            style: req.body.style
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })

    app.post('/api/myspotify/add/playlist_song', (req, res) => {
        db.playlist_song.findOrCreate({
            playlistId: req.body.playlistId,
            songId: req.body.songId
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })

    app.post('/api/myspotify/add/album_song', (req, res) => {
        db.album_song.findOrCreate({
            albumId: req.body.albumId,
            songId: req.body.songId
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })

    app.post('/api/myspotify/add/album_artist', (req, res) => {
        db.album_artist.findOrCreate({
            albumId: req.body.albumId,
            artistId: req.body.artistId
        }).then(data => {
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json("Err: " + err))
    })
}