export const sendMessage = async (req, res) => {
    try {
   const {message}=req.body;
   const {id}=req.params;
   const senderId=req.UserId

    } catch (error) {
        console.log("Error in send message controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}