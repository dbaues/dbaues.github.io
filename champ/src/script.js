/**
 * Random Champ Picker
 * @author Dan Bauer
 * @version 2.1.0
 *
 * Version 2 implements jQuery and JSON to allow for a more scalable
 * and feature packed version of the Paladins Champ Picker.
 */


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
        let args = Array.prototype.slice.call(arguments, 1);
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
 * Link to cooler images.
 * https://webcdn.hirezstudios.com/paladins/assets/carousel/furia.png
 * @param arr array of champs in JSON format.
 */
function randomizeChamp(arr) {
    let champ_json = arr[getRandomInt(arr.length)];
    let URL = "https://webcdn.hirezstudios.com/paladins/assets/carousel/{0}.png"

    // Animates the name as it gets modified.
    let name_line = document.getElementById("p_test");
    name_line.classList.remove('champ_name');
    void name_line.offsetWidth;
    name_line.innerHTML = champ_json["alt"];
    name_line.classList.add('champ_name');

    // Loads the correct image for the champion.
    document.getElementById("champ_image").src = String.format(URL, champ_json["name"]);
    document.getElementById("talent_1").innerHTML = champ_json["talents"][0][0];
    console.log(champ_json["talents"][0]);
}

/**
 * Grabs the JSON formatted champions out of the champs.json file.
 * https://code-maven.com/javascript-on-github-pages
 */
function getChamps() {
    $().ready(function() {
        $.getJSON( "src/data/champ_data.json", function(data) {
            let arr = data["champs"];
            randomizeChamp(arr);
        });
    });
}
