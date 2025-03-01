import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const porotectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).json({ error: "UnAuthorize token" });
        }
        const decoded = exports.verifyJWT = (token) => {
            return jwt.verify(token, process.env.JWT_KEY);
        };
        if (!decoded) {
            res.status(401).json({ error: "invalid token" });
        }

        const user = await User.findById(decoded.userId).select("password")
        if (!user) {
            res.status(401).json({ error: "user not found" });
        }
        req.user = user
        next()
    } catch (error) {
        console.log("Error in porotectRoute middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
export default porotectRoute