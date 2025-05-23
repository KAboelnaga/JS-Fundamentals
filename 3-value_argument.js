let args = process.argv.slice(2);
let i = 0;
let str = '';
for (i in args);
if (i === 0){
    console.log('No argument');
}
else{
    for (const fruit of args) {
        str += fruit + ' ';
    }
    console.log(str.slice(0,-1));
}