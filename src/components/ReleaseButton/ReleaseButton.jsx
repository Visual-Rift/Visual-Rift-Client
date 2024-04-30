import PropTypes from "prop-types";

import styles from "./ReleaseButton.module.css";

const { releaseButton } = styles;

const ReleaseButton = ({ released, toggleRelease }) => {
  return (
    <div
      className={releaseButton}
      style={{
        backgroundColor: released === true ? "#e9f817" : "#36f446",
        color: released === true ? "#000" : "#fff",
      }}
      onClick={() => toggleRelease()}
    >
      {released === true ? "Released" : "Release"}
    </div>
  );
};

ReleaseButton.propTypes = {
  released: PropTypes.bool.isRequired,
  toggleRelease: PropTypes.func.isRequired,
};

export default ReleaseButton;
