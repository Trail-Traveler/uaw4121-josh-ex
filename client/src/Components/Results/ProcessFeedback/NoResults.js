import { Alert } from "react-bootstrap";

const NoResult = ({ searchTerm }) => {
  return (
    <Alert variant="warning" className="flex-center">
      No results for {searchTerm}
    </Alert>
  );
};

export default NoResult;
