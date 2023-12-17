import post from "../../../../models/post";
import dbConnect from "../../utils/dbConnect";
import { createRouter } from "next-connect";

dbConnect();

const router = createRouter();
router
  .get(async (req, res) => {
    try {
      const posts = await post.findOne({ _id: req.query.id });
      res.send(posts);
    } catch (error) {
      return res.status(400).json({ message: "some thing is wrong in get " });
    }
  })
  .put(async (req, res) => {
    try {
      const Post = await post.findOne({ _id: req.query.id });
      Post.image = req.body.image;
      Post.title = req.body.title;
      Post.details = req.body.details;
      Post.price = req.body.price;

      res.send("updated!");

      await Post.save();
    } catch (error) {
      return res.status(400).json({ message: "some thing is wrong in put " });
    }
  })
  .delete(async (req, res) => {
    try {
      const posts = await post.findOneAndDelete({ _id: req.query.id });
      res.send("deleted!");
    } catch (error) {
      return res
        .status(400)
        .json({ message: "some thing is wrong in delete " });
    }
  });
export default router.handler();
