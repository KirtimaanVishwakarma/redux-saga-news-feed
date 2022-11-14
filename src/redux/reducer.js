export const newsReducer = (data = {}, action) => {
  // console.warn("reducer action", action.result);
  switch (action.type) {
    case "LOGIN":
      // console.log("user login");
      return {
        login: true,
        loading: false,
      };
    case "SHOW_NEWS_FEED":
      return {
        ...data,
        loading: true,
      };
    case "SET_NEWS_FEED":
      return { ...data, news: action.result, loading: false };
    case "LOGOUT":
      // console.log("user logout");
      return {
        login: false,
        data: {},
        loading: false,
      };
    default:
      return { ...data };
  }
};
