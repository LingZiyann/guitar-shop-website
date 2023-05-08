import pg from 'pg';

const db = new pg.Client({
    host:'localhost',
    user:'postgres',
    port: 5432,
    password: '#',
    database: 'ecommerce'
})

db.connect();

export { db }