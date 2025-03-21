import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <h2>You are invited to choose a profile to continue</h2>
      <form action="">
        <input type="text"/>
      </form>
      <Link to="profile/popeye">
        Popeye's Profile
      </Link>
      <br />
      <Link to="profile/spinach">
        Spinach's Profile
      </Link>
      <br />
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;