import { useState } from "react";
import axios from "axios";

import styles from "./ECRConfigurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const ECRConfigurations = () => {
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [ecrRepoName, setEcrRepoName] = useState("");
  const [ecrRegion, setEcrRegion] = useState("");

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updateEcrRepoName = (e) => {
    setEcrRepoName(e.target.value);
  };

  const updateEcrRegion = (e) => {
    setEcrRegion(e.target.value);
  };

  const toggleRelease = () => {
    setReleased(!released);
  };

  const submitForm = () => {
    setLoading(true);

    const formData = {
      ecrRepoName,
      ecrRegion,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/configure/ecr`, formData)
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
        <h4 className={configurationHeading}>ECR Cluster Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="ecrRepoName"
            inputLabel="ECR Repo Name"
            type="text"
            value={ecrRepoName}
            valueUpdater={updateEcrRepoName}
            required={true}
          />
          <DropDownSelectField
            id="ecrRegion"
            inputLabel="Region"
            value={ecrRegion}
            options={["us-east-1", "us-west-1", "us-west-2", "eu-west-1"]}
            valueUpdater={updateEcrRegion}
            required={true}
          />
          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default ECRConfigurations;
