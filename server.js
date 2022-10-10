import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const payload = {
  user: "8sdf90u90sfsfsd8fsufsd8",
};

const token = await jwt.sign(payload, process.env.SECRET, {
  expiresIn: "50",
});

console.log(token);

// demonstrating what happens when a token expires
setTimeout(async () => {
  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    console.log(decoded);
  } catch (error) {
    console.log("Token is no longer valid");
  }
}, 3000);
