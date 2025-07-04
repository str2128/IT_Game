import React, { useState } from 'react';
import Toogle from './Toogle';

function Desktop2() {
  const [showToogle, setShowToogle] = useState(false);        
  const [toogleCleared, setToogleCleared] = useState(false);  

  const styles = {
    desktop: {
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url("/assets/Desktop2.jpg")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      position: 'relative',
    },
    iconRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '40px',
      marginTop: '40px',
      marginLeft: '30px',
    },
    icon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      width: '64px',
    },
    iconImage: {
      width: '72px',
      height: '72px',
    },
    iconLabel: {
      marginTop: '8px',
      color: 'white',
      fontSize: '14px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.desktop}>

      {/* Row 1 — Email + Trash */}
      <div style={styles.iconRow}>
        {/* Email Icon */}
        <div style={styles.icon} onClick={() => console.log('Email clicked')}>
          <img src="/assets/icons/Email.png" alt="Email" style={styles.iconImage} />
          <div style={styles.iconLabel}>Email</div>
        </div>

        {/* Trash Icon */}
        <div style={styles.icon} onClick={() => console.log('Trash clicked')}>
          <img src="/assets/icons/Trash.png" alt="Trash" style={styles.iconImage} />
          <div style={styles.iconLabel}>Trash</div>
        </div>
      </div>

      {/* Row 2 — Toogle + Notepad */}
      <div style={styles.iconRow}>
        {/* Toogle Icon */}
        <div style={styles.icon} onClick={() => setShowToogle(true)}>
          <img src="/assets/icons/Toogle.png" alt="Toogle" style={styles.iconImage} />
          <div style={styles.iconLabel}>Toogle</div>
        </div>

        {/* Notepad Icon */}
        <div style={styles.icon} onClick={() => console.log('Notepad clicked')}>
          <img src="/assets/icons/Notepad.png" alt="Notepad" style={styles.iconImage} />
          <div style={styles.iconLabel}>Notepad</div>
        </div>
      </div>

      {/* Row 3 — Task Manager */}
      <div style={styles.iconRow}>
        {/* Task Manager Icon */}
        <div style={styles.icon} onClick={() => console.log('Task Manager clicked')}>
          <img src="/assets/icons/TaskManager.PNG" alt="Task Manager" style={styles.iconImage} />
          <div style={styles.iconLabel}>Task Manager</div>
        </div>
      </div>

      {/* Toogle App */}
      {showToogle && (
        <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
          <Toogle
            onExit={() => setShowToogle(false)}      
            cleared={toogleCleared}                  
            onClear={() => setToogleCleared(true)}    
          />
        </div>
      )}
    </div>
  );
}

export default Desktop2;
