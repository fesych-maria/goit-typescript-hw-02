import axios from "axios";
import { Result } from "../types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithQuery = async (
  query: string,
  page: number
): Promise<Result> => {
  const response = await axios.get<Result>(
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
