import { memo, useState } from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

import styles from "./ToolIcon.module.css";

const { mainDiv, imageContainer, serviceName, serviceImage } = styles;

const ToolIcon = memo(({ data, isConnectable }) => {
  const [text, setText] = useState(data.text);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={mainDiv}>
      <div className={imageContainer}>
        <div style={{ position: "relative" }}>
          <Handle
            type="source"
            position={Position.Top}
            isConnectable={isConnectable}
          />
          <Handle
            type="target"
            position={Position.Bottom}
            isConnectable={isConnectable}
          />
          <img
            className={serviceImage}
            id="image"
            src={data.image.url}
            alt={data.image.alt}
          />
        </div>
      </div>
      <textarea
        type="text"
        value={text}
        onChange={handleTextChange}
        className={serviceName}
      />
    </div>
  );
});

ToolIcon.displayName = "ToolIcon";

ToolIcon.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isConnectable: PropTypes.bool.isRequired,
};

export default ToolIcon;
