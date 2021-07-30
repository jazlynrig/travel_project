var mongoose = require("mongoose");
// var mongoDB = "mongodb://localhost:27017/contact";
//const mongoDB = "mongodb+srv://jazlyn_student_user:7TBr3x7YaOptR62i@cluster1.o0b4p.mongodb.net?retryWrites=true&w=majority"

// mongoose.connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// db.once("open", function () {
//     console.log("connected to database")
// })

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        //   required: "Please enter the post title.",
        //   trim: true,
        //   unique: "The title must be unique.",
    },
    lastname: {
        type: String,
        //   required: "Please write your post body.",
        //   trim: true,
        //   validate: {
        //     validator: function (v) {
        //       return v.length > 10;
        //     },
        //     message: (props) => `${props.value} is body is too short.`,
        //   },
    },
    mail: {
        type: String,
        //   trim: true,
        //   validate: {
        //     validator: function (v) {
        //       return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
        //     },
        //     message: (props) => `${props.value} is not a valid URL slug.`,
        //   },
        //   required: "Please enter the post url slug",
    },
    comment: {
        type: String,
        //   trim: true,
        //   validate: {
        //     validator: function (v) {
        //       return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
        //     },
        //     message: (props) => `${props.value} is not a valid URL slug.`,
        //   },
        //   required: "Please enter the post url slug",
    },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    // more fields defined below
});

// postSchema.plugin(uniqueValidator);

//Mosh
// const contact = mongoose.model('contact', contactSchema);

// async function createcontact() {
//     const contact = new contact({
//         firstname: '',
//         lastname: '',
//         mail: '',
//         comment: '',
//     });

//     const result = await contact.save();
//     console.log(result);



module.exports.contacts = mongoose.model("contacts", contactSchema);