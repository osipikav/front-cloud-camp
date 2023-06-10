import FolderIcon from 'assets/icons/FolderIcon/FolderIcon';
import styles from './styles.module.scss';
import { MainPageForm } from 'components/MainPageForm';

export const Main = () => {
  const links = [
    {
      title: 'Telegram',
      url: 'https://t.me/rossoneri0902',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/osipikav',
    },
    {
      title: 'Resume',
      url: 'https://osipikav-cv.netlify.app/',
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.avatar}>АО</div>
        <div className={styles.content}>
          <div className={styles.name}>Андрей Осипик</div>
          <ul className={styles.linksList}>
            {links.map((link) => (
              <li className={styles.linksItem} key={link.title}>
                <FolderIcon />
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MainPageForm />
    </div>
  );
};
