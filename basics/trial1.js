/*const companies =[
    {name:"Company One",category: "Finance",start:1981,end:2003},
    {name:"Company Two",category: "Retail",start:1992,end:2008},
    {name:"Company Three",category: "Auto",start:1999,end:2007},
    {name:"Company Four",category: "Retail",start:1989,end:2010},
    {name:"Company Five",category: "Technology",start:2009,end:2014},
    {name:"Company Six",category: "Finance",start:1987,end:2010},
    {name:"Company Seven",category: "Auto",start:1986,end:1996},
    {name:"Company Eight",category: "Technology",start:2011,end:2016},
    {name:"Company nine ",category: "Retail",start:1981,end:1989},
];
     //for
     
const age =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

    for( i=0 ; i< companies.length ; i++ ){
      console.log(companies[i]);
 }

    //for each 

    companies.forEach(function(company){
       console.log(company.name);
    });

     //filter

   const eightiescompanies = companies.filter(company => (company.start >=1980 && company.start <1990));
   console.log(eightiescompanies);

   const latestTenYears= companies.filter(company =>(company.end - company.start >=10));
   console.log(latestTenYears);

   //map
      
   const people =[
       {id:1,first_name:"Magesh",last_name:"Kumar"},
       {id:2,first_name:"Gowri",last_name:"Perumal"},
       {id:3,first_name:"Anupama",last_name:"Krishnan"}
   ]
 let final=people.map(function(val){
     let fullname=[val.first_name,val.last_name].join(" ");
     let obj={fullname};
     return obj;

 });
 console.log(final);

 // math

console.log(Math.PI);
   


//sort

const number =[34,12,4,65,72];
let result=number.sort();
console.log(result);



//find()

const number=[34,12,4,65,72];
let result=number.find((value)=>{
    return value > 50;
});

*/


