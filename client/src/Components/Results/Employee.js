const Employee = (props) => {
  const { user } = props;
  return <li>{user.first_name}</li>;
};

export default Employee;
