let args = process.argv.slice(2);
let i = 0;
for (i in args);
if (i === 0){
    console.log('No argument');
}
else{
    for (const arg in args){
        console.log(arg);
    }
}