import jwt from "jsonwebtoken";

const SECRET = "mysecretkey"; 

export const generateToken = (user: any) => {
  return jwt.sign({ email: user.email }, SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
};
