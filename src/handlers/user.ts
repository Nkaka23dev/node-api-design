import { createJWT, hashPassword } from "../modules/auth";
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
