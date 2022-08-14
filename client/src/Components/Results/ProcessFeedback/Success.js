import { Alert } from "react-bootstrap";

const Success = ({ count, searchTerm }) => {
  return (
    <Alert variant="success" className="flex-center">
      {count} results for {searchTerm}
    </Alert>
  );
};

export default Success;
