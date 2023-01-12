import { fetch, fetchData } from "../../utils/pg.js";

const get_products = `
    select
        * 
    from 
        products
    join
        categories
    on
        products.category_id = categories.category_id
`

const add_product = `
    INSERT INTO products(product_name, product_body, product_price, product_img, category_id)
    values($1, $2, $3, $4, $5)
`

const delete_product = `
    DELETE FROM products WHERE product_id = $1
`

const update_product = `
    UPDATE 
        products
    SET 
        product_name = $1,
        product_body = $2,
        product_price = $3,
        product_img = $4,
        categorie_id = $5
    WHERE
        product_id = $6
`

const search_product = `
    SELECT
        *
    FROM
        products
    WHERE
        product_name ILIKE $1
`

const get_product = `
    select
        * 
    from 
        products
    join
        categories
    on
        products.category_id = categories.category_id
    where
        product_id = $1
`

const by_category = `
    select
        * 
    from 
        products
    join
        categories
    on
        products.category_id = categories.category_id
    where
        category_id = $1
`

export const addProduct = (product_name, product_body, product_price, product_img, categorie_id) => 
    fetchData(add_product, product_name, product_body, product_price, product_img, categorie_id) 

export const getProducts = () => fetchData(get_products)

export const deleteProduct = product_id => fetch(delete_product, product_id)

export const updateProduct = (product_name, product_body, product_price, product_img, categorie_id, product_id) => 
    fetch(update_product, product_name, product_body, product_price, product_img, categorie_id, product_id)

export const searchProduct = product_name => fetchData(search_product, product_name)

export const byCategory = id => fetch(by_category, id)

export const getProduct = id => fetch(get_product, id)