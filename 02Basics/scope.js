 // var is accessible 
 
 let iAmGlobal = 'someValue';

 if (true) {
    //  let iAmLocal ='someMoreValue';
     var iAmLocal = 'someMoreValue';
     iAmGlobal = 'superMan';
     console.log(iAmGlobal);    
     console.log(iAmLocal);
 }

 console.log(iAmLocal)
 console.log(iAmGlobal)