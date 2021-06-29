function sum(a,b)
{
    return String(a+b) ;
}

const prod = (a,b,c) => a*b*c ; 

console.log(prod(10,20,5));

people = [1 , 2 , 3 , 4, 5] ;

console.log(people) ;

people.forEach(function(individual , indiv_powe ){
    console.log(`everything is ${individual} and index is ${indiv_powe}`) ;
});
