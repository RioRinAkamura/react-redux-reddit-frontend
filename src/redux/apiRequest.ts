import { updateStart, updateSucces, updateError } from "./userSlice";
import axios from "axios";
import { User } from "../components/EditPage";

export const updateUser = async (user: User, dispatch: any) => {
  dispatch(updateStart());
  try {
    const resposne = await axios.post("/update", user);
    dispatch(updateSucces(resposne.data));
  } catch (err) {
    dispatch(updateError());
  }
};
