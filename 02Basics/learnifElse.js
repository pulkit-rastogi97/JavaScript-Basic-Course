
// if(false)
// {
//     console.log('I am inside if block')
//     console.log('I am still inside the if block')
// }
// else if(true)
// {
//     console.log('CAPS BLOCK')
// }
// else{
//     console.log('I am inside Else Block')
// }



// LCO

var whoIsHere = 'teacher'
if(whoIsHere === 'user')
{
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
}else if(whoIsHere === 'teacher')
{
    console.log('Greeting message for Teacher')
    console.log('Allow access to his courses')
}else{
    console.log('MESSAGE : please verify your email')
    console.log('Send user an email for verification')
}



//Grade System

var marks = 5
if(marks === 10)
{
    console.log('Amazing')
}else if(marks === 5)
{
    console.log('Good')
}else if(marks === 3)
{
    console.log('Poor')
}
else if(marks === 0)
{
    console.log('fail')
}