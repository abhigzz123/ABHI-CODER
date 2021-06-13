//STRING PRACTICE
x = 'Name_xyz_abc' ;
console.log(x[0]) ;
console.log(x.length) ;

// STRING METHODS

console.log(x.toUpperCase()) ;
console.log(x.toLowerCase()) ;
console.log(x.indexOf('_') ) ;
console.log(x.lastIndexOf('_')) ;

//slicing
console.log(x.slice(0, 2)) ;
console.log(x.substr(0 ,5)) ;
console.log(x.replace('Name' , 'NO_NAME')) ;

// template string
likes = 245 ;
console.log('THIS IS THE NUMBER OF LIKES YOUR POST HAS = ' + likes) ;

let namee = 'Abhigyan' ;
let company = 'FKI' ;
let profile = 'SDET' ;

console.log(`${namee} has been selected in ${company} as a full time ${profile}`) ;

//HTML TEMPLATES
let html = `
    <h2> NAME OF EMPLOYEE IS ${namee}</h2>
    <p> COMPANY NAME is ${company} </p>
    <span> FULL TIME ${profile} </span>`;

console.log(html) ;    