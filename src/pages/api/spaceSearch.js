import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

const getSearchResults = async (q, page) => {
  const payload = { q, page, page_size: 10, media_type: "image" };

  try {
    const { error, response } = await withCatch(
      GET,
      apiLocations.SPACE_SEARCH(),
      payload,
    );
    if (response?.status === 200) {
      return response.data.collection.items;
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
  const { q, page = 1 } = req.query;
  const searchResponse = await getSearchResults(q, page);
  res.status(200).json(searchResponse);
}
