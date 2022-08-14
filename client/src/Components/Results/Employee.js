import styles from "./Employee.module.css";
const Employee = (props) => {
  const { user } = props;
  user.f_birth_date = new Date(user.birth_date).toDateString();
  user.f_hire_date = new Date(user.hire_date).toDateString();
  user.last_name_first_name = `${user.last_name}, ${user.first_name}`;
  const fields = [
    "id",
    "last_name_first_name",
    "gender",
    "f_birth_date",
    "f_hire_date",
  ];
  const values = fields.map((f) => <span key={f}>{user[f]}</span>);
  return <div className={styles.item}>{values}</div>;
};

export default Employee;

//
