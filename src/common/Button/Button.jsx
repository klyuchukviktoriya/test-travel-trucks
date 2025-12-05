import PropTypes from "prop-types";

export default function Button({
  children,
  onClick = () => {},
  className = "",
  type = "button",
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};
