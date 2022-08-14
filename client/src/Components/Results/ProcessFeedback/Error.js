import { Alert } from "react-bootstrap";

const Error = (error) => {
  return (
    <Alert variant="danger" className="flex-center">
      Error: {error}
    </Alert>
  );
};

export default Error;
