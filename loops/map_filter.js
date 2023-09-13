const nums=[1,2,3,4,5,6,7,8,9];

// const newnums=nums.filter((item)=>item>4);
// const newnums=nums.filter((item)=>{
//     return item>4
// });
// console.log(newnums);

// const newnums=[];
// nums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num);
//     }
// })

// console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks=books.filter((book)=>{
    return book.genre==="History"
});

// console.log(userBooks);
const new1=[10,20,30,40,50,60,70,80,90];

const n1=new1.map((num)=>(num+10));
// console.log(n1);

const n2=new1.reduce((acc,currval)=>{
    // console.log(` the acc val ${acc} is for ${currval}`);
    return acc+currval;
},0);

// console.log(n2);

const shoppingcart=[
    {
        course:"Js Course",
        price:1000
    },
    {
        course:"Python Course",
        price:1999
    },
    {
        course:"WEB dev Course",
        price:2999
    },
    {
        course:"CPP Course",
        price:1990
    },

]

const bilamount=shoppingcart.reduce((acc,item)=>{
    
    return acc +item.price;
},0)

console.log(`The Total Payment amout is ${bilamount}`);