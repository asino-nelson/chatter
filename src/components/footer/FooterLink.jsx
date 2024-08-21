import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const FooterLink = ({ page, label }) => {
  return (
    <AnchorLink className="" href={`#${page}`}>
      {label}
    </AnchorLink>
  );
};

export default FooterLink;

FooterLink.propTypes = {
  page: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
