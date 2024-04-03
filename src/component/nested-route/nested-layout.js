import Footer from "../footer/footer";
import NavigationBar from "../home-page/navigation-bar";

const NestedLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};
export default NestedLayout;
