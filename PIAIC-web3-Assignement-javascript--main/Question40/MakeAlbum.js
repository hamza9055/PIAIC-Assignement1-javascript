

function make_album(name, title, tracks) {
    let album = {
        artist_name: name,
        title: title,
        
    }
    if(tracks){
        album.tracks = tracks
     }
     return album
    
}

console.log(make_album('Zyan Malik',' nobody is listening', 11));
console.log(make_album('Strings','Duur','8'));
console.log(make_album('Coldplay','Head full of dreams'));