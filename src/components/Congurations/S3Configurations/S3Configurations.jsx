import { useState } from "react";
import axios from "axios";

import styles from "./S3Configurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const S3Configurations = () => {
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [s3BucketName, setS3BucketName] = useState("");
  const [s3Region, setS3Region] = useState("");

  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updateS3BucketName = (e) => {
    setS3BucketName(e.target.value);
  };

  const updateS3Region = (e) => {
    setS3Region(e.target.value);
  };

  const toggleRelease = () => {
    setReleased(!released);
  };

  const submitForm = () => {
    setLoading(true);

    const formData = {
      s3BucketName,
      s3Region,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/configure/s3`, formData)
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
        <h4 className={configurationHeading}>S3 Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="s3BucketName"
            inputLabel="Bucket Name"
            type="text"
            value={s3BucketName}
            valueUpdater={updateS3BucketName}
            required={true}
          />
          <DropDownSelectField
            id="s3Region"
            inputLabel="Region"
            value={s3Region}
            options={["us-east-1", "us-west-1", "us-west-2", "eu-west-1"]}
            valueUpdater={updateS3Region}
            required={true}
          />
          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default S3Configurations;
