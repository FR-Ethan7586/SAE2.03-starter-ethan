let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.request = async function(){
    let answer = await fetch(HOST_URL + "/sae2.03-MMI-lochis1/server/script.php?todo=read"); 
        let data = await answer.json();
        return data;
    }

export { DataMovie };