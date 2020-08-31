const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// IMPORT ENV CONFIG
require('dotenv').config();

// LOCAL MODULE IMPORTS
const db = require('./db')
const models = require('./models');
// SCHEMA
const typeDefs = require('./schema');
// RESOLVERS
const resolvers = require('./resolvers');

const app = express();
db.connect(DB_HOST);


// dynamically set the port in the Node environment,fall back to port 4000 when no port is specified.
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

// TEST_NOTES
let notes = [
    {
        id: '1',
        content: 'This is a note',
        author: 'Tom'
    },
    {
        id: '2',
        content: 'This is another note',
        author: 'Harry'
    },
    {
        id: '3',
        content: 'This is also a note',
        author: 'Jack'
    },
]




const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return { models };
    }
});

// APPLY APOLLO GRAPHQL MIDDLEWARE
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`));
