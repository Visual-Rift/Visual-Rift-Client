import PropTypes from "prop-types";

import styles from "./ConfigurationBar.module.css";
import EC2Configurations from "../Congurations/EC2Configurations/EC2Configurations";
import EKSConfigurations from "../Congurations/EKSConfigurations/EKSConfigurations";
import ApplicationConfigurations from "../Congurations/ApplicationConfigurations/ApplicationConfigurations";

const { sideBar } = styles;

const ConfigurationBar = ({ selectedNode }) => {
  const node =
    selectedNode?.target?.alt?.toUpperCase() ||
    selectedNode?.target?.value?.toUpperCase();

  return (
    <div className={sideBar}>
      {node === "EC2" && <EC2Configurations />}
      {node === "EKS" && <EKSConfigurations />}
      {(node === "APP" || selectedNode === null) && (
        <ApplicationConfigurations />
      )}
    </div>
  );
};

ConfigurationBar.propTypes = {
  selectedNode: PropTypes.object,
};

export default ConfigurationBar;
