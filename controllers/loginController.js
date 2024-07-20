const loginController = async (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ message: "Username and password are required" });
    }

    if (username === "example_user" && password === "password123") {
        return response.status(200).json({ message: "Login successful" });
    } else {
        return response.status(401).json({ message: "Invalid username or password" });
    }
};

module.exports =  loginController ;
