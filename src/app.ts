import express, { Application } from 'express'
import { APPCONFIG } from './config';
import { connect } from './dbconnect';
import productCategoryRoutes from './routes/product_category';
import productRoutes from './routes/product';
const app:Application = express();
const PORT = APPCONFIG.PORT;

connect()

app.use(express.json())

app.use('/api/product_category',productCategoryRoutes);
app.use('/api/product', productRoutes);

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})


