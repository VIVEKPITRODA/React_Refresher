import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <h1>Service</h1>
      <Link to="/use-reducer">
        <button>Open UseReducer Example</button>
      </Link>
      <Link to="/use-state">
        <button>Open UseState Example</button>
      </Link>
      <Link to="/use-effect">
        <button>Open UseEffect Example</button>
      </Link>
      <Link to="/use-context">
        <button>Open UseContext Example</button>
      </Link>
      <Link to="/use-ref">
        <button>Open UseRef Example</button>
      </Link>
      <Link to="/basic-list">
        <button>Open Basic List Example</button>
      </Link>
      <Link to="/weather">
        <button>Open Weather Example</button>
      </Link>
    </>
  );
};

export default Service;
