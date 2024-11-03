export const clearAuthToken = () => {
  document.cookie = "token=; path=/; max-age=0; SameSite=Strict; Secure";
};
