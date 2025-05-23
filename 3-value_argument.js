let args = process.argv.slice(2);
let i = 0;
for (i in args);
if (i === 0){
    console.log('No argument');
}
else{
    for (const fruit of args) {
        console.log(fruit);
    }
}