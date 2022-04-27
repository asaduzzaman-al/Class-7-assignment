

/** 
 * Total Admnission fees
*/ 

let total_ad_fees = 0;
for ( data of student){
    console.log(` Name  : ${data.name}---------------------------->Admission Fess : ${data.admission_fees}`);
    total_ad_fees += data.admission_fees; 
}
console.log(`
-----------------------------------------------------------------------------------
     Total Admission Fees : ${total_ad_fees}

`);

/**
 * Find All Female Students
 */


// student.map((data, index) => {
//     if(data.gender === "Female"){
//             console.log(`
//                 Id  :  ${index + 1}
//                 Name  : ${data.name}
//                 Roll  : ${data.roll}
//                 Age   : ${data.age}
//                 Class  : ${data.classname}
//                 Gender  : ${data.gender}
//                 Location  : ${data.location}
//                 Admission Fees  : ${data.admission_fees}

        
//         `);
//     }
// });

// student.map((data, index) => {
//     if(data.classname === "Eleven" || data.classname === "Five"){
//             console.log(`
//                 Id  :  ${index + 1}
//                 Name  : ${data.name}
//                 Roll  : ${data.roll}
//                 Age   : ${data.age}
//                 Class  : ${data.classname}
//                 Gender  : ${data.gender}
//                 Location  : ${data.location}
//                 Admission Fees  : ${data.admission_fees}

        
//         `);
//     }
// });


/**
 *  Location wise student result
 */


// student.map((data, index) => {
//     if(data.location === "Uttora" || data.location === "Mirpur"){
//             console.log(`
//                 Id  :  ${index + 1}
//                 Name  : ${data.name}
//                 Roll  : ${data.roll}
//                 Age   : ${data.age}
//                 Class  : ${data.classname}
//                 Gender  : ${data.gender}
//                 Location  : ${data.location}
//                 Admission Fees  : ${data.admission_fees}

        
//         `);
//     }
// });


/**
 *  find student between 10 - 25 age
 */

//  student.sort().map((data, index) => {
//     if(data.age === 10 || data.age === 11 || data.age === 12 || data.age === 13 || data.age === 14 || data.age === 15 || data.age === 16 || data.age === 17 || data.age === 18 || data.age === 19 || data.age === 20 || data.age === 21 || data.age === 22 || data.age === 23 || data.age === 24 || data.age === 25){
//             console.log(`
//                 Id  :  ${index + 1}
//                 Name  : ${data.name}
//                 Roll  : ${data.roll}
//                 Age   : ${data.age}
//                 Class  : ${data.classname}
//                 Gender  : ${data.gender}
//                 Location  : ${data.location}
//                 Admission Fees  : ${data.admission_fees}

        
//         `);
//     }
// });