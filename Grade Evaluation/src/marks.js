const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if (!math || !english || !science || !social || !language) {
            reject('Null values for marks')
        } else {
            resolve(math+english+science+social+language)
        }
        })
}

const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        if (!totalMarks) {
            reject('Null values for marks');
        } else {
            resolve (totalMarks/5);
        }
    })
}

const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       if (!averageMarks) {
        reject('Null values for marks')
       } else {
        if (averageMarks >= 90) {
            resolve('A+');
          } else if (averageMarks >= 80) {
            resolve('A');
          } else if (averageMarks >= 70) {
            resolve('B');
          } else if (averageMarks >= 60) {
            resolve('C');
          } else if (averageMarks >= 50) {
            resolve('E');
          } else if (averageMarks < 40) {
            resolve('F');
          }
       }
    })
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
