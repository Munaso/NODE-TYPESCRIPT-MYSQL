"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.getUserInfo = exports.signup = void 0;
const users_1 = require("../models/users");
const crypto = __importStar(require("crypto"));
// @ 회원가입 api
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nickname, age } = req.body;
    const crypyedPw = crypto
        .createHash("sha512")
        .update(password)
        .digest("base64");
    var user = yield users_1.Users.create({ email, password: crypyedPw, nickname, age });
    return res.status(200).json({ message: "회원가입 성공", data: user });
});
exports.signup = signup;
// ◎ 회원정보 불러오기  api
const getUserInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nickname, age } = req.body;
    const crypyedPw = crypto
        .createHash("sha512")
        .update(password)
        .digest("base64");
    var user = yield users_1.Users.create({ email, password: crypyedPw, nickname, age });
    return res.status(200).json({ message: "회원가입 성공", data: user });
});
exports.getUserInfo = getUserInfo;
// ◎ 로그인  api
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nickname, age } = req.body;
    const crypyedPw = crypto
        .createHash("sha512")
        .update(password)
        .digest("base64");
    var user = yield users_1.Users.create({ email, password: crypyedPw, nickname, age });
    return res.status(200).json({ message: "회원가입 성공", data: user });
});
exports.login = login;
// ◎ 로그아웃  api
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nickname, age } = req.body;
    const crypyedPw = crypto
        .createHash("sha512")
        .update(password)
        .digest("base64");
    var user = yield users_1.Users.create({ email, password: crypyedPw, nickname, age });
    return res.status(200).json({ message: "회원가입 성공", data: user });
});
exports.logout = logout;
