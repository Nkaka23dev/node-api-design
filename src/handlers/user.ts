import prisma from "../db";
import { comparePasswords, createJWt, hashPassword } from "../modules/auth";

export const createNewUser = async (req: any, res: any) => {
  const hash = await hashPassword(req.body.password);
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      password: hash,
    },
  });
  const token = createJWt(user);
  res.json({ token });
};

export const signInUser = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: {
      name: req.body.name,
    },
  });
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ Message: "Invalid Email or password" });
    return;
  }
  const token = createJWt(user);
  res.json({ token });
};
