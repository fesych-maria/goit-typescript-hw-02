import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithQuery = async (query, page) => {
  const response = await axios.get(
    `/search/photos?query=${query}&page=${page}`,
    {
      headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID E27gQ19yIHaZrQ8ME18LOCow8O-cM01HqOs_0Nlprrc",
      },
      params: {
        orientation: "landscape",
      },
    }
  );
  return response.data;
};
