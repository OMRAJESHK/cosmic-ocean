import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

const getNeoApi = async (params) => {
  const { start_date, end_date, page, lookUp = 1 } = params;
  const payload = { start_date, end_date, page };

  try {
    const { error, response } = await withCatch(
      GET,
      apiLocations.NEO(lookUp),
      payload,
    );

    if (response?.status === 200) {
      console.log("server->", payload, apiLocations.NEO(lookUp), response.data);
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
  const neoResponse = await getNeoApi(params);
  res.status(200).json(neoResponse);
}
