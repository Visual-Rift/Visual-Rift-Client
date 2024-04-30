import PropTypes from "prop-types";
import styles from "./SideBarDiv.module.css";

const {
  sideBarDiv,
  sideBarHeading,
  sideBarServices,
  cloudServices,
  cloudServiceImg,
  cloudServiceName,
} = styles;

const SideBarDiv = ({ serviceName, services, selectService }) => {
  return (
    <div className={sideBarDiv}>
      <h4 className={sideBarHeading}>{serviceName}</h4>
      <div className={sideBarServices}>
        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => selectService(service.imgUrl, service.name)}
            className={cloudServices}
          >
            <img
              src={service.imgUrl}
              alt={service.name}
              className={cloudServiceImg}
            />
            <p className={cloudServiceName}>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SideBarDiv.propTypes = {
  serviceName: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectService: PropTypes.func.isRequired,
};

export default SideBarDiv;
