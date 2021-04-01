import "dotenv/config"

const databaseURL = process.env.DATABASE_URL|| "mongodb://localhost/keystone-sick-fits-tutorial";


const sessionConfig = {
    maxAge:60*60*24*360,//how long they stay signed in
    secret: process.env.COOKIE_SECRET,

}