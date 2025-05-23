let args = process.argv.slice(2);

    
function factorial(num){
    if (args.length === 0)
        return 1;
    if(num == 1)
        return num;
    return num * factorial(num-1);
}

console.log(factorial(args[0]));