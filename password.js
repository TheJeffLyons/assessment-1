console.log(`Welcome to Jeff's Password Validator`)
const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})
reader.question("please create a password", function(input){tokens = input.split(``)

password = tokens[10]
input.length = 10

if(input.length >= 10){
    console.log(`great`)

}else if(input.length < 10){
    console.log(`not good`)
}
})

reader.close
