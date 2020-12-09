
// 111111111111111111
let John = 80;
let Bill = 77;
let David = 68;
let Ryan = 88;
let Nick = 95;
let studentMarks = [John,Bill,David,Ryan,Nick,0];
let studentMarksName = ['John','Bill','David','Ryan','Nick','Oll Group of students'];
let balls = 0;
let provirka = false;

   for (let i = 0; i < studentMarksName.length; i++) {
   	
   	  if (i === (studentMarks.length - 1)) {provirka = true};
      if (provirka === true) { studentMarks[i] = balls / (studentMarks.length - 1);}
      

      if ((studentMarks[i] <= 60) && (studentMarks[i] > 0 )) { console.log('The mark of ' + studentMarksName[i] + ' is F')}
      if ((studentMarks[i] <= 70) && (studentMarks[i] > 60)) { console.log('The mark of ' + studentMarksName[i] + ' is D')}
      if ((studentMarks[i] <= 80) && (studentMarks[i] > 70)) { console.log('The mark of ' + studentMarksName[i] + ' is C')}
      if ((studentMarks[i] <= 90) && (studentMarks[i] > 80)) { console.log('The mark of ' + studentMarksName[i] + ' is B')}
      if ((studentMarks[i] <= 100) && (studentMarks[i] > 90)) { console.log('The mark of ' + studentMarksName[i] + ' is A')}
     		balls +=  studentMarks[i];
      }


// 222222222222222


let sumaMultiples = 0; 
for (let i = 0; i <=1000; i++)
{
  if (i % 3 == 0 || i % 5 ==0) { sumaMultiples += i}
}
console.log(sumaMultiples);

/// 33333333333333333

for (let i = 5; i > 0; i--) {
   for (let j = i; j < 6; j++) {
     document.write('*');
   }
 document.write('<br>');
}
