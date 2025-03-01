import jwt from "jsonwebtoken";
const porotectRoute = (req, res, next) => {
    try {
        const token = req.cookies

    } catch (error) {
        console.log("Error in porotectRoute middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
export default porotectRoute