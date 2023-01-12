import { login } from "./model.js";
import jwt from "../../utils/jwt.js";

export default {
  LOGIN: async (req, res) => {
    const { user_name, user_password } = req.body;
    const foundAdmin = await login(user_name, user_password);
    if (foundAdmin) {
      res.status(200).json({
        status: 200,
        token: jwt.sign({ id: foundAdmin.id }),
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Wrong psssword or username",
      });
    }
  },
  VERIFICATION: async (req, res, next) => {
    try {
      const { token } = req.headers;
      const { id } = jwt.verify(token);
      const foundUser = await selectAdmin(id);
      if (foundUser) {
        return next();
      } else {
        res.status(401).send({ message: "Bad request!" });
      }
    } catch (err) {
      console.log("Auth => [VERIFICATION]: ", err);
      res.status(500).json({ message: "Something is wrong" });
    }
  },
};