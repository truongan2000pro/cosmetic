const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const JWT_SECRET = "my secret string";
/**
 * @summary this function will hash a string by algorithm md5
 * @param {String} str
 * @returns {null } // fake returns
 */

function hashMd5(str) {
  return crypto.createHash("md5").update(str).digest("hex");
}
function signToken(object) {
  return jwt.sign(object, JWT_SECRET, {
    expiresIn: "6h",
  });
}
// console.log(signToken({ an: "123" }));
function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
// let token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbiI6IjEyMyIsImlhdCI6MTU5MjA1MzI5NiwiZXhwIjoxNTkyMDc0ODk2fQ.91k2fcaEI2RsQhtFfUDpwjrXb2D4WSQ1ipNbfolREYE";
// console.log(verifyToken(token));
module.exports = { hashMd5, signToken, verifyToken };
