const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image:String,
  title:String,
  details:String,
  price:Number,

})
export default mongoose.models.post || mongoose.model("post", postSchema)