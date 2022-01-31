import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../Providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
