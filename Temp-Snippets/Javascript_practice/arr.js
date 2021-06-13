a = [1,2,3,4,45] ;
console.log(a) ;
console.log(a.length) ;

// array methods
str = ['a' , 'v' , 'k' , 's' , 'an' , 'ak'] ;

x = str.join(' ') ;

console.log(x) ;   
console.log(str.indexOf('k')) ; 

//xyz = a.concat(['250']) ;
//Basically append in python.
//console.log(xyz) ;

o = a.push(500) ;
p = a.pop() ;

console.log(o) ;
console.log(p) ;

//NULL AND UNDEFINED.
let l ;

console.log(l , l+10 , `THE VALUE = ${l}`) ;

l =null ;
console.log(l , l+10 , `THE VALUE = ${l}`) ;

s= 'shaun' ;
c = 'Crystal' ;

console.log(s>c) ;
cat =10 + '10' ;

cat = Number(cat) ;
//TYPEOF OPERATOR
console.log(typeof cat , cat ) ;
ui = Boolean(0) ;
console.log(ui) ;