import DashBoard from "../home-page/dashboard";
import NestedLayout from "../nested-route/nested-layout";

const PrivateRoute = ({ value, children }) => {
  let values;
  if (value === "beforeLogin") {
    values = !sessionStorage.getItem("userId");
  } else if (value === "success") {
    values = sessionStorage.getItem("bought");
  } else {
    values = sessionStorage.getItem("userId");
  }

  if (values) {
    return children;
  } else {
    return (
      <NestedLayout>
        <DashBoard />
      </NestedLayout>
    );
  }
};
export default PrivateRoute;
