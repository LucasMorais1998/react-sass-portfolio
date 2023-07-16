import InformationContainer from '../InformationContainer';
import SocialNetworkContainer from '../SocialNetworkContainer';

import AvatarImg from '../../assets/images/person-picture.jpg';

import '../../styles/components/sidebar.scss';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={AvatarImg} alt="Imagem de perfil, de uma mulher ruiva" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
