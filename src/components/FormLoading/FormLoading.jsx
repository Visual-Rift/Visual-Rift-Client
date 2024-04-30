import React from 'react';
import styles from "./FormLoading.module.css";
import loader from '../../../public/infinity.svg';

const FormLoading = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={loader} alt="Loading" className={styles.loaderImage} />
    </div>
  );
};

export default FormLoading;
