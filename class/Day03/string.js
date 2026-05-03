let str1 = "Harshada";
console.log(str1);
console.log(typeof(str1));

//string interpolation--` = backtick
console.log(`Hello my name is: ${str1}`);

let fname = "Rob";
console.log(`fname is: ${fname}`);

const gCount = new String("Harshada");//---new is used for creating a object
console.log(gCount.length);
console.log(gCount.toUpperCase());
console.log(gCount.toLowerCase());
console.log(gCount.charAt(2));
console.log(gCount.indexOf('s'));

//Character Access Methods
gCount.charAt(0)           // "H"
gCount.charCodeAt(0)       // 72 (ASCII value)
gCount[1]                  // "a"

//Search Methods
gCount.indexOf("i")        // 3
gCount.lastIndexOf("a")    // 1
gCount.includes("ar")     // true
gCount.startsWith("Ha")   // true
gCount.endsWith("ri")     // true

//Extracting parts of string 
gCount.slice(1, 3)         // "ar"
gCount.substring(1, 3)    // "ar"
gCount.substr(1, 2)       // "ar" (deprecated)

//Replace methods
gCount.replace("H", "B")          // "Bari"
gCount.replaceAll("a", "A")       // "HArI"

//Split & Join
gCount.split("")           // ["H", "a", "r", "i"]
gCount.split("a")          // ["H", "ri"]

//Trim methods 
const name = "  Hari  ";
name.trim()                // "Hari"
name.trimStart()           // "Hari  "
name.trimEnd()             // "  Hari"

//Padding methods
gCount.padStart(6, "*")    // "**Hari"
gCount.padEnd(6, "*")      // "Hari**"

//Repeat methods
gCount.repeat(3)           // "HariHariHari"

//Comparison Methods
gCount.localeCompare("Hari")    // 0
gCount.localeCompare("Aari")    // 1
gCount.localeCompare("Zari")    // -1

//Conversion methods
gCount.toString()          // "Hari"
String.fromCharCode(72)    // "H"