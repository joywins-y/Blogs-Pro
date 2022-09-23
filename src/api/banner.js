import axios from "axios";

export async function getBanners() {
  const resp = await axios.get("/api/banner");
  console.log(resp.data);
}

getBanners();
