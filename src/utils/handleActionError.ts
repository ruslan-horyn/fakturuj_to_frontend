import { getErrorMessage } from "./getErrorMessage";

export const handleActionError = (error: unknown) => {
  const message = getErrorMessage(error)
  alert(message);
};
 