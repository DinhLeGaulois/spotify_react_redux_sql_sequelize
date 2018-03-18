const extractData = (values) => {
    let result = {
        playlist: {},
        data: []
    }

    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    console.log("common/spotifyDataExtraction, userId: " + localStorage.getItem("userId"))
    for(let i=0 ; i< values.length ; i++){
        let o = values[i];
        let obj = {
            album:{
                id: o.album.id,
                image: o.album.images[2].url,
                name: o.album.name,
                type: o.album.type
            },
            artists: [],
            song:{
                id: o.id,
                name: o.name,
                type: o.type
            },
            isSelected: false
        }
        for(let j=0 ; j<o.artists.length ; j++)
            obj.artists.push({
                id: o.artists[j].id,
                name: o.artists[j].name,
                type: o.artists[j].type
            })

        result.data.push(obj);
    }
    return result;
}

export default extractData