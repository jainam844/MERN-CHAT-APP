export const login = (req, res) => {
    console.log("login User")
}
export const singup = (req, res) => {
    try {
        const { fullname, username, password, comfirmpassword, gender } = req.body;
        
    } catch (err) {

    }
}
export const logout = (req, res) => {
    console.log("logout User")
}