import {reset, seed} from "drizzle-seed"
import { client, db } from "./connection.ts"
import { schema } from "./schema/index.ts"

await reset(db, schema)

await seed(db, schema).refine(f => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum()
            }
        }
    }
})

await client.end()

console.log("data base seeded")