import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    input CreateUserInput {
        firstName: String!
        secondName: String!
        birthDate: Int
        email: String!
        isAdmin: Boolean!
    }
    
    input UpdateDataInput {
        firstName: String
        secondName: String
        birthDate: Int
        email: String
        isAdmin: Boolean
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
        getAllUsers: [User!]!
        getUserById(id: ID!): User!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(id: ID!, input: UpdateDataInput!): User!
        deleteUser(id: ID!): User!
    }
`;