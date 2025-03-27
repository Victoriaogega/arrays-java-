// Question 1
let arr1 = [3, 7, 34, 90, 12];
let lastNumber = arr1.at(-1);
console.log(lastNumber);



let arr2 = [true,"green","where",12,56];
let find = arr2.at(-1);
console.log(find);

//question 2
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//question 3
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var sortedarr3 = arr3.sort();
console.log(sortedarr3);

// question 4
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let withoutduplicates = [];
let withduplicates = [];
arr.forEach((item) => {
    if (!withoutduplicates.includes(item)) {
        withoutduplicates.push(item); 
    } else if (!withduplicates.includes(item)) {
        withduplicates.push(item);
    }
});
console.log( withoutduplicates);
console.log( withduplicates);


//question 5
let arr5 = ["the", "way", "x", 4];
let search = "food";
if (arr5.includes(search)) 
    {console.log(search);}
 else {console.log("The search word was not found");}

//question 6
 let word="renniw" 
  let word1= word.split("") 
 newword=word1.sort() 
 console.log(newword.join(''))


 //question 7
 let fruits = ["kiwi","apple", "pineapple", "pear", "orange", "mango", "grape", "banana", "pawpaw",]
 let fruits2 = fruits.splice(5,0, 'Tomato');
 console.log(fruits)
