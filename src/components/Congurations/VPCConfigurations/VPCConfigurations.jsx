import { useState } from "react";
import axios from "axios";

import styles from "./VPCConfigurations.module.css";

import InputField from "../../InputField/InputField";
import DropDownSelectField from "../../DropDownSelectField/DropDownSelectField";
import ReleaseButton from "../../ReleaseButton/ReleaseButton";
import FormLoading from "../../FormLoading/FormLoading";

const { mainDiv, configurationHeading, inputFields, loadingDiv } = styles;

const VPCConfigurations = () => {
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [vpcName, setVpcName] = useState("");
  const [vpcRegion, setVpcRegion] = useState("");
  const [vpcCIDRBlock, setVpcCIDRBlock] = useState("");
  // RELEASE STATE
  const [released, setReleased] = useState(false);

  //   UPDATE HANDLERS

  const updatevpcName = (e) => {
    setVpcName(e.target.value);
  };

  const updatevpcRegion = (e) => {
    setVpcRegion(e.target.value);
  };

  const updatevpcCIDRBlock = (e) => {
    setVpcCIDRBlock(e.target.value);
  };
  const toggleRelease = () => {
    setReleased(!released);
  };

  const submitForm = () => {
    setLoading(true);

    const formData = {
      vpcName,
      vpcRegion,
      vpcCIDRBlock,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/v1/configure/vpc`, formData)
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
        <h4 className={configurationHeading}>VPC Configuration</h4>
        <div className={inputFields}>
          <InputField
            id="vpcName"
            inputLabel="VPC Name"
            type="text"
            value={vpcName}
            valueUpdater={updatevpcName}
            required={true}
          />
          <DropDownSelectField
            id="vpcRegion"
            inputLabel="Region"
            value={vpcRegion}
            options={["us-east-1", "us-west-1", "us-west-2", "eu-west-1"]}
            valueUpdater={updatevpcRegion}
            required={true}
          />
          <InputField
            id="vpcCIDRBlock"
            inputLabel="CIDR Block"
            type="text"
            value={vpcCIDRBlock}
            valueUpdater={updatevpcCIDRBlock}
            required={true}
          />
          <ReleaseButton released={released} toggleRelease={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default VPCConfigurations;
