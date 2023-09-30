// enum -> store constants; duplicate value is not allowed here
// enum three types: 1.numeric, 2.string,3.heterogeneous.
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 9] = "ReadData";
    RequestType[RequestType["SaveData"] = 10] = "SaveData";
    RequestType[RequestType["DeleteData"] = 11] = "DeleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.ReadData);
// console.log(RequestType["ReadData"]);
// // String enum
var StringEnumRequest;
(function (StringEnumRequest) {
    StringEnumRequest["ReadData"] = "ReadData";
    StringEnumRequest["SaveData"] = "SaveData";
    StringEnumRequest["DeleteData"] = "DeleteData";
})(StringEnumRequest || (StringEnumRequest = {}));
// console.log(StringEnumRequest);
// console.log(StringEnumRequest.ReadData);
// console.log(StringEnumRequest["ReadData"]);
// // heterogeneous Enum
var heterogeneousEnumRequest;
(function (heterogeneousEnumRequest) {
    heterogeneousEnumRequest["ReadData"] = "ReadData";
    heterogeneousEnumRequest["SaveData"] = "SaveData";
    heterogeneousEnumRequest[heterogeneousEnumRequest["studentId"] = 120] = "studentId";
})(heterogeneousEnumRequest || (heterogeneousEnumRequest = {}));
console.log(heterogeneousEnumRequest);
