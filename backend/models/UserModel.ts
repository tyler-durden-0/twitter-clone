import {model, Schema} from 'mongoose'

export interface UserModelInterface {
    _id?: string;
    email: string;
    fullname: string;
    confirmHash: string;
    password: string;
    confirmed?: string;
    location?: string;
    about?: string;
    website?: string;
}

export type UserModelDocumentInterface = UserModelInterface & Document

const userSchema = new Schema<UserModelDocumentInterface>({
    email:{
        unique: true,
        required: true,
        type: String
    },
    fullname: {
        required: true,
        type: String
    },
    username: {
        unique: true,
        required: true,
        type: String
    },
    confirmHash: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    location: String,
    about: String,
    website: String,
})

userSchema.set('toJSON',{
    transform: function(_: any, obj: any){
        delete obj.password
        delete obj.confirmHash
        return obj
    }

})

export const userModel = model('User', userSchema)