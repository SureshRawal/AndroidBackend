const path = require('path');

module.exports ={

    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'',
        database:'college_spotter'

    
},
migrations: {
    tableName:'migrations',
    directory: path.resolve(__dirname,'./migrations'),
},
useNullAsDefault:true
};