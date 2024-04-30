import { useState } from "react";

import styles from "./EC2Configurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";

const { mainDiv, configurationHeading, inputFields } = styles;

const EC2Configurations = () => {
  // FORM STATES
  const [ec2InstanceName, setEc2InstanceName] = useState("");
  const [ec2BaseOperatingSystem, setEc2BaseOperatingSystem] = useState("");
  const [ec2AmazonMachineImage, setEc2AmazonMachineImage] = useState("");
  const [ec2InstanceType, setEc2InstanceType] = useState("");
  const [ec2StorageSize, setEc2StorageSize] = useState("");
  const [ec2RootVolumeType, setEc2RootVolumeType] = useState("");

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updateEc2InstanceName = (e) => {
    setEc2InstanceName(e.target.value);
  };

  const updateBaseOperatingSystem = (e) => {
    setEc2BaseOperatingSystem(e.target.value);
  };

  const updateAmazonMachineImage = (e) => {
    setEc2AmazonMachineImage(e.target.value);
  };

  const updateInstanceType = (e) => {
    setEc2InstanceType(e.target.value);
  };

  const updateStorageSize = (e) => {
    setEc2StorageSize(e.target.value);
  };

  const updateRootVolumeType = (e) => {
    setEc2RootVolumeType(e.target.value);
  };

  const toggleRelease = () => {
    setReleased(!released);
  };

  return (
    <div className={mainDiv}>
      <h4 className={configurationHeading}>EC2 Configuration</h4>
      <div className={inputFields}>
        <InputField
          id="ec2InstanceName"
          inputLabel="Instance Name"
          required={true}
          type="text"
          value={ec2InstanceName}
          valueUpdater={updateEc2InstanceName}
        />
        <DropDownSelectField
          id="ec2BaseOS"
          inputLabel="Base Operating System"
          options={["Amazon Linux", "Ubuntu", "Windows"]}
          value={ec2BaseOperatingSystem}
          valueUpdater={updateBaseOperatingSystem}
          required={true}
        />
        <DropDownSelectField
          id="ec2Ami"
          inputLabel="Amazon Machine Image (AMI)"
          options={["Amazon Linux 2", "Ubuntu 20.04", "Windows 2019"]}
          value={ec2AmazonMachineImage}
          valueUpdater={updateAmazonMachineImage}
          required={true}
        />
        <DropDownSelectField
          id="ec2InstanceType"
          inputLabel="Instance Type"
          options={["t2.micro", "t2.small", "t2.medium", "t2.large"]}
          value={ec2InstanceType}
          valueUpdater={updateInstanceType}
          required={true}
        />

        <InputField
          id="ec2StorageSize"
          inputLabel="Storage Size (GB)"
          required={true}
          type="text"
          value={ec2StorageSize}
          valueUpdater={updateStorageSize}
        />

        <DropDownSelectField
          id="ec2RootVolumeType"
          inputLabel="Root Volume Type"
          options={["gp2", "io1", "st1", "sc1"]}
          value={ec2RootVolumeType}
          valueUpdater={updateRootVolumeType}
          required={true}
        />

        <ReleaseButton released={released} toggleRelease={toggleRelease} />
      </div>
    </div>
  );
};

export default EC2Configurations;
