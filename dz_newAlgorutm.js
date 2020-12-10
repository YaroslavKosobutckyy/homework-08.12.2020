
// В завданні 1 трошки доробив алгоритм, нетреба в масиви добавляти нульові елементи на початку алгоритму
let John = 80;
let Bill = 77;
let David = 68;
let Ryan = 88;
let Nick = 95;
let studentMarks = [John,Bill,David,Ryan,Nick];
let studentMarksName = ['John','Bill','David','Ryan','Nick'];

let balls = 0;
let provirka = false;

let arrayLn = studentMarksName.length;

   for (let i = 0; i <= arrayLn; i++) {
   	
   	  if (i === (studentMarksName.length)) {provirka = true;}

   	  console.log(i);
       if (provirka === true) { 
       							console.log(balls);
       							studentMarksName.push("All Group of students");
      							studentMarks.push(balls / arrayLn);
      							console.log(studentMarks[i], studentMarksName[i]);
        						}
      

      if ((studentMarks[i] <= 60) && (studentMarks[i] > 0 )) { console.log('The mark of ' + studentMarksName[i] + ' is F')}
      if ((studentMarks[i] <= 70) && (studentMarks[i] > 60)) { console.log('The mark of ' + studentMarksName[i] + ' is D')}
      if ((studentMarks[i] <= 80) && (studentMarks[i] > 70)) { console.log('The mark of ' + studentMarksName[i] + ' is C')}
      if ((studentMarks[i] <= 90) && (studentMarks[i] > 80)) { console.log('The mark of ' + studentMarksName[i] + ' is B')}
      if ((studentMarks[i] <= 100) && (studentMarks[i] > 90)) { console.log('The mark of ' + studentMarksName[i] + ' is A')}
     		
     	if (provirka === false) { balls +=  studentMarks[i];}

      }

