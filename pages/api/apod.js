import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";

function getLastFourDates(currentDate) {
  let lastFourDates = [];
  [0, 1, 2, 3, 4].forEach((dateItem) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - dateItem);
    lastFourDates = [...lastFourDates, date.toISOString().split("T")[0]];
  });
  return lastFourDates;
}

function getMultiApis(lastFourDates) {
  let urlList = [];
  lastFourDates.forEach((date) => {
    urlList = [...urlList, apiLocations.APOD(date)];
  });
  return urlList;
}

const appendApodId = (data) => {
  return { id: crypto.randomUUID(), ...data };
};
const getApodApi = async () => {
  try {
    const currentDate = new Date();
    const lastFourDates = getLastFourDates(currentDate);
    const multiApis = getMultiApis(lastFourDates);
    const apod0 = await withCatch(GET, multiApis[0]);
    const apod1 = await withCatch(GET, multiApis[1]);
    const apod2 = await withCatch(GET, multiApis[2]);
    const apod3 = await withCatch(GET, multiApis[3]);
    const apod4 = await withCatch(GET, multiApis[4]);

    const formattedData = [
      appendApodId(apod0.response.data),
      appendApodId(apod1.response.data),
      appendApodId(apod2.response.data),
      appendApodId(apod3.response.data),
      appendApodId(apod4.response.data),
    ];

    if (formattedData?.length > 0) {
      return formattedData;
    }
  } catch (err) {
    console.log("error", err);
    return [];
  }
};

export default async function handler(req, res) {
  const apodResponse = await getApodApi();

  res.status(200).json(apodResponse);
}
