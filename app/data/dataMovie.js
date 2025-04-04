let HOST_URL = "https://mmi.unilim.fr/~lochis1/"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.request = async function(){
    let answer = await fetch(HOST_URL + "SAE2.03-starter-ethan/server/script.php?todo=readMovies"); 
        let data = await answer.json();
        return data;
    }

export { DataMovie };