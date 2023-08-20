import { comparePassword, createJWT, hashPassword } from "../modules/auth";
import { prisma } from "../db";

export const createNewUser = async (req: any, res: any) => {
  const hash = await hashPassword(req.body.password);
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signInUser = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const validUser = await comparePassword(req.body.password, user.password);

  if (!validUser) {
    res.status(401);
    res.json({ Message: "Invalid email or passwords" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
