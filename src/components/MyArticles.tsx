import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Articles } from "../interfaces/Articles";
import ArticlesCard from "./ArticlesCard";

const MyArticles = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  const fetchArticles = async () => {
    const baseEndPoint = "https://api.spaceflightnewsapi.net/v4/articles";
    try {
      const resp = await fetch(baseEndPoint + "?limit=10");
      if (resp.ok) {
        const articlesObj = await resp.json();
        const articlesArr = articlesObj.results;
        setArticles(articlesArr);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      {articles && (
        <Container>
          <h1 className="mb-5">My Articles</h1>
          <Row>
            {articles.map(article => (
              <Col xs={12} md={4} lg={3} key={`id-${article.id}`}>
                <ArticlesCard article={article} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default MyArticles;
