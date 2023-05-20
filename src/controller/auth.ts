import { RequestHandler } from "express";

import { Users } from "../models/users";
import * as crypto from "crypto";

// @ 회원가입 api
export const signup: RequestHandler = async (req, res, next) => {
  const { email, password, nickname, age } = req.body;

  const crypyedPw = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  var user = await Users.create({ email, password: crypyedPw, nickname, age });
  return res.status(200).json({ message: "회원가입 성공", data: user });
};

// ◎ 회원정보 불러오기  api
export const getUserInfo: RequestHandler = async (req, res, next) => {
  const { email, password, nickname, age } = req.body;

  const crypyedPw = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  var user = await Users.create({ email, password: crypyedPw, nickname, age });
  return res.status(200).json({ message: "회원가입 성공", data: user });
};

// ◎ 로그인  api
export const login: RequestHandler = async (req, res, next) => {
  const { email, password, nickname, age } = req.body;

  const crypyedPw = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  var user = await Users.create({ email, password: crypyedPw, nickname, age });
  return res.status(200).json({ message: "회원가입 성공", data: user });
};

// ◎ 로그아웃  api
export const logout: RequestHandler = async (req, res, next) => {
  const { email, password, nickname, age } = req.body;

  const crypyedPw = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  var user = await Users.create({ email, password: crypyedPw, nickname, age });
  return res.status(200).json({ message: "회원가입 성공", data: user });
};
