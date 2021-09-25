// import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// const loginSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     reEnterPassword: String
// });

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'login');
// const login = mongoose.model('login', loginSchema);

// export default login;

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
const user = mongoose.model('user', userSchema);

export default user;
