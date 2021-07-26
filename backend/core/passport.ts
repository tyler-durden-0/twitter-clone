import passport from 'passport'
import {Strategy as localStrategy} from 'passport-local'
import {userModel} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";

passport.use(
    new localStrategy(
    async (username, password, done): Promise<void> => {
        try {
            const user = await userModel.findOne({$or: [{ email: username}, {username}]}).exec()

            if(!user) {
                return done(null, false)
            }

            if(user.password === generateMD5(password + process.env.SECRET_KEY)) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (error) {
            done(error, false)
        }
    })
)

//сделать interface для юзера
passport.serializeUser((user, done) => {
    done(null, user?._id)
})

passport.deserializeUser((id, done) => {
    userModel.findById(id, (err, user) => {
        done(err, user)
    })
})

export {passport}