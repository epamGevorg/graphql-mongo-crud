import { User } from './Models/User.js';

export const resolvers = {
    Query: {
        async getAllUsers() {
            try {
                return await User.find();
            } catch (error) {
                console.log(error.message);
            }
        },
        async getUserById(_, { id }) {
            try {
                return await User.findById(id);
            } catch (error) {
                console.log(error.message)
            }
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const data = input;
            const user = new User({
                firstName: data.firstName,
                secondName: data.secondName,
                birthDate: data.birthDate,
                email: data.email,
                isAdmin: data.isAdmin,
            });

            await user.save();

            return user;
        },
        async updateUser(_, { id, input }) {
            const update = {...input};
            await User.findOneAndUpdate({_id: id}, update);

            // it can be bad solution, pick that way,
            // because after updating getting back old data
            return await User.findById(id);
        },
        async deleteUser(_, { id }) {
            try {

               return await User.findByIdAndRemove(id);

            } catch (error) {
                console.log(error.message);
            }
        }
    }
};