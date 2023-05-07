import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postWaitListData = async (form: any) => {
  try {
    const postData = await axios.post(
      `${API_URL}/api/user/join/waitlist`,
      form
    );
    return postData.data;
  } catch (err: any) {
    return {
      success: false,
      error: err.response.data.message,
    };
  }
};
