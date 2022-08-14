import { useEffect, useState } from "react";
import Employee from "./Employee";

const EmployeeList = (props) => {
  const [users, setUsers] = useState([]);
  const { data } = props;
  useEffect(() => {
    const items = data.map((user) => <Employee key={user.id} user={user} />);
    setUsers(items);
  }, [data, setUsers]);
  return <ul>{users}</ul>;
};

export default EmployeeList;
