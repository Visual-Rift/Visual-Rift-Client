import { useState } from "react";
import axios from "axios";

import styles from "./RDSConfigurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const RDSConfigurations = () => {
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [rdsName, setRdsName] = useState("");
  const [rdsEngineName, setRdsEngineName] = useState("");
  const [rdsEngineVersion, setRdsEngineVersion] = useState("");
  const [rdsUsername, setRdsUsername] = useState("");
  const [rdsPassword, setRdsPassword] = useState("");
  const [rdsClass, setRdsClass] = useState("");
  const [rdsRegion, setRdsRegion] = useState("");
  const [rdsAllocatedStorage, setRdsAllocatedStorage] = useState("");

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updaterdsName = (e) => {
    setRdsName(e.target.value);
  };

  const updaterdsEngineName = (e) => {
    setRdsEngineName(e.target.value);
  };
  const updaterdsEngineVersion = (e) => {
    setRdsEngineVersion(e.target.value);
  };

  const updaterdsUsername = (e) => {
    setRdsUsername(e.target.value);
  };

  const updaterdsPassword = (e) => {
    setRdsPassword(e.target.value);
  };

  const updaterdsClass = (e) => {
    setRdsClass(e.target.value);
  };

  const updaterdsRegion = (e) => {
    setRdsRegion(e.target.value);
  };

  const updaterdsAllocatedStorage = (e) => {
    setRdsAllocatedStorage(e.target.value);
  };
  const toggleRelease = () => {
    setReleased(!released);
  };

  const submitForm = () => {
    setLoading(true);

    const formData = {
      rdsName,
      rdsEngineName,
      rdsEngineVersion,
      rdsUsername,
      rdsPassword,
      rdsClass,
      rdsRegion,
      rdsAllocatedStorage,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/configure/rds`, formData)
      .then((res) => {
        console.log(res.data);
        toggleRelease();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={mainDiv}>
      {loading && (
        <div className={loadingDiv}>
          <FormLoading />
        </div>
      )}
      <div style={{ width: "100%" }}>
        <h4 className={configurationHeading}>RDS Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="rdsName"
            inputLabel="RDS Name"
            type="text"
            value={rdsName}
            valueUpdater={updaterdsName}
            required={true}
          />
          <InputField
            id="rdsEngineName"
            inputLabel="RDS Engine Name"
            type="text"
            value={rdsEngineName}
            valueUpdater={updaterdsEngineName}
            required={true}
          />
          <InputField
            id="rdsEngineVersion"
            inputLabel="RDS Engine Version"
            type="text"
            value={rdsEngineVersion}
            valueUpdater={updaterdsEngineVersion}
            required={true}
          />
          <InputField
            id="rdsUsername"
            inputLabel="RDS Username"
            type="text"
            value={rdsUsername}
            valueUpdater={updaterdsUsername}
            required={true}
          />
          <InputField
            id="rdsPassword"
            inputLabel="RDS Password"
            type="password"
            value={rdsPassword}
            valueUpdater={updaterdsPassword}
            required={true}
          />
          <InputField
            id="rdsClass"
            inputLabel="RDS Class"
            type="text"
            value={rdsClass}
            valueUpdater={updaterdsClass}
            required={true}
          />
          <DropDownSelectField
            id="rdsRegion"
            inputLabel="Region"
            value={rdsRegion}
            options={["us-east-1", "us-west-1", "us-west-2", "eu-west-1"]}
            valueUpdater={updaterdsRegion}
            required={true}
          />
          <InputField
            id="rdsAllocatedStorage"
            inputLabel="Allocated Storage"
            type="number"
            value={rdsAllocatedStorage}
            valueUpdater={updaterdsAllocatedStorage}
            required={true}
          />
          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default RDSConfigurations;
