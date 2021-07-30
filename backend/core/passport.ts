import passport from 'passport'
import {Strategy as localStrategy} from 'passport-local'
import {userModel, UserModelInterface} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";
import {Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt'

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

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEY || '123',
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
        },
        async (payload, done) => {
            try {
                return done(null, payload.user)
            } catch(error) {
                done(error)
            }
        }
    )
)

//сделать interface для юзера
passport.serializeUser((user: UserModelInterface, done) => {
    done(null, user?._id)
})

passport.deserializeUser((id, done) => {
    userModel.findById(id, (err, user) => {
        done(err, user)
    })
})

export {passport}