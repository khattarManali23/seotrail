import StepperComponent from "./components/StepperComponent";
import { HeaderTabs } from "./components/HeaderTabs";
import data from "./data.json";
import { NextSeo } from "next-seo";

function About() {
  const { user, tabs, urls } = data;
  return (
    <>
      <NextSeo
        title="About"
        description="This is the about page"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <HeaderTabs user={user} tabs={tabs} urls={urls} />
      <StepperComponent />
    </>
  );
}

export default About;
