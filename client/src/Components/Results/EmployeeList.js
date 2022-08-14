import { useEffect, useState } from "react";
import Employee from "./Employee";
import styles from "./EmployeeList.module.css";
import EmployeeListHeader from "./EmployeeListHeader";

const EmployeeList = (props) => {
  const [users, setUsers] = useState([]);
  const { data } = props;
  useEffect(() => {
    const items = data.map((user) => <Employee key={user.id} user={user} />);
    setUsers(items);
  }, [data, setUsers]);

  return (
    <div className={styles.list}>
      <EmployeeListHeader />
      {users}
    </div>
  );
};

export default EmployeeList;
