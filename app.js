var arr = [];
arr.push(34);
console.log(arr);
var touple = ["Nazar", 35];
touple.push(34);
touple.push("dfg");
// touple.push(true)  - boolean додати не можемо
//можемо додавати тількі ті типи котрі описанні в таблиці
//-------------------------ANY------------------------------
// використовуємо для міграції з старого коду JS на TS
var xxx;
xxx = "Nazar";
xxx = 3;
xxx = {};
xxx = function () { };
var xero = xxx;
xxx.age;
xxx();
//----------FUNCTION---------------
function sum(a, b) {
    return (a + b);
}
var bar = sum(10, 10);
console.log(bar);
var suma = function (a, b) { return a + b; };
//------------UNION TYPE-----------------
var ux;
ux = 5;
ux = "h";
var uz;
var f = function (x) {
    return "";
};
//--------------VALUE_SET--------------
var flagIsSet;
var myName;
var age;
var someVar;
var anotherFlag;
var dice;
dice = 5;
// dice = 8;   --- не можемо приписати до змінної 8, бо її не має в закресі чисел які можемо приписати
var yName;
yName = "Nazar";
// yName = "Viktor";
console.log(yName);
//---------------TYPE_CHECK----------
{
    var logical = true;
    var age_1 = 3;
    var name_1 = "nazar";
    if (typeof age_1 === "number") {
        console.log("age is number");
    }
    var something = void 0;
    if (typeof something === "string") {
        something.length;
    }
    else if (typeof something === "number") {
    }
    else if (typeof something === "function") {
        something();
    }
}
// --------------VOID--------------------
function printText(text) {
    console.log(text);
}
// let person : void = undefined;  ---- брак вартсті
//-----------------UNKNOWN----------------
{
    var xxx_1;
    xxx_1 = "Nazar";
    xxx_1 = 3;
    xxx_1 = {};
    xxx_1 = function () { };
    var xero_1 = xxx_1;
    xxx_1.age;
    xxx_1();
    if (typeof xxx_1 === "number") {
        var xage = xxx_1;
    }
    ;
    if (typeof xxx_1 === "object" && xxx_1 !== null) {
        if (xxx_1.age !== undefined) {
        }
        ;
    }
    ;
    if (typeof xxx_1 === "function") {
        xxx_1();
    }
    ;
}
;
