import { Router, Request, Response } from "express";
import { createToken, verifyToken } from "../../lib/auth.lib";

const router = Router();

router.get("/:token", (req: Request, res: Response) => {
  const { token: string } = req.params;
  const newToken: string = createToken({ testKey: "testValue" });
  console.log(verifyToken(newToken));
  return res.send(newToken);
});

export default router;
