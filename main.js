import path from "path";
import fs from "fs";

const args = process.argv;
const key = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

function main() {

    let inputFilePath = path.join(process.cwd(), args[2]);
    let outputFilePath = path.join(process.cwd(), args[3]);
    
    let outputToConsole = false;
    if (args.includes("--output") || args.includes("-o")) {
        outputToConsole = true;
    }

    try {
        let inputFile = fs.readFileSync(inputFilePath, "utf8");

        let outputFile = decode(inputFile);
        
        if (outputToConsole === true) {
            console.log(outputFile);
        }
        fs.writeFileSync(outputFilePath, outputFile, "utf8");
        

    } catch (err) {
        console.error(err);
    }
}


function decode(input) {
    let output = "";

    for(let i = 0; i < input.length; i = i+2){
        let decoded = decodeCharacterPair(input[i] + input [i+1]);

        if (decoded === false) { // If the character is not a number set the output to the raw input and decrease the count by one so that it doesn't skip the next character.
            decoded = input[i];
            i = i-1;
        }
        output = output + decoded;
    }

    return output;
}


function decodeCharacterPair(input) {
    switch (input) {
        case "00":
            return key[0];
            break;

        case "01":
            return key[1];
            break;
            
        case "02":
            return key[2];
            break;
            
        case "03":
            return key[3];
            break;
            
        case "04":
            return key[4];
            break;
            
        case "05":
            return key[5];
            break;
            
        case "06":
            return key[6];
            break;
            
        case "07":
            return key[7];
            break;
            
        case "08":
            return key[8];
            break;
            
        case "09":
            return key[9];
            break;
            
        case "10":
            return key[10];
            break;
            
        case "11":
            return key[11];
            break;
            
        case "12":
            return key[12];
            break;
            
        case "13":
            return key[13];
            break;
            
        case "14":
            return key[14];
            break;
            
        case "15":
            return key[15];
            break;
            
        case "16":
            return key[16];
            break;
            
        case "17":
            return key[17];
            break;
            
        case "18":
            return key[18];
            break;
            
        case "19":
            return key[19];
            break;
            
        case "20":
            return key[20];
            break;
            
        case "21":
            return key[21];
            break;
            
        case "22":
            return key[22];
            break;
            
        case "23":
            return key[23];
            break;
            
        case "24":
            return key[24];
            break;
            
        case "25":
            return key[25];
            break;
            
        case "26":
            return key[26];
            break;

        default:
            return false;
            break;
    }
}


main();