import { COOKIE } from "../Constants/Constant";

export default function Authenticate() {
  let key = COOKIE.KEY;
  return { key: "" };
}
