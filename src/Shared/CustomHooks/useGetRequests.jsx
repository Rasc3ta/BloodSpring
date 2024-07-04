import { useContext } from "react";
import { authContext } from "../../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { myAxios } from "../../Axios.config";

const useGetRequests = () => {
  const { user } = useContext(authContext);
  const {
    data = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myDonationRequests"],
    queryFn: async () =>
      await myAxios.get(`/myDonationRequests?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }),
  });
  return { data: data.data, isPending, refetch };
};

export default useGetRequests;
