import axios from "axios";
import md5 from "md5";

const publicKey = "";
const privateKey = "";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

export const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
  }
});