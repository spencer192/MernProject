const mongoose = require("mongoose")

const bcrypt = require ('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        picture:{
            type: String,
            required: true,
            default: "https://static.vecteezy.com/system/resources/previews/022/923/881/large_2x/user-picture-icon-isolated-user-picture-sign-icon-illustration-free-vector.jpg"
        },
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
            next();   
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User= mongoose.model('User', userSchema);


module.exports = User;