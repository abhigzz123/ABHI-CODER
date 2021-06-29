let a = 4 ;

for(let i = 0 ;i <a ; i++)
console.log('THE VALUS IS =' ,i) ;
 s = '123' ;
 s= Array(s) ; 
console.log(s) ;
// FUNCTIONS DEFINITION
function display()
{
    console.log('12345678910') ;
}

// function expression
const speak = function()
{
    console.log("HAVE A NICE DAY") ;
}
speak() ;

//ARROW FUNCTION
const funky = (name , sname) =>
{
    console.log( `${name} ${sname}`) ;
};

const language = lang => lang ;

funky('Virat' , 'Kohli') ;

laggy = language('German') ;
console.log(laggy) ;