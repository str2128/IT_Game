import React , {useState} from 'react';

function Desktop2() {

  const [showTMPopup, setShowTMPopup] = useState(false);
  const [activeDesktop, setActiveDesktop] = useState('desktop1');

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

  popup: {
    position: 'fixed',
    border: '1px solid #ccc',
    padding: 10,
    backgroundColor: 'white',
    zIndex: 10,
    width: 600,
  },

  closeButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    fontSize: 18,
  },
};

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
      {/* Task Manager icon */}
      <div
        style={styles.icon}
        onClick={() => setShowTMPopup(true)}
      >
        <img
          src="/assets/icons/TaskManager.PNG"
          alt="Task Manager"
          style={styles.iconImage}
        />
        <div style={styles.iconLabel}>Task Manager</div>
      </div>

      {/* Simple popup */}
      {showTMPopup && (
        <div style={styles.popup}>
          {/*<h3>Task Manager</h3>*/}
          <img
            src="/assets/taskmanager/Task_Manager.png"
            alt="Task Manager Full"
            style={styles.popupImage}
          />
          <button onClick={() => setShowTMPopup(false)}>Close</button>
        </div>
      )}

    </div>
  );
  </div>
  )
}
export default Desktop2;
