import { httpRequests } from "../utils";

// get all album from db
export const getAllAlbum = async () => {
  try {
    const res = await httpRequests.get(`api/media/get-album/0`);
    return res.album;
  } catch (error) {
    console.log(error);
  }
};

// get song list by genre
export const getAlbumType = async (type: any, page: any) => {
  try {
    const res = await httpRequests.get(`api/media/get-album/${type}/${page}`);
    return res.album;
  } catch (error) {
    console.log(error);
  }
};

// get song list by singer
export const getSingerAlbum = async (page: any) => {
  try {
    const res = await httpRequests.get(`api/media/get-singer/${page}`);
    return res.singer;
  } catch (error) {
    console.log(error);
  }
};
