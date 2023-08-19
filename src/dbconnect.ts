import mongoose from 'mongoose'
import { DBCONFIG } from './config'
export async function connect(){
    try{
        mongoose.connect(`mongodb+srv://${DBCONFIG.DB_USER}:${DBCONFIG.DB_PASS}@cluster0.gir7nvk.mongodb.net/${DBCONFIG.DB_NAME}?retryWrites=true&w=majority`)
        console.log(`DB Connected Successfully`);
    }catch(err:any){
        console.log(`DB Connection Failed with error - ${err.message}`);
    }
}