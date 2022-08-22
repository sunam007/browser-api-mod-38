const getCookie = (name) => {
  const cookie = document.cookie;
  const allCookies = cookie.split("; ");
  const findCookies = allCookies.find((c) => c.includes(name));
  if (findCookies) {
    const cookieNameValue = findCookies.split("=");
    return cookieNameValue[1];
  }
};
