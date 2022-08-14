import { Alert, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Alert variant="info" className="flex-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Alert>
  );
};

export default Loading;
