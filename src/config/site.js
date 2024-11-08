export function constructMetadata({
  title = "Mind Merge ",
  description = "Mind Merge is a think tank dedicated to empowering young professionals in Rwanda by bridging skills gaps, promoting regional collaboration, and fostering opportunities for innovation and entrepreneurship.",
  image = "/mindmerge.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@uwenayoallain",
    },
    icons,
    metadataBase: new URL("https://mindmerge.tech/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
