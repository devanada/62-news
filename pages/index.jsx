/* eslint-disable @next/next/no-img-element */

import Layout from "../components/Layout";
import Card from "../components/Card";

export async function getServerSideProps() {
  const body = JSON.stringify({
    keyword: "Indonesia",
    articlesPage: 1,
    articlesCount: 10,
    dataType: ["news"],
    sourceUri: "cnnindonesia.com",
    apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  const response = await fetch(
    "https://eventregistry.org/api/v1/article/getArticles",
    requestOptions
  );
  const data = await response.json();

  return {
    props: { articles: data.articles },
  };
}

export default function Home({ articles }) {
  return (
    <Layout headTitle="Kabar 62" headDesc="Portal berita karya anak bangsa">
      <h1>Latest Articles</h1>
      {articles.results.map((article) => (
        <Card
          key={article.uri}
          image={article.image}
          title={article.title}
          uri={article.uri}
          date={article.date}
          body={article.body}
        />
      ))}
    </Layout>
  );
}
