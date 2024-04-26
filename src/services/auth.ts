import browserStorage from "@/utils/browserStorage";

export const isLoggedIn = () => {
  return !!browserStorage.get("user");
};
