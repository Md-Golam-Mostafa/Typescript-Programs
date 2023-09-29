let studentId: (string | number | boolean);

studentId = "120";
studentId = 120;
studentId = true;

function displayStudentInfo(studentId:string|number|boolean) {
    console.log(studentId);
}

displayStudentInfo("123")
displayStudentInfo(123)
displayStudentInfo(true)