import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const hashPassword = (password: any) => {
  return bcrypt.hash(password, 5);
};

export const comparePassword = (password: any, hash: any) => {
  return bcrypt.compare(password, hash);
};

export const createJWT = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRETE
  );
  return token;
};

export const protect = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }
  const [_, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = user;
    next();
  } catch (e) {
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }
};
