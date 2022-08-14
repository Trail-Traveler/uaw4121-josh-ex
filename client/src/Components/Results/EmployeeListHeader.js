import styles from "./Employee.module.css";
const EmployeeListHeader = () => {
  const headerFields = [
    "Id",
    "Last name, First name",
    "Gender",
    "Birth date",
    "Hire date",
  ];
  const spans = headerFields.map((a) => <span key={a}>{a}</span>);
  return <div className={`${styles.item} ${styles.header}`}>{spans}</div>;
};

export default EmployeeListHeader;
