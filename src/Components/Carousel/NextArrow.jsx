import { FaChevronRight } from "react-icons/fa";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
export default PrevArrow;
