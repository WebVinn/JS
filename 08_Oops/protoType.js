let myHeros = ["Thor", "Spiderman"]
let herosPower = {
    Thor : "Hammer",
    Spiderman : "Sling",

    getSpiderPower : function(){
console.log(`Power of spidy is: ${this.Spiderman}`);
    }
}
Object.prototype.vineet = function (){
    console.log("Vineet is present in all object");
}
// herosPower.vineet
// myHeros.vineet()

Array.prototype.heyVineet = function (){
    console.log("Vineet says Hiee!");
}
myHeros.heyVineet()


//Inheritance

const user = {
    name : "Vineet",
    Emial : "vineet@gmail.com"
}
const Teacher = {
    makeVideos : true
}
const technicalSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : false,

    // __proto__ : technicalSupport   (Old way)
}
// TASupport.__proto__ = user    (Old way)

Object.setPrototypeOf(technicalSupport, Teacher)


let  userName = "VineetSuryawanshi   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}
userName.trueLength()
"Vineeetttt   ".trueLength()