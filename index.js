  const arrOne = [11, 12, 13]; 
  const arrTwo = [11, 12, 14];
  const arrThree = arrOne.concat(arrTwo.filter(function task1(item) {
    return arrOne.indexOf(item) < 0;
}));
  console.log('task1', arrThree) 


 let arrTask2 = [5,4,6,8,1,5,1] 
  function task2() {
      arrTask2.sort((a, b) => b - a);
    let arrNewTask2 = arrTask2.filter((v, i, f) => {
          return(
             f.indexOf(v) === i    
          )})
        return arrNewTask2
  }
  console.log('task2', task2(arrTask2))

      const arrTask3 = [undefined,2,0,1,false,'  ',3,null]
      const arrNewTask3 = []
      function task3(item) {
       arrTask3.forEach((item) => { 
         if(!!item){
           arrNewTask3.push(item)
         }
       })
   }
 console.log('task3', task3(arrTask3))
    
            
 const arrTask4 = [1,1,2,3,3,5]
 let arrNewTask4 = []             
 console.log('task4', arrTask4.filter(el => arrTask4.indexOf(arrTask4[el]) === arrTask4.lastIndexOf(arrTask4[el]) ? arrNewTask4.push(arrTask4[el]) : el.pop)) 
                   
         
const arrTask5 = [123,0,0,321];
function task5() {
      let sum = 0; for (let i = 0; i < arrTask5.length; i++) { sum += arrTask5[i]; }
            return sum
      }
  console.log('task5', task5(arrTask5)) 


  const arrTask6 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
   function task6() {
        let arrNewTask6 = arrTask6.sort((a, b) => b - a)  
        return arrNewTask6          
   } 
    console.log('task 6', task6(arrTask6)) 


  const arrTask7 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  function task7() {
    const arrNewTask7 = arrTask7.join().split(',')
      return arrNewTask7
  }
  console.log('task7', task7(arrTask7))

  const arrTask8 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
   console.log('task8', arrTask8.map(el => el <= 9 ? '0' + el + ':00' : el + ':00'))
  
  const arrTask9 = [[1], 2, 3, [4], 5, 6, 7, [[8]], 9, [10], 11, [12], 13];
   function task9() {
      return arrTask9.flat(2);        
   }
  console.log('task9',task9(arrTask9))


  const arrTask10 = [[1], 2, 3, [4], 5, 6, 7, [[8]], 9, [10], 11, [12], 13];
    function task10(arrTask10) {
        let flattend = [];
        (function flat(arrTask10) {
              arrTask10.forEach(function(el) {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
         });
        })(arrTask10);
      
        return flattend;
      }
//     /*  const flatten = (arrTask10) => {
//       const result = [];
//       arrTask10.forEach((i) => {
//         if (Array.isArray(i)) {
//           result.push(...flatten(i));
//         } else {
//           result.push(i);
//         }
//       });
//       return result;
//     } */
    
 console.log('task10',task10(arrTask10))

 const arrTask11 = ["1", "2", "3", "4", "5"];
  function task11() {
       return arrTask11.map(function (x) { return x * 1; }
       )};
    console.log('task11', task11(arrTask11))


 const arrTask12 = ["1", "2", "3", "4", "5"];
  function task12() {
       return arrTask12.map((num) => num * num);
 }
 console.log('task12', task12(arrTask12))

 



  
