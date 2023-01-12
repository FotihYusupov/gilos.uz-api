import { fetch, fetchData } from "../../utils/pg.js";

const new_user = `
    insert into users(first_name, last_name, user_tell, user_email)
        values($1, $2, $3, $4) RETURNING user_id
`

const new_order = `
    insert into joinorbers(user_id, product_id) values($1, $2)
`

export const newUser = (first_name, last_name, user_tell, user_email) => 
    fetch(new_user, first_name, last_name, user_tell, user_email)

export const newOrder = (user_id, product_id) => fetch(new_order, user_id, product_id)