import { memo } from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

const ImageNode = memo(({ data, isConnectable }) => {
  return (
    <div>
      <div className="image-container">
        <Handle
          type="target"
          position={Position.Top}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id="a"
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Left}
          id="b"
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="c"
          isConnectable={isConnectable}
        />
        <img id="image" src={data.image.url} alt={data.image.alt} />
      </div>
    </div>
  );
});

ImageNode.displayName = "ImageNode";

ImageNode.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isConnectable: PropTypes.bool.isRequired,
};

export default ImageNode;
