import propTypes from "prop-types";
function Greeting(props) {
  const welcome = <h4>Welcome {props.username} </h4>;
  const login = <h4> Please login first </h4>;

  return props.isLoggedIn ? welcome : login;
}
Greeting.proptypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};
Greeting.defaultProps = {
  isLoggedIn: false,
  username: "guest",
};

export default Greeting;
