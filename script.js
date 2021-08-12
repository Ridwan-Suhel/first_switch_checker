//digit speller

var num = prompt("Enter 0-9 number for spelling");

switch(num){
    case "0":
        document.write("Zero");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Four");
        break;
    case "5":
        document.write("Five");
        break;
    case "6":
        document.write("Six");
        break;
    case "7":
        document.write("Seven");
        break;
    case "8":
        document.write("Eight");
        break;
    case "9":
        document.write("Nine");
        break;
    default:
        document.write("Undifined Number");
}

document.write("<br/><br/>");
//vowel and consonant checker using switch

var letter = prompt("Enter Only a letter to check Vowel or Consonant: ");
var letter = letter.toLowerCase();
switch(letter){

    case "a":
        document.write(letter + " is Vowel");
        break;
    case "e":
        document.write(letter + " is Vowel");
        break;
    case "i":
        document.write(letter + " is Vowel");
        break;
    case "o":
        document.write(letter + " is Vowel");
        break;
    case "u":
        document.write(letter + " is Vowel");
        break;
    default:
        document.write(letter + " is consonant");

}

document.write("<br/><br/>");
//fruit spell checker
var fruitName = prompt("Enter Your fruit name to check you are correct or wrong: ");
var fruitName = fruitName.toLowerCase();
var fruitNameStyle = fruitName.bold();
switch(fruitName){
    case "apple":
    case "banana":
    case "pineapple":
    case "jackfruit":
    case "orange":
    case "watermelon":
    case "cherry":
    case "strawberry":
    case "grape":
    case "lemon":
    case "mango":
    case "coconut":
        document.write(fruitNameStyle + " is Correct spelling");
        break;
    default:
        document.write("Wrong spelling OR we don\'t know " + fruitNameStyle + " is a valid Fruit name");
}















