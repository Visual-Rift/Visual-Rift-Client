import styles from "./FormLoading.module.css";

const FormLoading = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={"/infinity.svg"} alt="Loading" className={styles.loaderImage} />
    </div>
  );
};

export default FormLoading;
