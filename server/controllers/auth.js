import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'
 
export const signup = async (req, res) => {
    const{ name, email, password} = req.body;
    try{
            const existinguser = await users.findOne({email});
            if(existinguser){
                return res.status(404).json({message: 'User already Exist.'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const newUSer = await users.create({name, email, password: hashedPassword})
            const token = jwt.sign({email: newUSer.email, id:newUSer._id},"test",{expiresIn: '1h'})
            res.status(200).json({result: newUSer, token})

    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}
export const login = async (req, res) => {
    const{ email, password} = req.body;
    try{
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json({message: 'User dont Exist.'})
        }
        const isPasswordCrt = await bcryptcompare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "invalid credentials"})

        }
        const token = jwt.sign({email: newUSer.email, id:newUser._id},"test",{expiresIn: '1h'})
            res.status(200).json({result: newUser, token})

    } catch(error) {
        res.status(500).json("Something went wrong...")
    }
    
}