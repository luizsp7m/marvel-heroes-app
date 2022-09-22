import axios from "axios";
import md5 from "md5";

import { MARVEL_API_PUBLIC_KEY, MARVEL_API_PRIVATE_KEY } from "@env";

const publicKey = MARVEL_API_PUBLIC_KEY;
const privateKey = MARVEL_API_PRIVATE_KEY;

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