let args = process.argv.slice(2);
let flag = true

if(isNaN(parseInt(args[0]))){
    console.log('Not a number');
}
else{
    console.log('My number:', parseInt(args[0]));
}