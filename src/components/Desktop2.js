import React from 'react';

function Desktop() {
  return (
    <div style={styles.desktop}>

      {/* Row 1 */}
      <div style={styles.iconRow}>
        {/* Email */}
        <div
          style={styles.icon}
          onClick={() => console.log('Email clicked')}
        >
          <img
            src="/assets/icons/Email.png"
            alt="Email"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Email</div>
        </div>

        {/* Trash */}
        <div style={styles.icon} onClick={() => console.log('Trash clicked')}>
          <img
            src="/assets/icons/Trash.png"
            alt="Trash"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Trash</div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={styles.iconRow}>
        {/* Toogle */}
        <div style={styles.icon} onClick={() => console.log('Toogle clicked')}>
          <img
            src="/assets/icons/Toogle.png"
            alt="Toogle"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Toogle</div>
        </div>

        {/* Notepad */}
        <div
          style={styles.icon}
          onClick={() => console.log('Notepad clicked')}
        >
          <img
            src="/assets/icons/Notepad.png"
            alt="Notepad"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Notepad</div>
        </div>
      </div>

      {/* Row 3 */}
      <div style={styles.iconRow}>
        {/* Task Manager */}
        <div
          style={styles.icon}
          onClick={() => console.log('Task Manager clicked')}
        >
          <img
            src="/assets/icons/TaskManager.png"
            alt="Task Manager"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Task Manager</div>
        </div>
      </div>

    </div>
  );
}

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

export default Desktop;
