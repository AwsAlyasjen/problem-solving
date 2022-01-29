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
    // write your code here
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
        const betaData = arr[i];
        if (betaData.yearsOfExperience > 1) {
            var fullName = "";

            if (betaData.firstName && betaData.firstName !== "null")
                fullName = betaData.firstName;

            if (betaData.lastName && betaData.lastName !== "null") {
                if (betaData.firstName && betaData.firstName !== "null")
                    fullName += " ";
                fullName += betaData.lastName;
            }

            data.push({
                fullName: fullName,
                tech: betaData.tech
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
            result.rejectedApplicants++

        }
        result.totalApplicants++
    }
    return result;
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    for (let i = 0; i < data.grades.length; i++) {
        const marks = data.grades[i];
    for (let j = 0; j < marks.classes.length; j++) {
        let sum = 0;   
        const newMarks = marks.classes[j];
          

            for (let x = 0; x < newMarks.classScores.length; x++)
                sum += newMarks.classScores[x];
            newMarks.avg = Math.floor(sum / newMarks.classScores.length);
        }
    }
    return data;
};

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };