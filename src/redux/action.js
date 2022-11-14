export const login = () => {
  // console.log("login");
  return {
    type: "LOGIN",
  };
};

export const showNews = () => {
  return {
    type: "SHOW_NEWS_FEED",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
