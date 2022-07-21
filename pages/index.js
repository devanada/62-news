import { useEffect } from "react";

import Layout from "../components/Layout";

// --==Server Side Rendering==--
// export async function getServerSideProps() {
//   const body = {
//     keyword: "Indonesia",
//     articlesPage: 1,
//     articlesCount: 10,
//     dataType: ["news"],
//     apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
//   };

//   const requestOptions = {
//     method: "POST",
//     body,
//   };

//   const response = await fetch("https://inshorts.deta.dev/news?category=all");
//   const data = await response.json();

//   return {
//     props: { news: data },
//   };
// }

// --==Static Site Generation==--
// export async function getStaticProps() {
//   const body = {
//     keyword: "Indonesia",
//     articlesPage: 1,
//     articlesCount: 10,
//     dataType: ["news"],
//     apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
//   };

//   const requestOptions = {
//     method: "POST",
//     body,
//   };

//   const response = await fetch("https://inshorts.deta.dev/news?category=all");
//   const data = await response.json();

//   return {
//     props: { news: data },
//   };
// }

// --==Incremental Site Regeneration==--
export async function getStaticProps() {
  const body = {
    keyword: "Indonesia",
    articlesPage: 1,
    articlesCount: 10,
    dataType: ["news"],
    apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
  };

  const requestOptions = {
    method: "POST",
    body,
  };

  const response = await fetch("https://inshorts.deta.dev/news?category=all");
  const data = await response.json();

  return {
    props: { news: data },
    revalidate: 1,
  };
}

export default function Home(props) {
  console.log(props);
  // --==Client Side Rendering==--
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const response = await fetch("https://inshorts.deta.dev/news?category=all");
    const data = await response.json();
    console.log(data);
  };

  return (
    <Layout headTitle="Kabar 62" headDesc="Portal berita karya anak bangsa">
      <h1>Latest News</h1>
    </Layout>
  );
}
