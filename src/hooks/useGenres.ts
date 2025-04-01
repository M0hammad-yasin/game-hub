import { useQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
