import jwt from 'jsonwebtoken'
export const verifytoken = (request,response,next)=>{
    try {
        let token = request.headers.authorization;
        token  = token.split(" ")[1];
        jwt.verify(token,"blablabrabla")
        next();  
    } catch (error) {
        return response.status(401).json({error: "Unauthorized access"})
    }
}