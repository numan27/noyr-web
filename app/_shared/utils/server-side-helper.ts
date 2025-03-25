"use server";
import cookie from "cookie";
import { getAuthentication } from "routes/helper";
function parseCookies(req: any) {
  return cookie.parse(
    req
      ? req.headers.cookie || req.headers.get("cookie") || "" || ""
      : document.cookie
  );
}

const getDataFromCookies = (req: any, key: string) => {
  if (Object.keys(req).includes(key)) {
    return JSON.parse(req[key]);
  } else {
    return { isLoggedIn: false };
  }
};

const redirectBasedOnRole = (req: any, pathName: string) => {
  if (req) {
    const persistState = getDataFromCookies(parseCookies(req), "user");

    let isAuthenticated = getAuthentication(persistState.isLoggedIn, pathName);
    return isAuthenticated;
  }
};

export { redirectBasedOnRole };
