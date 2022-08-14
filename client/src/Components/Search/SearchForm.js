import { forwardRef } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const SearchForm = forwardRef((props, ref) => {
  return (
    <Form>
      <FormGroup>
        <FormLabel className="flex-center">Enter Last name</FormLabel>
        <FormControl type="text" ref={ref} />
      </FormGroup>
      <div className="text-center">
        <Button
          onClick={props.searchClick}
          variant="primary"
          type="submit"
          className="custom-btn"
        >
          Search
        </Button>
      </div>
    </Form>
  );
});

export default SearchForm;
