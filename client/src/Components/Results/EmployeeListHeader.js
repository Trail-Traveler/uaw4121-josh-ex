import styles from "./Employee.module.css";
const EmployeeListHeader = () => {
  const headerFields = [
    "Id",
    <>
      <span>Last name, </span>
      <span className="text-nowrap">First name</span>
    </>,
    "Gender",
    "Birth date",
    "Hire date",
  ];
  const spans = headerFields.map((a) => <span key={a}>{a}</span>);
  return <div className={`${styles.item} ${styles.header}`}>{spans}</div>;
};

export default EmployeeListHeader;
