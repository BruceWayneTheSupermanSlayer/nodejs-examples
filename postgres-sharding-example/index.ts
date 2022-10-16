import express from "express";
import {Client} from "pg";

const client = {
    "5432": new Client({
        host: "shard1",
        user: "postgres",
        password: "postgres",
        database: "postgres",
        port: 5432,
    }),
    "5434": new Client({
        user: "postgres",
        database: "postgres",
        password: "postgres",
        port: 35432,
        host: "shard3",
    }),
};
connectToShard();

async function connectToShard() {
    await client["5432"].connect();
    await client["5434"].connect();
}

const app = express();
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
