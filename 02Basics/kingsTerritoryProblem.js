
//Kings Problem

//let king = 'John'

if (true) {
    //let king = 'Sam'

    if(true)
    {
        // let king = 'Nandi'
        king = 'Ram' //Global everywhere leaking of information
        console.log(king);
    }
}

if(true)
{
    console.log(" I am second part : "+king);
}