let args = process.argv.slice(2);
let i = 0;
for (i in args);
if (i === 0){
    console.log('No argument');
}
else{
    console.log(args);
}