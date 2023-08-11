import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = (password: any, hash: any) => {
  return bcrypt.compare(password, hash);
}; 

export const hashPassword = (password: any) => {
    return bcrypt.hash(password, 5);
  };

export const createJWt = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET
  );

  return token;
};

export const protect = (req: any, res: any, next: any) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.send({ message: "Unauthorized" });
    return;
  }
  const [_, token] = bearer.split(" ");
  if (!token) {
    console.log("No token provided.");
    res.status(401);
    res.json({ message: "Not a valid token" });
    return;
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401);
    res.json({ message: "Not a valid token" });
    return;
  }
};
