import { useState } from "react";
import styles from "./Certificate.module.css";
import certificates from "../../data/certificates.json";

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        {certificates.map((cert, idx) => (
          <div key={idx} className={styles.certificateItem}>
            <img src={cert.imageSrc} alt={cert.name} />
            <div className={styles.certificateDetails}>
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} • {cert.date}
              </p>
              <button
                className={styles.viewBtn}
                onClick={() => setSelectedCert(cert)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img src={selectedCert.imageSrc} alt={selectedCert.name} />
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedCert(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
