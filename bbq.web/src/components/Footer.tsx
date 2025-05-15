import React from 'react';
import useTranslation from '../locale/useTranslation';

const Footer: React.FC = () => {
  const {t} = useTranslation();

  return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          {/* Section 1: Address */}
          <div style={styles.section}>
            <div>{t('address')}</div>
            <div>{t('phone')}</div>
          </div>

          {/* Section 2: Phone + Working hours */}
          <div style={styles.section}>
            <div style={styles.workingHours}>
              <div>{t('mondayToFriday')}</div>
              <div>{t('saturdayToSunday')}</div>
            </div>
          </div>

          {/* Section 3: Social media */}
          <div style={styles.section}>
            <a href={t('facebook')} target="_blank" rel="noreferrer" style={styles.link}>Facebook</a>
            <a href={t('instagram')} target="_blank" rel="noreferrer" style={styles.link}>Instagram</a>
          </div>
        </div>

        <div style={styles.bottomNote}>
          © {new Date().getFullYear()} {t('companyName')}. All rights reserved.
        </div>
      </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: '#f9f5e3',
    padding: '0.5rem 0.5rem 0.5rem', // thinner top and bottom padding
    borderTop: '1px solid #ddd',
    fontSize: '0.8rem', // smaller text
    color: '#333',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem', // less space between columns
    maxWidth: '800px', // smaller max width
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  section: {
    flex: 1,
    minWidth: '150px', // tighter columns
  },
  workingHours: {
    marginTop: '0.25rem', // less vertical spacing
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.25rem', // tighter spacing
  },
  bottomNote: {
    marginTop: '0.5rem', // less space before copyright
    fontSize: '0.7rem',
    color: '#777',
    textAlign: 'center',
  },
};

export default Footer;