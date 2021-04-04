import "dotenv/config"
import {createAuth} from "@keystone-next/auth"
import {config,createSchema} from '@keystone-next/keystone/schema'
import {User} from "./schemas/User"
import {Product} from "./schemas/Product"
import {ProductImage} from "./schemas/ProductImage"
import {withItemData,statelessSessions} from "@keystone-next/keystone/session"
import { insertSeedData } from "./seed-data"


const databaseURL = process.env.DATABASE_URL|| "mongodb://localhost/keystone-sick-fits-tutorial";



const sessionConfig = {
    maxAge:60*60*24*360,//how long they stay signed in
    secret: process.env.COOKIE_SECRET,

}

const {withAuth} = createAuth({
listKey:"User",
identityField:"email",
secretField:"password",
initFirstItem:{
    fields:["name","email","password"]
    //TODO: add in initial roles in here
}
})

export default withAuth(config({
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
        async onConnect(keystone){
            console.log('Connected to the database!')
            if(process.argv.includes('--seed-data'))
            {
                await insertSeedData(keystone)
            }
        }
    },
    lists:createSchema({
        //schema items go in here
        User,
        Product,
        ProductImage
    }),
    ui:{
        //TODO: changethis for roles
        isAccessAllowed:({session})=>{
            console.log(session)
            return !!session?.data;
        },

    },
    //TODO:add session values here 
    session:withItemData(statelessSessions(sessionConfig),{
        User:`id name email`
    }),
}))
