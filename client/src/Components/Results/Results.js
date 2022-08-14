import EmployeeList from "./EmployeeList";
import Error from "./ProcessFeedback/Error";
import LandingNotice from "./ProcessFeedback/LandingNotice";
import Loading from "./ProcessFeedback/Loading";
import NoResult from "./ProcessFeedback/NoResults";
import Success from "./ProcessFeedback/Success";
import UnknownError from "./ProcessFeedback/UnknownError";

const Results = (props) => {
  const { data, isLoading, error, searchTerm } = props;
  let message = "";
  if (isLoading) {
    message = <Loading />;
  } else if (error) {
    message = <Error error={error} />;
  } else if (undefined === searchTerm) {
    return <LandingNotice />;
  } else if (0 === data.length) {
    message = <NoResult searchTerm={searchTerm} />;
  } else if (!(0 === data.length)) {
    message = (
      <>
        <Success count={data.length} searchTerm={searchTerm} />
        <EmployeeList data={data} />
      </>
    );
  } else {
    message = <UnknownError />;
  }
  return message;
};

export default Results;
