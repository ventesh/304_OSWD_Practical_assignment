const express = require('express')
const router = express.Router()
const Category = require('../model/category')
const Product = require('../model/product')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null, "public/uploads")
    },
    filename: function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

router.get('/', async (req, res) => {
    try {
        const data = await Product.find()
        res.render("pro", {
            data: data
        })
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.get('/alljs', async (req, res) => {
    try {
        const data = await Product.find()
        res.json(data)
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.get('/allctjs', async (req, res) => {
    try {
        const data = await Category.find()
        res.json(data)
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})
router.get('/getcat', async (req, res) => {
    try {
        const ct = await Category.find()
        res.render("proadd", {
            ct: ct
        })
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.get('/catad', async (req, res) => {
    try {        
        res.render("addcat")
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.get('/proad', async (req, res) => {
    try {        
        res.render("proadd")
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.post('/catadd', async (req, res) => {
    const adct = new Category({
        name: req.body.name
    })
    try {
        const dt = await adct.save()
        res.json(dt)
        // res.redirect("/data")
    } catch (error) {
        res.status(500).send("error in getting data");
    }
})

router.post('/proins',upload.single("image") ,async (req, res) => {
    const adpr = new Product({
        pname: req.body.name,
        cname: req.body.cname,
        price: req.body.price,
        image: req.file.filename
    })
    console.log(req.file)
    try {
        await adpr.save()
        res.redirect("/data")
    } catch (error) {
        res.status(500).send("error in inserting data");
    }
})
module.exports = router