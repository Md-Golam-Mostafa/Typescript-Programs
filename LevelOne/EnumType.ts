// enum -> store constants; duplicate value is not allowed here

// enum three types: 1.numeric, 2.string,3.heterogeneous.

// numeric enum
enum RequestType {
    ReadData = 9,
    SaveData,
    DeleteData,
}

// console.log(RequestType);
// console.log(RequestType.ReadData);
// console.log(RequestType["ReadData"]);

// // String enum
enum StringEnumRequest {
    ReadData = "ReadData",
    SaveData = "SaveData",
    DeleteData = "DeleteData",
}

// console.log(StringEnumRequest);
// console.log(StringEnumRequest.ReadData);
// console.log(StringEnumRequest["ReadData"]);

// // heterogeneous Enum
enum heterogeneousEnumRequest {
    ReadData = "ReadData",
    SaveData = "SaveData",
    studentId = 120,
}

console.log(heterogeneousEnumRequest);