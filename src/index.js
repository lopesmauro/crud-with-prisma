import express from 'express' 
import userRoutes from './routes/userRoutes'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});