// Link to cooler images.
// https://webcdn.hirezstudios.com/paladins/assets/carousel/furia.png


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizeChamp() {
    let champ = champions[getRandomInt(champions.length)];

    /*
    let champ_name_edit = "";

    // Special names: Bomb King, Sha Lin, Mal'Damba
    if(champ.contains("bomb-king") || champ.contains("sha-lin")){
        champ_name_edit = champ.replace('-', ' ');
        //champ_name_edit = "".concat(champ.substr(0,1).toUpperCase(), champ.substring(1,champ.length));
    }
    else if(champ.contains("maldamba")){
        champ_name_edit = "".concat(champ.substr(0,1).toUpperCase(),
                        champ.substr(1,2), '\'', champ.substring(3,champ.length));
    }
    else
        champ_name_edit = "".concat(champ.substr(0,1).toUpperCase(), champ.substring(1,champ.length));
    */
    document.getElementById("p_test").innerHTML = "".concat(champ.substr(0,1).toUpperCase(), champ.substring(1,champ.length));
    //document.getElementById("p_test").innerHTML = champ;
    //document.getElementById("champ_image").src = "".concat("res/champion%20icons/", champ, ".jpg");

    document.getElementById("champ_image").src = "".concat("https://webcdn.hirezstudios.com/paladins/assets/carousel/", champ, ".png");
}

const champions = ["androxus", "ash", "atlas", "barik", "bomb-king", "buck", "cassie", "corvus", "dredge", "drogoz", "evie", "fernando", "furia", "grohk", "grover", "imani", "inara", "io", "jenos", "khan", "kinessa", "koga", "lex", "lian", "maeve", "makoa", "maldamba", "moji", "octavia", "pip", "raum", "rei", "ruckus", "saati", "seris", "sha-lin", "skye", "strix", "talus", "terminus", "tiberius", "torvald", "tyra", "vatu", "viktor", "vivian", "vora", "willo", "yagorath", "ying", "zhin"];
