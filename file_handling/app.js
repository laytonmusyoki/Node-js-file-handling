const fs=require('fs');


// reading file
fs.readFile('index.html',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
        fs.writeFile('doc.txt',data,()=>{
            console.log('added');
        });
    }
});



// creating and deleting folders
if(!fs.existsSync('views')){
    fs.mkdir('views',(err)=>{
        if(err){
            console.log(err);
        }
        {
            console.log('created');
        }
    });
}
else{
    fs.rmdir('views',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('removed');
        }
    });
}


// deleting existing files
if(fs.existsSync('docs.txt')){
    fs.unlink('docs.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('removed');
        }
    });
}
