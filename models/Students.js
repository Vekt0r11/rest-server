 const {Schema, model} = require("mongoose");

const StudentSchema = new Schema({

    personalInfo: {
        pictureLink: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: false,
            default: ""
        },
        lastName: {
            type: String,
            required: true
        },
        dni: {
            type: String,
            required: true
        },
        yearOfBirth: {
            type: Number,
            required: true
        }
    },
    addressInfo: {
        country: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        },
        street: {
            type: String,
            required: false,
            default: "S/N"
        },
        houseNumber: {
            type: Number,
            required: true
        },
        references: {
            type: String,
            required: false,
            default: ""
        }
    },
    contactInfo: {
        gitHubAt: {
            type: String,
            required: true
        },
        instagramAt: {
            type: String,
            required: false,
            default: ""
        },
        cellphone: {
            type: Number,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        secondaryMail: {
            type: String,
            required: false,
            default: ""
        }
    },
    academicInfo: {
        primaryFinished: {
            type: Boolean,
            required: true
        },
        secondaryFinished: {
            type: Boolean,
            required: true
        },
        tertiaryDegrees: {
            type: String,
            required: false,
            default: ""
        }
    }
});

module.exports = model("student", StudentSchema)