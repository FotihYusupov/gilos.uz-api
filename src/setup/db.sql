create table admins(
    user_id serial not null primary key,
    user_name varchar(32),
    user_password varchar(60)
);

create table users(
    user_id serial not null primary key,
    first_name varchar(32),
    last_name varchar(32),
    user_tell integer,
    user_email varchar(64)
);

create table categories(
    category_id serial not null primary key,
    categorie_name varchar(64)
);

create table products(
    product_id serial not null primary key,
    product_name varchar(64),
    product_body varchar,
    product_price integer,
    product_img text,
    category_id integer references categories(category_id)
);

create table joinOrbers(
	order_id serial not null primary key,
  	user_id integer references users(user_id),
  	product_id integer references products(product_id)
);