const express = require('express') //included in express install
const mongoose = require('mongoose')
const Mando = require('./models/mandoModel')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// here we connect to mongdo db
try {
    mongoose.connect("mongodb+srv://candyroll93:Warrior1234@candyroll93project.pswty.mongodb.net/mandoAPI?retryWrites=true&w=majority")
.then(() => console.log("connected to mongo"));

} catch (error) {
    console.log(error)
}

// here we begin our routing

app.get('/', (req, res) => {
  res.send('Hello Mando!')
})

app.get('/mandos', async (req, res)=> {
    try {
        const mando = await Mando.find({

        })
        // empty means get all
        res.status(200).json(mando);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// get specific mando

app.get('/mando/:id', async (req, res)=> {
    try {
        const { id } = req.params;
        const mando = await Mando.findById(id);

        res.status(200).json(mando);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// get all mandos

app.post('/mando', async (req, res) => {

    try {
        console.log(req.body)
        const mando = await Mando.create(
            req.body
        )
        res.status(200).json(mando);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

// update a specific mando
app.put('/mando/:id', async (req, res) => {
    try {
        const { id } = req.params; // takes the id from the parameters
        const mando = await Mando.findByIdAndUpdate(id, req.body);

        if (!mando) {
            // this means we can't find this product
            return res.status(404).json({
                message: `cannot find this mando`
            })
        }

        const updatedMando = await Mando.findById(id);

        res.status(200).json(updatedMando);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// delete mando
app.delete('/mando/:id', async (req, res) => {
    try {
        const { id } = req.params; // takes the id from the parameters
        const mando = await Mando.findByIdAndDelete(id);

        if (!mando) {
            // this means we can't find this product
            return res.status(404).json({
                message: `cannot find this mando`
            })
        }

        res.status(200).json(mando);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})