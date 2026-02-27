import { randomBytes } from "node:crypto";

export function generateToken(lenght: number = 32): string {
  return randomBytes(lenght).toString("hex");
}
