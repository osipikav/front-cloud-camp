import FolderIcon from 'assets/icons/FolderIcon/FolderIcon';
import './MainPage.scss';
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
    <div className="main">
      <div className="header">
        <div className="avatar">АО</div>
        <div className="content">
          <div className="name">Андрей Осипик</div>
          <ul className="links-list">
            {links.map((link) => (
              <li className="links-item" key={link.title}>
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
