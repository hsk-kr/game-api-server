import * as jwt from "jsonwebtoken";
import { jwtSecret } from "../config/setting";

/**
 * 토큰을 생성합니다.
 * @param payload
 */
export const createToken = (payload: object) => {
  const newToken: string = jwt.sign(payload, jwtSecret, {
    expiresIn: "1h",
  });

  return newToken;
};

/**
 * 토큰을 인증하고, 페이로드를 반환합니다.
 * 인증 실패 시 null을 반환합니다.
 * @param token
 */
export const verifyToken = (token: string) => {
  try {
    const payload: any = jwt.verify(token, jwtSecret);
    return payload;
  } catch {
    return null;
  }
};
