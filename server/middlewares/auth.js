import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Invalid token",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Token is not valid",
    });
  }
};

export default userAuth;
