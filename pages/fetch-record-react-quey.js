import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextSeo } from "next-seo";
import { HeaderTabs } from "./components/HeaderTabs";
import users from "./data.json";

const GetData = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
export default function FetchRecord() {
  const { user, tabs, urls } = users;
  const { data, isLoading, isError } = useQuery(["spacex"], GetData, {
    // keepPreviousData: true,
  });
  return (
    <>
      <NextSeo
        title="Hello"
        description="This is the bac page"
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
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        data.data?.map((x) => {
          return <div key={x.id}>{x.name}</div>;
        })}
    </>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["spacex"],GetData);
// //   await queryClient.prefetchQuery(["spacex"], GetData);
//   return {
//     props: {
//         dehydratedState: dehydrate(queryClient) || null,
//     },
//   };
// }
