import PropTypes from "prop-types";

import styles from "./ConfigurationBar.module.css";
import EC2Configurations from "../Congurations/EC2Configurations/EC2Configurations";
import EKSConfigurations from "../Congurations/EKSConfigurations/EKSConfigurations";
import ApplicationConfigurations from "../Congurations/ApplicationConfigurations/ApplicationConfigurations";
import ECRConfigurations from "../Congurations/ECRConfigurations/ECRConfigurations";
import S3Configurations from "../Congurations/S3Configurations/S3Configurations";
import RDSConfigurations from "../Congurations/RDSConfigurations/RDSConfigurations";

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
      {node === "ECR" && <ECRConfigurations />}
      {node === "AWS S3" && <S3Configurations />}
      {node === "AWS RDS" && <RDSConfigurations />}
    </div>
  );
};

ConfigurationBar.propTypes = {
  selectedNode: PropTypes.object,
};

export default ConfigurationBar;
