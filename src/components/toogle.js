import React, { useState, useEffect } from 'react';

const popupImages = [
  '/assets/popups/popup1.jpg',
  '/assets/popups/popup2.jpg',
  '/assets/popups/popup3.jpg',
];

const Toogle = () => {
  const [popups, setPopups] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);

  const spawnPopup = () => {
    const popupSrc = popupImages[Math.floor(Math.random() * popupImages.length)];
    const randomX = Math.floor(Math.random() * (window.innerWidth - 320));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 320));

    setPopups(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        src: popupSrc,
        top: randomY,
        left: randomX,
      }
    ]);
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnPopup, i * 50);
    }
  }, []);

  return (
    <div style={styles.wrapper}>
      
      {/* Background */}
      <img
        src="/assets/toogle/toogle1.jpg"
        alt="Toogle"
        style={styles.toogleImage}
      />

      {/* Settings button */}
      <button
        style={styles.settingsButton}
        onClick={() => setShowClearButton(prev => !prev)} // TOGGLE on click
      >
        <img
          src="/assets/toogle/gear.png"
          alt="Settings"
          style={styles.settingsIcon}
        />
      </button>

      {/* Clear All Windows */}
      {showClearButton && (
        <img
          src="/assets/toogle/clearAllWindows.png"
          alt="Clear All Windows"
          onClick={() => setPopups([])}
          style={styles.clearImage}
        />
      )}

      {/* Popups */}
      {popups.map((popup) => (
        <img
          key={popup.id}
          src={popup.src}
          alt="popup"
          style={{
            position: 'absolute',
            top: popup.top,
            left: popup.left,
            width: '300px',
            zIndex: 2000,
          }}
        />
      ))}
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  toogleImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  settingsButton: {
    position: 'absolute',
    top: 70,
    right: 30,
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    borderRadius: '12px',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 3000,
  },
  settingsIcon: {
    width: 48,
    height: 48,
  },
  clearImage: {
    position: 'absolute',
    top: 130,
    right: 30,
    width: '180px',
    cursor: 'pointer',
    zIndex: 3000,
  },
};

export default Toogle;
