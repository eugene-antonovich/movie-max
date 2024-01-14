import footer from "./footer.module.scss";
import FooterComponent from "../../components/footer/footer.component";

const FooterPage = () => {
  return (
    <footer className={footer.footer}>
      <FooterComponent />
    </footer>
  );
};

export default FooterPage;
