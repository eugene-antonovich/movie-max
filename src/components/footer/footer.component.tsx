import footer from "./footer.module.scss";

const FooterComponent = () => {
  return (
    <div className={footer.footerWrap}>
      <span>® 2024 Movie</span>
      <span>
        All rights reserved, materials are provided for information purposes
        only.
      </span>
    </div>
  );
};

export default FooterComponent;
