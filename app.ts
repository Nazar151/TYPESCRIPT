let arr : number [] = [];

arr.push(34);

console.log(arr);

const touple : [string, number] = ["Nazar", 35];

touple.push(34);
touple.push("dfg");
// touple.push(true)  - boolean додати не можемо
//можемо додавати тількі ті типи котрі описанні в таблиці

//-------------------------ANY------------------------------
// використовуємо для міграції з старого коду JS на TS
let xxx : any;
xxx = "Nazar";
xxx = 3;
xxx = {};
xxx = () => {};

let xero : number = xxx;
xxx.age;
xxx();

//----------FUNCTION---------------

function sum(a : number, b : number) : number {
    return (a + b);
}
let bar = sum(10, 10);
console.log(bar);

const suma = (a : number, b : number) => a + b;

//------------UNION TYPE-----------------

let ux : string | number;

ux = 5;
ux = "h"

let uz : string | number | boolean;

const f = (x : string | boolean) : number | string => {
    return "";
}

//--------------VALUE_SET--------------

let flagIsSet : boolean;
let myName : string;
let age : number;

let someVar : string | number;

let anotherFlag : true | false;

let dice : 1 | 2 | 3 | 4 | 5 | 6 ;
dice = 5;
// dice = 8;   --- не можемо приписати до змінної 8, бо її не має в закресі чисел які можемо приписати
let yName : "Nazar" | "Illia" | "Alex";

yName = "Nazar";
// yName = "Viktor";
console.log(yName);


//---------------TYPE_CHECK----------
{
    let logical: boolean = true;
    let age: number = 3;
    let name: string = "nazar";

    if (typeof age === "number") {
        console.log("age is number")
    }

    let something: any;
    if (typeof something === "string") {
        something.length;
    } else if (typeof something === "number") {
    } else if (typeof something === "function") {
        something();

    }
    }

    // --------------VOID--------------------


function printText(text : string) : void {
    console.log(text);
}

// let person : void = undefined;  ---- брак вартсті

//-----------------UNKNOWN----------------
{
    let xxx: any;
    xxx = "Nazar";
    xxx = 3;
    xxx = {};
    xxx = () => {};

    let xero: number = xxx;
    xxx.age;
    xxx();

    if(typeof xxx === "number") {
        let xero : number = xxx;
    };

    if(typeof xxx === "object" && xxx !== null) {
        if ((xxx as { age: number }).age !== undefined) {
        };
    };

   if(typeof  xxx === "function"){
       xxx();
   };
};




