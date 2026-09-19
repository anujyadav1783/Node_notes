const fs=require('fs')
const op=process.argv[2]
if(op=='write'){
    const name=process.argv[3];
    const content=process.argv[4];
    fs.writeFileSync(name,content);

}
else if(op=='read'){
    const name=process.argv[3];
    const data= fs.readFileSync(name,'utf-8');
    console.log(data)
}
else if(op=='update'){
         const name=process.argv[3];
         const content=process.argv[4];
         const data=fs.appendFileSync(name,content);
         console.log("content is added for you ");
}
else if(op=='delete'){
    const name=process.argv[3]
    fs.unlinkSync(name);
}
else{
    console.log("operation not found")
}