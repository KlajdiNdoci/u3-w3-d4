import { Button, Card } from "react-bootstrap";
import { Articles } from "../interfaces/Articles";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  article: Articles;
}

const ArticlesCard = ({ article }: SingleArticleProps) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body className="d-flex row">
        <Card.Title className="">{article.title}</Card.Title>
        <Card.Text className="text-truncate">{article.summary}</Card.Text>
        <Link className="mt-auto" to={`/details/${article.id}`}>
          <Button variant="primary">More details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticlesCard;
