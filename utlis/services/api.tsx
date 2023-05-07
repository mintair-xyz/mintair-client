import axios from "axios";

export const postWaitListData = async (form: any) => {
  try {
    const postData = await axios.post(
      `https://mintair-server.up.railway.app/api/user/join/waitlist`,
      form
    );
    return postData.data;
  } catch (err) {
    throw err;
  }
};
