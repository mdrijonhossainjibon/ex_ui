import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
//import { isMobileToast } from "../modules";

const api = axios.create({
  baseURL: "https://6vbx38-5000.csb.app",
});

export const APIREQ = async (method) => {
  //const dispatch = useDispatch();
  const ssbody = {
    // Request body data
    username: "exampleUsername",
    password: "examplePassword",
  };
  try {
    const response = await api.post("/", { data: ssbody }); // Replace '/your-endpoint' with the actual endpoint URL

    ///console.log(response);
    return { response: response.data, Status: response.status };
  } catch (e) {
    //dispatch(isMobileToast({ msg_type: "show", icon: "fail", content: e }));
  }
};
