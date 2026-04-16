import React from "react";
import Image from "next/image";
import styles from "./ImageBanner.module.css";

const ImageBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <Image
        src="/Lady-stretching.webp"
        alt="Woman stretching outdoors against blue sky"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        className={styles.image}
      />
    </div>
  );
};

export default ImageBanner;
