const map=new Map();
map.set('In','India')
map.set('USD','United States of America')
map.set('Fr','France')

for (const [key,value] of map) {
    // console.log(` The value of ${key} is : ${value}`)
}

const myObj={
    name:"Pratik Guha",
    age:21,
    Gender:"Male",
    Hobbey:["Anime watch","Coding","Cricket"]
}
for (const key in myObj) {
    // console.log(`My ${key} is  ${myObj[key]}`)
}

const language=["C","C++","Python","Java","JavaScript","Ruby","php"];

language.forEach( (item)=>{
    // console.log(item)
} )

const arrayobj=[
    {
        language:"Python",
        languagefilname:"py"
    },
    {
        language:"JavaScript",
        languagefilname:"js"
    },
    {
        language:"C++",
        languagefilname:"cpp"
    }
]
arrayobj.forEach((item)=>{
    // console.log(item.languagefilname)
    console.log(item.language + " : "+item.languagefilname)
})