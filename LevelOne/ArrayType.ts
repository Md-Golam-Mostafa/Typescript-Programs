// let studentNames: string[];
let studentNames : Array<string>;

studentNames = ["Sadap","Rohan","Anas"];

console.log(studentNames[0]);

studentNames.sort();

console.log(studentNames);
studentNames.map((studentName,index) =>(
    console.log(index,"--",studentName)
))

// using Union 
let multipleTypes :(string|number|boolean)[];

multipleTypes = [123,'Mostafa',true,]
