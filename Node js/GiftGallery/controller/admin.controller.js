import Admin from "../model/admin.model.js";

export const signup = (request,response,next)=>{
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null,email,password);

    admin.signup().then(result=>{
        return response.status(200).json({message:"Signup Success"});
    }).catch(err=>{
        return response.status(400).json({error:"Internal server error"})
    })
}

export const signin = (request,response,next)=>{
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null,email,password);

    admin.signin().then(result=>{
        return response.status(200).json({message:"SignIn Success"});
    }).catch(err=>{
        return response.status(400).json({error:"Internal server server....."})
    })
}

export const deletebyId = (request, response, next) => {
    let user_id = request.body.user_id;

    Admin.deletebyId(user_id)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ message: "User Delete Successfully" })
            else
                return response.status(400).json({ error: "User is not exit" });
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal server error" });
        })
}

export const userlist = (request, response, next) => {
    Admin.userlist()
        .then(result => {
            return response.status(200).json({ UserList: result });
        }).catch(err => {
            return response.status(401).json({ error: "Internal server error" });
        })
}

export const userdetail = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    Admin.userdetail(username, password)
        .then(result => {
            if (result.length != 0)
                return response.status(200).json({ Detail: result })
            else
                return response.status(400).json({ message: "Something went wrong" })
        })
        .catch(err => {
            return response.status(500).json({ error: "Internal Server Error" })
        })
}
