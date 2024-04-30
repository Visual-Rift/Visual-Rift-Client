import axios from "axios";
import { useState } from "react";

import styles from "./ApplicationConfigurations.module.css";

import InputField from "../../InputField/InputField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const ApplicationConfigurations = () => {
  // FORM STATES
  const [githubUrl, setGithubUrl] = useState("");

  const [loading, setLoading] = useState(false);

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  // UPDATE HANDLERS
  const updateAppGitHubURL = (e) => {
    setGithubUrl(e.target.value);
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
      .post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/configure/quickDeploy`,
        formData
      )
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
        <h4 className={configurationHeading}>Application Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="appGitHubURL"
            inputLabel="GitHub URL"
            required={true}
            type="text"
            value={githubUrl}
            valueUpdater={updateAppGitHubURL}
          />

          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationConfigurations;
