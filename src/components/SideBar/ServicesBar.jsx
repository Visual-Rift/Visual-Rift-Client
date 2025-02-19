import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ServicesBar.module.css";
import SideBarDiv from "../SideBarDiv/SideBarDiv";

const { sideBar, sideBarDiv, sideBarHeading, cloudProviderButton } = styles;

const ServicesBar = ({ setSelectedService }) => {
  const [cloudProvider, setCloudProvider] = useState("Amazon Web Services");

  const frequentlyUsedServices = [
    {
      name: "EC2",
      imgUrl: "/icons/computeServices/ec2.png",
      isSelected: false,
    },
    {
      name: "EKS",
      imgUrl: "/icons/computeServices/eks.png",
      isSelected: false,
    },
    {
      name: "ECR",
      imgUrl: "/icons/computeServices/ecr.png",
      isSelected: false,
    },
    {
      name: "Container",
      imgUrl: "/icons/devOps/docker.png",
      isSelected: false,
    },
  ];

  const computingServices = [
    {
      name: "EC2",
      imgUrl: "/icons/computeServices/ec2.png",
      isSelected: false,
    },
    {
      name: "ECR",
      imgUrl: "/icons/computeServices/ecr.png",
      isSelected: false,
    },
    {
      name: "EKS",
      imgUrl: "/icons/computeServices/eks.png",
      isSelected: false,
    },
    {
      name: "Lambda",
      imgUrl: "/icons/computeServices/lambda.png",
      isSelected: false,
    },
  ];

  const networkServices = [
    {
      name: "VPC",
      imgUrl: "/icons/networkServices/vpc.png",
      isSelected: false,
    },
    {
      name: "API gateway",
      imgUrl: "/icons/networkServices/apigateway.png",
      isSelected: false,
    },
    {
      name: "Cloud Front",
      imgUrl: "/icons/networkServices/cloudfront.png",
      isSelected: false,
    },
    {
      name: "Internet Gateway",
      imgUrl: "/icons/networkServices/internetgateway.png",
      isSelected: false,
    },
    {
      name: "Public Subnet",
      imgUrl: "/icons/networkServices/publicsubnet.png",
      isSelected: false,
    },
    {
      name: "Private Subnet",
      imgUrl: "/icons/networkServices/privatesubnet.png",
      isSelected: false,
    },
    {
      name: "Route Table",
      imgUrl: "/icons/networkServices/routetable.png",
      isSelected: false,
    },
    {
      name: "ELB",
      imgUrl: "/icons/networkServices/elb.png",
      isSelected: false,
    },
    {
      name: "Route 53",
      imgUrl: "/icons/networkServices/route53.png",
      isSelected: false,
    },
  ];

  const databaseServices = [
    {
      name: "DynamoDB",
      imgUrl: "/icons/databaseStorage/dynamodb.png",
      isSelected: false,
    },
    {
      name: "AWS RDS",
      imgUrl: "/icons/databaseStorage/rds.png",
      isSelected: false,
    },
    {
      name: "AWS EBS",
      imgUrl: "/icons/databaseStorage/ebs.png",
      isSelected: false,
    },
    {
      name: "AWS S3",
      imgUrl: "/icons/databaseStorage/awss3.png",
      isSelected: false,
    },
    {
      name: "MongoDB",
      imgUrl: "/icons/databaseStorage/mongodb.png",
      isSelected: false,
    },
    {
      name: "PostgreSQL",
      imgUrl: "/icons/databaseStorage/postgresql.png",
      isSelected: false,
    },
    {
      name: "MySQL",
      imgUrl: "/icons/databaseStorage/mysql.png",
      isSelected: false,
    },
  ];

  const analyticsServices = [
    {
      name: "Kibana",
      imgUrl: "/icons/analyticsServices/kibana.png",
      isSelected: false,
    },
    {
      name: "Kubo",
      imgUrl: "/icons/analyticsServices/kubo.png",
      isSelected: false,
    },
  ];

  const selectService = (serviceImgUrl, serviceName) => {
    setSelectedService({ serviceImgUrl, serviceName });
  };

  return (
    <div className={sideBar}>
      <div className={sideBarDiv} style={{ border: "none" }}>
        <h4 className={sideBarHeading}>Cloud Provider</h4>
        <button className={cloudProviderButton}>{cloudProvider}</button>
      </div>

      <SideBarDiv
        serviceName={"Frequently Used Services"}
        services={frequentlyUsedServices}
        selectService={selectService}
      />
      <SideBarDiv
        serviceName={"Computing Services"}
        services={computingServices}
        selectService={selectService}
      />
      <SideBarDiv
        serviceName={"Network Services"}
        services={networkServices}
        selectService={selectService}
      />
      <SideBarDiv
        serviceName={"Database Services"}
        services={databaseServices}
        selectService={selectService}
      />
      <SideBarDiv
        serviceName={"Analytics Services"}
        services={analyticsServices}
        selectService={selectService}
      />
    </div>
  );
};

ServicesBar.propTypes = {
  setSelectedService: PropTypes.func.isRequired,
};

export default ServicesBar;
