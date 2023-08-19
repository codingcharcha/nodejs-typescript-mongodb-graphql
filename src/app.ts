import express, { Application } from 'express'
import { APPCONFIG } from './config';
import { connect } from './dbconnect';
const app:Application = express();
const PORT = APPCONFIG.PORT;

connect()

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})


