import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import mongoose from "mongoose";

dotenv.config();

async function startServer(typeDefs, resolvers) {
    const port = process.env.PORT || 4000;
    const db_user = process.env.DB_USER;
    const db_password = process.env.DB_PASS;
    const server = new ApolloServer({typeDefs, resolvers});
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});

    mongoose.connect(`mongodb+srv://${db_user}:${db_password}@cluster0.gqrrbw4.mongodb.net/?retryWrites=true&w=majority`);

    app.listen({port}, () => {
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
}

startServer(typeDefs, resolvers);