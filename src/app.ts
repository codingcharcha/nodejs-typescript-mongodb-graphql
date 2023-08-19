import express, { Application } from 'express'
import { APPCONFIG } from './config';
import { connect } from './dbconnect';
import productCategoryRoutes from '../src/routes/product_category';
const app:Application = express();
const PORT = APPCONFIG.PORT;

connect()

app.use(express.json());

app.use('/api/product_category',productCategoryRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})


