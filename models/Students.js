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
            required: false
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
            required: true
        },
        houseNumber: {
            type: Number,
            required: true
        },
        references: {
            type: String,
            required: false
        }
    },
    contactInfo: {
        gitHubAt: {
            type: String,
            required: true
        },
        instagramAt: {
            type: String,
            required: false
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
            required: false
        }
    },
    academicInfo: {
        primaryStudy: {
            type: Boolean,
            required: true
        },
        secondaryStudy: {
            type: Boolean,
            required: true
        },
        tertiaryStudies: {
            type: Boolean,
            required: true
        },
        tertiaryTitles: {
            type: String,
            required: false
        }
    }
});

module.exports = model("student", StudentSchema)