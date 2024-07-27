export const navigatorShare = async ({ text, url }: any) => {
  const shareData = {
    title: "Staged",
    text: text,
    url: url,
  };

  try {
    await navigator.share(shareData);
  } catch (e) {
    console.error(e);
  }
};
