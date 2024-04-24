import { useState } from "react";
import axios from "axios";

import styles from "./EKSConfigurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const EKSConfigurations = () => {
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [clusterName, setClusterName] = useState("");
  const [nodeType, setNodeType] = useState("");
  const [minNodes, setMinNodes] = useState("");
  const [maxNodes, setMaxNodes] = useState("");
  const [region, setRegion] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updateEksClusterName = (e) => {
    setClusterName(e.target.value);
  };

  const updateEksNodeType = (e) => {
    setNodeType(e.target.value);
  };

  const updateEksMinNodes = (e) => {
    setMinNodes(e.target.value);
  };

  const updateEksMaxNodes = (e) => {
    setMaxNodes(e.target.value);
  };

  const toggleRelease = () => {
    setReleased(!released);
  };

  const submitForm = () => {
    if (githubUrl === "") {
      alert("Please fill all the fields");
      return;
    }

    setLoading(true);

    const formData = {
      githubUrl,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/configure/eks`, formData)
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
        <h4 className={configurationHeading}>EKS Cluster Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="eksClusterName"
            inputLabel="Cluster Name"
            type="text"
            value={clusterName}
            valueUpdater={updateEksClusterName}
            required={true}
          />

          <DropDownSelectField
            id="eksNodeType"
            inputLabel="Node Type"
            value={nodeType}
            options={["t2.micro", "t2.small", "t2.medium", "t2.large"]}
            valueUpdater={updateEksNodeType}
            required={true}
          />

          <InputField
            id="eksMinNodes"
            inputLabel="Minimum Nodes"
            type="number"
            value={minNodes}
            valueUpdater={updateEksMinNodes}
            required={true}
          />

          <InputField
            id="eksMaxNodes"
            inputLabel="Maximum Nodes"
            type="number"
            value={maxNodes}
            valueUpdater={updateEksMaxNodes}
            required={true}
          />

          <DropDownSelectField
            id="eksRegion"
            inputLabel="Region"
            value={region}
            options={["us-east-1", "us-west-1", "us-west-2", "eu-west-1"]}
            valueUpdater={(e) => setRegion(e.target.value)}
            required={true}
          />

          <InputField
            id="eksGitHubURL"
            inputLabel="GitHub URL"
            type="text"
            value={githubUrl}
            valueUpdater={(e) => setGithubUrl(e.target.value)}
            required={true}
          />

          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default EKSConfigurations;
