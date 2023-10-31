import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

const getApodApi = async () => {
  try {
    const { error, response } = await withCatch(
      GET,
      apiLocations.APOD("2023-10-10"),
    );
    if (response?.status === 200) {
      return response.data;
    }
    if (error) {
      return [];
    }
    return [];
  } catch (err) {
    console.log("error", err);
    return [];
  }
};

export default async function handler(req, res) {
  const apodResponse = await getApodApi();
  res.status(200).json(apodResponse);
}
