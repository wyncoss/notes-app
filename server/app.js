import express from 'express';
import userRoutes from './routes/user.routes.js';
import noteRoutes from './routes/note.routes.js';
import colorRoutes from './routes/color.routes.js';

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', noteRoutes)
app.use('/api', colorRoutes)

app.listen(PORT, () => {
  console.log(`el server está corriendo en el puerto: ${PORT}`)
})