// crear una base de datos
use ecommerce

// Agrego 2 collections
db.createCollection('mensajes')
db.createCollection('productos')

// Agrego 10 documentos a la collection mensajes
db.mensajes.insertMany([
    {
        "mensaje": "Hola!",
        "email": "juanlo@example.com",
        "hora": "22/08/2021 13:45:02"
    },
    {
        "mensaje": "Que tal?",
        "email": "mluis@example.com",
        "hora": "22/08/2021 13:47:12"
    },
    {
        "mensaje": "Que onda!",
        "email": "julioperez@example.com",
        "hora": "22/08/2021 13:49:04"
    },
    {
        "mensaje": "Todo bien?",
        "email": "rodolfoalun@example.com",
        "hora": "22/08/2021 13:52:02"
    },
    {
        "mensaje": "Cuando nos juntamos?",
        "email": "pedrosolis@example.com",
        "hora": "22/08/2021 13:54:12"
    },
    {
        "mensaje": "Cuando es?",
        "email": "josevelez@example.com",
        "hora": "22/08/2021 13:57:22"
    },
    {
        "mensaje": "La semana que viene",
        "email": "estebanquito@example.com",
        "hora": "22/08/2021 13:58:19"
    },
    {
        "mensaje": "Muy Bien!",
        "email": "andrealea@example.com",
        "hora": "22/08/2021 13:59:42"
    },
    {
        "mensaje": "Genial!",
        "email": "carlalorenz@example.com",
        "hora": "22/08/2021 14:04:01"
    },
    {
        "mensaje": "perfecto!",
        "email": "juanitalea@example.com",
        "hora": "22/08/2021 14:22:20"
    }
])

// Agrego 10 documentos a la collection productos
db.productos.insertMany([
    {
        "nombre": "Bicicleta Rodado 28 Sunny Comet",
        "descripcion": "Bicicleta Rodado 28” Sunny Comet",
        "codigo": "200445566",
        "foto": "bici.jpeg",
        "precio": 0,
        "stock": 12
    },
    {
        "nombre": "Campera Nylon Ultraliviana Kappa",
        "descripcion": "Campera Nylon ultraliviana marca kappa.",
        "codigo": "Rs20033366",
        "foto": "campera.jpeg",
        "precio": 0,
        "stock": 58
    },
    {
        "nombre": "Cafetera Nespresso Modelo Inissia",
        "descripcion": "Empezá tu día con energía y de la mejor manera, disfrutando de la textura y calidad de un buen café en la comodidad de tu casa.",
        "codigo": "ne5556663315",
        "foto": "nespresso.jpg",
        "precio": 0,
        "stock": 9
    },
    {
        "nombre": "Gimnasio Multifunción",
        "descripcion": "Gimnasio Multifunción C/ Polea Dorsalera Remo",
        "codigo": "12sdfsd3456",
        "foto": "gym.jpeg",
        "precio": 0,
        "stock": 12
    },
    {
        "nombre": "Kit Caja Set Herramientas Llave 72 Piezas",
        "descripcion": "Caja herramientas 72 piezas.Importada de excelente calidad",
        "codigo": "25886333",
        "foto": "herramientas.jpeg",
        "precio": 0,
        "stock": 70
    },
    {
        "nombre": "Pintura Alba",
        "descripcion": "Pintura interior Alba",
        "codigo": "pe5556663316",
        "foto": "pintura.jpg",
        "precio": 0,
        "stock": 10
    },
    {
        "nombre": "Micro Procesador Amd Ryzen 3 3200 4.0ghz",
        "descripcion": "Amd Ryzen 7 3200XT 4.0 Ghz - AM4 con Video Vegas",
        "codigo": "bfgg55555661",
        "foto": "ryzen7.jpg",
        "precio": 0,
        "stock": 12
    },
    {
        "nombre": "Micro Procesador Amd Ryzen 5 3600xt 4.2ghz",
        "descripcion": "Amd Ryzen 5 3600XT 4.2 Ghz - AM4 Sin Video Sin Cooler",
        "codigo": "bfgg55555662",
        "foto": "ryzen7.jpg",
        "precio": 0,
        "stock": 21
    },
    {
        "nombre": "Micro Procesador Amd Ryzen 7 5700xt 4.6ghz",
        "descripcion": "Amd Ryzen 7 5700XT 4.6 Ghz - AM4 Sin Video Sin Cooler",
        "codigo": "bfgg55555663",
        "foto": "ryzen7.jpg",
        "precio": 0,
        "stock": 28
    },
    {
        "nombre": "Micro Procesador Amd Ryzen 7 5800xt 4.7ghz",
        "descripcion": "Amd Ryzen 7 5800XT 4.7 Ghz - AM4 Sin Video Sin Cooler",
        "codigo": "bfgg55555664",
        "foto": "ryzen7.jpg",
        "precio": 0,
        "stock": 2
    }
])

// Update de los precios
db.productos.updateOne({codigo: '200445566'},{$set: {precio: 120}})
db.productos.updateOne({codigo: 'Rs20033366'},{$set: {precio: 580}})
db.productos.updateOne({codigo: 'ne5556663315'},{$set: {precio: 900}})
db.productos.updateOne({codigo: '12sdfsd3456'},{$set: {precio: 1280}})
db.productos.updateOne({codigo: '25886333'},{$set: {precio: 1700}})
db.productos.updateOne({codigo: 'pe5556663316'},{$set: {precio: 2300}})
db.productos.updateOne({codigo: 'bfgg55555661'},{$set: {precio: 2860}})
db.productos.updateOne({codigo: 'bfgg55555662'},{$set: {precio: 3350}})
db.productos.updateOne({codigo: 'bfgg55555663'},{$set: {precio: 4320}})
db.productos.updateOne({codigo: 'bfgg55555664'},{$set: {precio: 4990}})

// listamos
db.mensajes.find().pretty()
db.productos.find().pretty()

// count
db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

// inerto otro elemento
 db.productos.insertOne({
        "nombre": "Juego de mesa TEG",
        "descripcion": "Juego de mesa",
        "codigo": "JU3333388",
        "foto": "teg.jpeg",
        "precio": 300,
        "stock": 17
      })

// Listamos los productos que el precio sea menor a 1000   
db.productos.find( { precio: {$lt: 1000} })

// Listamos los productos que el precio sea entre 1000 y 3000
db.productos.find({ $and: [{precio: {$gt: 1000}}, {precio: {$lt: 3000}}] })

// Listamos los productos que el precio sea mayor a 3000
db.productos.find( { precio: {$gt: 3000} })

// Traemos el nombre del tercer producto mas barato
db.productos.find().sort({precio: 1}).skip(2).limit(1)

// Actualizmos stock a 100 a todos los productos
db.productos.updateMany({precio: {$gte: 0}}, {$set: {stock: 100}})

// Cambiamos el stock a cero de los productos con precios mayores a 4000 pesos.
db.productos.updateMany({precio: {$gt: 4000}}, {$set: {stock: 0}})

// Borrar los productos con precio menor a 1000 pesos
db.productos.deleteMany({precio: {$lt: 1000}})

// Creamos un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce.
use admin
db.createUser({'user': 'pepe', 'pwd': 'asd456', 'roles': [{role: 'read', db: 'ecommerce'}]})
