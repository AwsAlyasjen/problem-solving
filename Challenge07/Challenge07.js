"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'Jaber',
//      lastName: 'Saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is ** ** I am ** YO, and I love **.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------

const objLat = (obj) => {
 exercise03
    // write your code here
 main
    var firstName = obj.firstName[0].toUpperCase() + obj.firstName.slice(1, obj.firstName.length);
    var lastName = obj.lastName[0].toUpperCase() + obj.lastName.slice(1, obj.lastName.length);

    return `my name is ${firstName} ${lastName} I am ${obj.age} YO, and I love ${obj.hobby}.`;
};

// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// ------------------------
const cvFormatter = (arr) => {
    let data = [];

    for (let i = 0; i < arr.length; i++) {
 exercise03
        const betaData = arr[i];
        if (betaData.yearsOfExperience > 1) {
            var fullName = "";

            if (betaData.firstName && betaData.firstName !== "null")
                fullName = betaData.firstName;

            if (betaData.lastName && betaData.lastName !== "null") {
                if (betaData.firstName && betaData.firstName !== "null")
                    fullName += " ";
                fullName += betaData.lastName;

        const newData = arr[i];
        if (newData.yearsOfExperience > 1) {
            var fullName = "";

            if (newData.firstName && newData.firstName !== "null")
                fullName = newData.firstName;

            if (newData.lastName && newData.lastName !== "null") {
                if (newData.firstName && newData.firstName !== "null")
                    fullName += " ";
                fullName += newData.lastName;
 main
            }

            data.push({
                fullName: fullName,
 exercise03
                tech: betaData.tech

                tech: newData.tech
              main
            });
        }
    }

    return data;
};

// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have one year or less of Experience

// ------------------------
const applicationsStatics = (arr) => {
    let result = {
        python_Devs: 0,
        javaScript_Devs: 0,
        dotNet_Devs: 0,
        java_Devs: 0,
        totalApplicants: 0,
        rejectedApplicants: 0,
    }

    for (let i = 0; i < arr.length; i++) {
 exercise03
        const alphaData = arr[i];
        if (alphaData.tech === "Python") {
            result.python_Devs++;
        }
        else if (alphaData.tech === "JS") {
            result.javaScript_Devs++;
        }

        else if (alphaData.tech === ".Net") {
            result.dotNet_Devs++;
        }
        else if (alphaData.tech === "Java") {
            result.java_Devs++;
        }

        if (alphaData.yearsOfExperience <= 1 ||
             (alphaData.firstName == "null" ||
              alphaData.firstName == "") && 
              (alphaData.lastName ==
            "null" || alphaData.lastName == "")) {

        const data = arr[i];
        if (data.tech === "Python") {
            result.python_Devs++;
        }
        else if (data.tech === "JS") {
            result.javaScript_Devs++;
        }

        else if (data.tech === ".Net") {
            result.dotNet_Devs++;
        }
        else if (data.tech === "Java") {
            result.java_Devs++;
        }

        if (data.yearsOfExperience <= 1 || (data.firstName == "null" || data.firstName == "") && (data.lastName ==
            "null" || data.lastName == "")) {
 main
            result.rejectedApplicants++

        }
        result.totalApplicants++
    }
    return result;
 exercise03

};

// 4) ---------------------
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  EX:

let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
 main
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    for (let i = 0; i < data.grades.length; i++) {
 exercise03
        const marks = data.grades[i];
    for (let j = 0; j < marks.classes.length; j++) {
        let sum = 0;   
        const newMarks = marks.classes[j];
          

            for (let x = 0; x < newMarks.classScores.length; x++)
                sum += newMarks.classScores[x];
            newMarks.avg = Math.floor(sum / newMarks.classScores.length);

        const newGrades = data.grades[i];
        for (let j = 0; j < newGrades.classes.length; j++) {
            const calc = newGrades.classes[j];
            let sum = 0;

            for (let x = 0; x < calc.classScores.length; x++)
                sum += calc.classScores[x];
            calc.avg = Math.floor(sum / calc.classScores.length);
 main
        }
    }
    return data;
};

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };