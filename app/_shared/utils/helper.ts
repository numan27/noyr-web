"use client";
// import { resetAuthReducer } from "redux/reducers/authSlice";
// import { store } from "redux/store";
import { routeConstant } from "routes/constants";
import { SUPPORTED_FORMATS } from "./enum";

function normalizePath(path: string): string {
  return path.split("?")[0].replace(/\/$/, "");
}

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

function isImage(filetype: string): boolean {
  if (SUPPORTED_FORMATS.includes(filetype)) {
    return true;
  } else {
    return false;
  }
}

function findScreenTitle(pathname: string): string {
  const normalizedPath = normalizePath(pathname);

  const matchedRoute = Object.values(routeConstant).find(
    (item) => item.path === normalizedPath
  );

  if (!matchedRoute) {
    console.warn(`No matching route found for pathname: ${normalizedPath}`);
    return "";
  }

  return matchedRoute.title || "Untitled";
}

// const resetRedux = () => {
//   const { auth }: any = store.getState().root;
//   if (auth?.token) {
//     store.dispatch(resetAuthReducer());
//     if (document) {
//       document.cookie.split(";").forEach(function (c) {
//         document.cookie = c
//           .replace(/^ +/, "")
//           .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//       });
//     }
//   }
// };

function getTopPosition(divElement: HTMLElement) {
  const rect = divElement.getBoundingClientRect();
  const top = rect.top - document.documentElement.clientTop;
  return top;
}

function getLeftPosition(divElement: HTMLElement) {
  const rect = divElement.getBoundingClientRect();
  const left = rect.left - document.documentElement.clientLeft;
  return left;
}

export {
  findScreenTitle,
  getLeftPosition,
  getTopPosition,
  getWindowDimensions,
  isImage,
  // resetRedux,
};
