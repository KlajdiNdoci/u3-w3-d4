import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Articles } from "../interfaces/Articles";
import { Badge, Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const params = useParams();

  const [singleArticle, setSingleArticle] = useState<Articles>();

  const fetchDetails = async () => {
    try {
      const baseEndPoint = "https://api.spaceflightnewsapi.net/v4/articles/";
      const resp = await fetch(baseEndPoint + params.id + "/");
      if (resp.ok) {
        const article = await resp.json();
        setSingleArticle(article);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const publishedDate = singleArticle?.published_at ? new Date(singleArticle.published_at) : null;

  return (
    <>
      {singleArticle && (
        <Container>
          <h1 className="mb-5">Details</h1>
          <img className="card-img-top mb-3" src={singleArticle?.image_url} alt={singleArticle?.news_site} />
          <div className="text-start">
            <h2 className="mb-3">{singleArticle?.title}</h2>
            <p className="mb-3">{singleArticle?.summary}</p>
          </div>
          <Row>
            <div className="d-flex justify-content-between">
              <div> Published on: {publishedDate?.toDateString()}</div>
              <Badge>{singleArticle?.news_site}</Badge>
            </div>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Details;
