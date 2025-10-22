const zod =require("zod");

const userSchema = zod.object({
    name:zod.string({ message: "Must be 5 or more characters long" }),
    email:zod.string().email({ message: "invalid mail by me" }),
    password:zod.string(),
    phone:zod.string()
})

const signup = async (req,res)=>{
    console.log(req.body);
    // ! get data from user
    const {name,email,password,phone}=req.body;

    // ! validate
    const result = await userSchema.safeParseAsync({name,email,password,phone});
    console.log(result.error.errors[0].message);
    if(!result.success){
        return res.send(` error :  ${result.error.errors[0].message}`)
    }

    // ! check if user exist or not

    // ! create user and sent token


    res.send("working");
}

const login =(req,res)=>{
    res.send("Login");
}
module.exports ={signup,login}