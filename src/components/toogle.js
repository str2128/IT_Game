import React from 'react';

const Toogle = () => {
  return (
    <div style={styles.wrapper}>
      {/* Toogle Image */}
      <img
        src="/assets/toogle/toogle1.jpg"
        alt="Toogle"
        style={styles.toogleImage}
      />

      {/* Settings Button  */}
      <button
        style={styles.settingsButton}
        onClick={() => console.log('Settings clicked')}
      >
        <img
          src="/assets/toogle/gear.png"
          alt="Settings"
          style={styles.settingsIcon}
        />
      </button>
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
  },
  settingsIcon: {
    width: 48,  
    height: 48,
  },
};

export default Toogle;