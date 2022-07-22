/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "../../components/Layout";

export default function Detail() {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { uri } = router.query;
    const body = JSON.stringify({
      articleUri: uri.toString(),
      apiKey: "5be4ae4a-ce76-4b72-a493-81e2d2261f36",
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    await fetch(
      "https://eventregistry.org/api/v1/article/getArticle",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data[uri].info);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
        fetchOther();
      });
  };

  const fetchOther = async () => {
    console.log("test");
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout headTitle={`Kabar 62 - ${article.title}`} headDesc={article.title}>
      <div className="w-full h-1/2 block">
        <Image
          width={1920}
          height={1080}
          layout="responsive"
          src={article.image}
          alt={article.title}
        />
      </div>
      <div className="w-full h-1/2">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="font-thin text-neutral-500">{article.date}</p>
        <p className="text-justify">{article.body}</p>
      </div>
    </Layout>
  );
}
