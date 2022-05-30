const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("DB_CONNECTION"))
.catch(()=> console.log("ERROR"))
module.exports = mongoose.connection;