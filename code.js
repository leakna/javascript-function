
//exercise1
function greeting(name){
  console.log("Hello",name)
}
let name="leakna"
greeting('leakna')




//exercise2
let sum=function sumNum(num1,num2){
  return num1+num2
}
console.log(sum(1,4))


//exercise3
array=[1,2,5]
let average=(array)=>{
  let avg=0
  for(let i=0;i<array.length;i++)
    avg+=array[i]
  return avg/array.length
}
console.log(average(array).toFixed(2))

//exercise4
let bmi=function(weight,height){
  return weight / (height * height)
}
console.log(bmi(49,1.72).toFixed(2))

//exercise5
function filterObject(object){
  let newArray=[]
  object.forEach(element => {
    if(element.quantity!=0)
      newArray.push(element)
  });
  return newArray;
}
console.log(filterObject([{
  name:'milk',
  price:2,
  quantity:6
},
{
  name:'apple',
  price:2,
  quantity:0
  },

  {
    name:'pineapple',
    price:2,
    quantity:0
    }
]))


//exercise6
function checkPassword(password){
  
  if(password.length<8)
    console.log('password is weak')
  else
    console.log('password is strong')

}
checkPassword('1rtet345')

//exercise7
function countVowel(text){
  let count=0
  text.toLowerCase().split('').forEach(letter => {
    if(['a','e','i','o','u'].includes(letter))
      count++;
  });
  return count
}
console.log("Count od vowel is",countVowel('banana'))


//exericse8
function sortList(arrayNum){
  for(let i=0;i<arrayNum.length-1;i++){
    let minIndex=i
    for(let j=i+1;j<arrayNum.length;j++){
      if(arrayNum[minIndex]>arrayNum[j]){
        let temp=arrayNum[minIndex]
        arrayNum[minIndex]=arrayNum[j]
        arrayNum[j]=temp
        minIndex=j
      }
    }
  }

  }
let arr=[2,1,5,7,3,8,12];
sortList(arr)
console.log(arr)


//exercise9
function findMedian(array){
  let median=0
  sortList(array)
  let mid=Math.floor(array.length/2)
  if(array.length%2==0){
    median=(array[mid-1]+array[(mid)])/2
  }
  else{
    median=array[mid]

  }
  return median
}
console.log("Media:",findMedian([2,1,5,7,669,5,6,3]))
//exercise10
function findFactotial(num){
  let fact=1;
  if(num>1)
    for(let i=1;i<=num;i++)
      fact*=i
    return fact
  
  
}
console.log("Factorial",findFactotial(3))