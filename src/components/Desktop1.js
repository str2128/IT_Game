import React, { useState } from 'react';
import styled from 'styled-components';
import Desktop2 from './Desktop2';

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

function Desktop() {
  const [showEmail, setShowEmail] = useState(false);
  const [hasNewEmail, setHasNewEmail] = useState(true);
  const [activeDesktop, setActiveDesktop] = useState('desktop1');

  const styles = {
    desktop: {
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url("/assets/Desktop1.jpg")',
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
    redDot: {
      position: 'absolute',
      top: 2,
      right: 2,
      width: 10,
      height: 10,
      backgroundColor: 'red',
      borderRadius: '50%',
      border: '1px solid white',
      zIndex: 5,
    },
    popup: {
      position: 'absolute',
      top: -300,
      left: 120,
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      border: '2px solid black',
      borderRadius: 8,
      zIndex: 1000,
    },
    mainArea: {
      position: 'relative',
    },
    fullscreenDesktop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black', 
    }
  };

  return (
    <div style={styles.desktop}>
      {/* Row 1 */}
      <div style={styles.iconRow}>
        {/* Email */}
        <div
          style={styles.icon}
          onClick={() => {
            setShowEmail(true);
            setHasNewEmail(false);
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="/assets/icons/Email.png"
              alt="Email"
              style={styles.iconImage}
            />
            {hasNewEmail && <div style={styles.redDot} />}
          </div>
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

        {/* Emails & Passwords */}
        <div
          style={styles.icon}
          onClick={() => console.log('Emails & Passwords clicked')}
        >
          <img
            src="/assets/icons/Emailsandpw.png"
            alt="Emails & Password"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>Emails & Passwords</div>
        </div>
      </div>

      {/* Row 4 */}
      <div style={styles.iconRow}>
        {/* IP Tracker */}
        <div
          style={styles.icon}
          onClick={() => console.log('IP Tracker clicked')}
        >
          <img
            src="/assets/icons/IP_Tracker.png"
            alt="IP Tracker"
            style={styles.iconImage}
          />
          <div style={styles.iconLabel}>IP Tracker</div>
        </div>
      </div>

      {/* Popup / Desktop2 */}
      <div style={styles.mainArea}>
      {activeDesktop === 'desktop2' && (
        <div style={styles.fullscreenDesktop}>
          <Desktop2 />
        </div>
      )}

      {activeDesktop !== 'desktop2' && showEmail && (
        <div style={styles.popup}>
          <h2>Inbox</h2>
          <p><strong>From:</strong> user@example.com</p>
          <p><strong>Subject:</strong> Hey IT! I need help!</p>

          <Button onClick={() => {
            setShowEmail(false);
            setActiveDesktop('desktop2');
          }}>
            REMOTE CONTROL
          </Button>

          <button onClick={() => setShowEmail(false)}>Close</button>
        </div>
      )}
    </div>
  </div>
);
}
export default Desktop;
