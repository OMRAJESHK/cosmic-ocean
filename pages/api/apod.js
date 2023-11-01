import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

const getApodApi = async (date) => {
  try {
    const { error, response } = await withCatch(GET, apiLocations.APOD(date));
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
  const { date } = req.query;
  const apodResponse = await getApodApi(date);
  res.status(200).json(apodResponse);
}
