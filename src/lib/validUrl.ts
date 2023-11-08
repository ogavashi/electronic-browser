export const validUrl = (url: string | null) => {
  if (!url) {
    return null;
  }

  try {
    new URL(url);

    return url;
  } catch (error) {
    return null;
  }
};
