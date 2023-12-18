import post from "../../../../models/post";
import dbConnect from "../../../utils/dbConnect";
import { createRouter } from "next-connect";

dbConnect();

const router = createRouter();
router
  .get(async (req, res) => {
    try {
      const posts = await post.find({});
      res.send(posts);
    } catch (error) {
      return res.status(400).json({ message: "some thing is wrong in get " });
    }
  })
  .post(async (req, res) => {
    const { image, title, details, price } = req.body;
    const newPost = new post({ image, title, details, price });
    try {
      await newPost.save();
      res.send("new post added");
      res.send(posts);
    } catch (error) {
      return res.status(400).json({ message: "some thing is wrong in post " });
    }
  });
export default router.handler();
