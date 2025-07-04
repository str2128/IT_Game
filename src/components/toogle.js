import React, { useState, useEffect } from 'react';

const popupImages = [
  '/assets/popups/popup1.jpg',
  '/assets/popups/popup2.jpg',
  '/assets/popups/popup3.jpg',
];

const Toogle = ({ onExit, cleared, onClear }) => {
  const [popups, setPopups] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);
  const [loaded, setLoaded] = useState(false); 

 
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/toogle/toogle1.jpg";
    img.onload = () => {
      setLoaded(true);
      if (!cleared) {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            const popupSrc = popupImages[Math.floor(Math.random() * popupImages.length)];
            const randomX = Math.floor(Math.random() * (window.innerWidth - 320));
            const randomY = Math.floor(Math.random() * (window.innerHeight - 320));
            setPopups(prev => [
              ...prev,
              { id: Date.now() + Math.random(), src: popupSrc, top: randomY, left: randomX },
            ]);
          }, i * 50);
        }
      }
    };
  }, [cleared]);

  
  const handleClear = () => {
    setPopups([]);
    onClear(); 
  };

  if (!loaded) return null;

  return (
    <div style={styles.wrapper}>

      {/* Toogle Background */}
      <img
        src="/assets/toogle/toogle1.jpg"
        alt="Toogle"
        style={styles.toogleImage}
      />

      {/* Settings Button */}
      <button
        style={styles.settingsButton}
        onClick={() => setShowClearButton(prev => !prev)}
      >
        <img src="/assets/toogle/gear.png" alt="Settings" style={styles.settingsIcon} />
      </button>

      {/* Clear All Popups */}
      {showClearButton && (
        <img
          src="/assets/toogle/clearAllWindows.png"
          alt="Clear All Windows"
          onClick={handleClear}
          style={styles.clearImage}
        />
      )}

      {/* ✕ Button */}
      <button style={styles.exitButton} onClick={onExit}>✕</button>

      {/* popup images */}
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
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 4000,
    background: 'rgba(255,255,255,0.9)',
    border: 'none',
    fontSize: 22,
    borderRadius: '50%',
    width: 38,
    height: 38,
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Toogle;
