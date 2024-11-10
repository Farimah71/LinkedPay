import axios from "axios";

export const useGetClientIp = async () => {
  const response = await axios
    .get("https://api.ipify.org?format=json")
    .then((response) => {
      return response.data?.ip;
    })
    .catch((error) => {
      console.error("Error fetching the IP address: ", error);
    });

  return response;
};
