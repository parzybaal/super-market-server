import express from 'express'
import morgan from 'morgan'

import usersInfra from './apiSections/Usuarios/Infraestructura/routes/users.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


// Rutas:
app.use('/api/users', usersInfra)


app.listen(3000, () => console.log('Servidor up'))
