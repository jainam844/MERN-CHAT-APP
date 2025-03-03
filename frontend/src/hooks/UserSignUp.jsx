import React, { useState } from 'react'
import toast from 'react-hot-toast';

const UserSignUp = () => {
    const [loading, setLoading] = useState(false)
    const signup = async ({ fullName, username, password, comfirmpassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, comfirmpassword, gender });
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, comfirmpassword, gender }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // localStorage.setItem("chat-user", JSON.stringify(data));/
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }


    }
    return { loading, signup }
}

export default UserSignUp;
function handleInputErrors({ fullName, username, password, comfirmpassword, gender }) {
    if (!fullName || !username || !password || !comfirmpassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== comfirmpassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}