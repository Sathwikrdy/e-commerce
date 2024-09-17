const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection

mongoose.connect("mongodb+srv://satwik:sathwik18@cluster0.v3ntern.mongodb.net/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000   // 45 seconds
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Image storage Engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Product schema
const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avaliable: {
    type: Boolean,
    default: true,
  }
});

const Product = mongoose.model('Product', ProductSchema);

// Add product endpoint
app.post('/addproduct', async (req, res) => {
  console.log("Received request to add product:", req.body);
  try {
    const product = new Product({
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log("Saving product:", product);
    await product.save();
    console.log("Product saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save product",
    });
  }
});

//creating API for removing product
app.post('/removeproduct',async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success:true,
    name:req.body.name
  })
})

//creating API for getting all products
app.get('/allproducts',async(req,res)=>{
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})

//user schema
const Users = mongoose.model('Users',{
  name: {
    type: String,
  },
  email: {
    type: String,
    unique:true,
  },
  password: {
    type: String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now
  }
})

//creating endpoint for registering new user
app.post('/signup',async(req,res)=>{
  let check= await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"existing user found with email address"})
  }

  let cart={};
  for (let i=0;i<300;i++){
    cart[i]=0;
  }

  const user=new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })

  await user.save();

  const data ={
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data,'secret_ecom')
  res.json({success:true,token})
})

//creating endpoint for user login
app.post('/login',async(req,res)=>{
  let user=await Users.findOne({email:req.body.email});
  if(user){
    const passwordCompare = req.body.password===user.password;
    if(passwordCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom');
      res.json({success:true,token});
    }
    else{
      res.json({success:false,errors:"Wrong Password"})
    }
  }
  else{
    res.json({success:false,errors:"Wrong E-mail address"})
  }
})


app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error starting server:", error);
  }
});
