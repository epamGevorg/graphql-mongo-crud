import mongoose from "mongoose";

export function dbConnect() {
    const db_user = process.env.DB_USER;
    const db_password = process.env.DB_PASS;

    mongoose.connect(`mongodb+srv://${db_user}:${db_password}@cluster0.gqrrbw4.mongodb.net/?retryWrites=true&w=majority`);
}