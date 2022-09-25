import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    input CreateUserInput {
        firstName: String!
        secondName: String!
        birthDate: Int
        email: String!
        isAdmin: Boolean!
    }
    
    type User {
        id: ID!
        firstName: String!
        secondName: String!
        birthDate: Int
        email: String!
        isAdmin: Boolean!
    }
    
    type Query {
        getAllUsers: String
        getUserById(id: ID!): String
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): String
        updateUser(id: String!): String
        deleteUser(id: String!): String
    }
`;