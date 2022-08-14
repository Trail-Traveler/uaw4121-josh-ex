import { Card } from "react-bootstrap";
import classes from "./Section.module.css";

const CardSection = (props) => {
  return (
    <Card className={classes.card}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default CardSection;
