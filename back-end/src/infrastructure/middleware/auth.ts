import { secret } from "./secret";
import { expressjwt } from "express-jwt";

export const auth = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
  });