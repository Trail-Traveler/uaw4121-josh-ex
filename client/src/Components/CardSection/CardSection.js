import { Card } from "react-bootstrap";
import classes from "./Section.module.css";

const CardSection = (props) => {
  return (
    <div
      className={`${classes["col-center"]} col-lg-8 col-md-10 col-xxs-11 text-center`}
    >
      <Card className={classes.card}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>{props.children}</Card.Body>
      </Card>
    </div>
  );
};

export default CardSection;
