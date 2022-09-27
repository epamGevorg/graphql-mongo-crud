import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { dbConnect } from './dbConnect.js';
dotenv.config();

async function startServer(typeDefs, resolvers) {
    const port = process.env.PORT || 4000;
    const server = new ApolloServer({typeDefs, resolvers});
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});

    dbConnect();

    app.listen({port}, () => {
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
}

startServer(typeDefs, resolvers);