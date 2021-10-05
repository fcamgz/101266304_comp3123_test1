const fs = require('fs');

const fileModule = () => {
    const dir = './Logs';
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    for(let i = 0; i < 10; i++){
        fs.appendFile(`${dir}/log${i}`, 'Some text', (err) =>{
            if(err){
                console.log('error');
                throw err;
            }
            console.log(`File ${i} created`);
        });
    }
}

fileModule();