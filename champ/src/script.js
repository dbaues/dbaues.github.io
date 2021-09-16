// Link to cooler images.
// https://webcdn.hirezstudios.com/paladins/assets/carousel/furia.png

/**
 * Using Math.random, picks a random number between 0 and max.
 * @param max maximum number to be generated.
 * @returns {number} representing the randomly generated choice.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Functions as String.format as in other languages.
 * Checks to see if exists first.
 * Courtesy of StackOverflow
 * https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 */
if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

/**
 * Picks a random champion from list and displays it.
 * @param arr array of champs in JSON format.
 */
function randomizeChamp(arr) {
    let champ_json = arr[getRandomInt(arr.length)];
    let URL = "https://webcdn.hirezstudios.com/paladins/assets/carousel/{0}.png"

    document.getElementById("p_test").innerHTML = champ_json["alt"];
    document.getElementById("champ_image").src = String.format(URL, champ_json["name"]);
    //document.getElementById("champ_image").src = "".concat("https://webcdn.hirezstudios.com/paladins/assets/carousel/", champ_json["name"], ".png");
}

/**
 * Grabs the JSON formatted champions out of the champs.json file.
 * https://code-maven.com/javascript-on-github-pages
 */
function getChamps() {
    $().ready(function() {
        $.getJSON( "src/data/champs.json", function(data) {
            let arr = data["champs"];
            randomizeChamp(arr);
            //$("#text").html("<i>"+arr[getRandomInt(arr.length)]["alt"]+"</i>");
        });
    });
}
