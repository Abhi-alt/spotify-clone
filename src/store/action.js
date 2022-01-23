export const setToken = (token) => {
  return { type: "SET_TOKEN", payload: token };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setPlaylist = (playlist) => {
  return { type: "SET_PLAYLIST", payload: playlist };
};
export const setWeekly = (weeklyPlaylist) => {
  return {
    type: "SET_WEEKLY",
    payload: weeklyPlaylist,
  };
};
