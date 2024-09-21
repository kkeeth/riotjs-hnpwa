export const fetchData = ({ type, page }) => {
  fetch(`https://node-hnapi.herokuapp.com/${type}?page=${page}`)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("API response error");
    })
    .then((res) => {
      return {
        posts: res,
        hasMore: res.length === 30,
      };
    })
    .catch((e) => console.error(e.message));
};
