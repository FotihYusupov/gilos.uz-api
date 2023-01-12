import { newOrder, newUser } from "./model.js";

export default {
  NEW_USER: async (req, res) => {
    const { first_name, last_name, user_tell, user_email, product_id } = req.body;
    const { user_id } = await newUser(first_name, last_name, user_tell, user_email)
    const new_order = newOrder(user_id, product_id)
    res.send('ok')
  },
};
