let args = process.argv;

if (args.at(-1) === __filename.split('/').pop()){
    console.log('No argument');
}
else{
    args = args.slice(2);
    console.log(args);
}