import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

const getMarsPhotosApi = async (params) => {
  const { camera, sol, page, rover } = params;
  const payload = { sol, page, camera };
  if (camera === "ALL") delete payload.camera;
  if (sol.length === 0) payload.sol = 1;
  try {
    const { error, response } = await withCatch(
      GET,
      apiLocations.MARS_PHOTOS(rover),
      payload,
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
  const params = req.query;
  const marsResponse = await getMarsPhotosApi(params);
  res.status(200).json(marsResponse);
}
