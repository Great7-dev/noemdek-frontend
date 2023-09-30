import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const registerHandler = async (data) => {
  try {
    const response = await client.post(`/create`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const handleResend = async () => {
  const email = JSON.parse(localStorage.getItem("Email"));
  const response = await client.post("/forgotpassword", { ...email });
  if (response.status === 200) {
    console.log("link sent to email");
    // toast.success("Verification link sent!");
  }
};

export const login = async (email, password) => {
  try {
    const res = await client.post("/login", {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
