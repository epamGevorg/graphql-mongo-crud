import { User } from './Models/User.js';

export const resolvers = {
    Query: {
        getAllUsers() {
            return 'here is all users'
        },
        getUserById(_, args) {
            return `selected user by id: ---> ${args.id}`
        }
    },
    Mutation: {
        createUser(_, args) {
            console.log(args.input.firstName);
            console.log('firstName: --->', args.input.firstName);
            console.log('secondName: --->', args.input.secondName);
            console.log('birthDate: --->', args.input.birthDate);
            console.log('email: --->', args.input.email);
            console.log('isAdmin: --->', args.input.isAdmin);
            return 'done';
        },
        updateUser(_, args) {
            console.log('args: --->', args);
            return `updated user by id: ---> ${args.id}`
        },
        deleteUser(_, args) {
            console.log('args: --->', args);
            return `deleted user by id: ---> ${args.id}`
        }
    }
};