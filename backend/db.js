import pg from 'pg';

const db = new pg.Client({
    host:'localhost',
    user:'postgres',
    port: 5432,
    password: 'lingziyan123',
    database: 'ecommerce'
})

db.connect();

export { db }