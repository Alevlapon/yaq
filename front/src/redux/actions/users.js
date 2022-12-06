export const initUser = (user) => (dispatch) => {
  const token = window.localStorage.getItem("token");
  fetchProductsByFilter(user).then((data) => console.log(data));
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
