let mongoose=require('mongoose')
let eyeSchema=mongoose.Schema({
  image:String,
  image1:String,
image2:String,
image3:String,
image4:String,
  quantity: Number,
  title:String,
  price:Number,
  FrameType: String,
  FrameSize:String,
  Brands:String,
  reviews:Number,
  ratings: String,
  BestSeller:Boolean
  },
  {
    versionKey: false,
  }
)

let eyeModel=mongoose.model("eyedatas",eyeSchema)
module.exports={
    eyeModel
}