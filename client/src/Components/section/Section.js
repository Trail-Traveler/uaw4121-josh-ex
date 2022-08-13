import { Card } from "react-bootstrap";
import classes from "./Section.module.css";

const Section = (props) => {
  return <Card className={classes.card}>{props.children}</Card>;
};

export default Section;
