import "dotenv/config"
import {config,createSchema} from '@keystone-next/keystone/schema'

const databaseURL = process.env.DATABASE_URL|| "mongodb://localhost/keystone-sick-fits-tutorial";


const sessionConfig = {
    maxAge:60*60*24*360,//how long they stay signed in
    secret: process.env.COOKIE_SECRET,

}

export default config({
    server:{
        cors:{
            origin:process.env.FRONTEND_URL,
            credentials:true
        },
    },
    db:{
        adapter:'mongoose',
        url:databaseURL,
        //TODO: add Data seeding here
    },
    lists:createSchema({
        //schema items go in here
    }),
    ui:{
        //TODO: changethis for roles
        isAccessAllowed:()=>true,

    }
    //TODO:add session values here 
})
