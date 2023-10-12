import express from 'express'
import morgan from 'morgan'

import usersInfra from './apiSections/Usuarios/Infraestructura/routes/users.routes'
import productsInfra from './apiSections/Productos/Infraestructura/routes/products.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


// Rutas:
app.use('/api/users', usersInfra)
app.use('api/products', productsInfra)


app.listen(3000, () => console.log('Servidor up'))
