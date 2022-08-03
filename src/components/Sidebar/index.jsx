import AvatarImg from "../../assets/images/person-picture.jpg";

import "../../styles/components/sidebar.scss";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={AvatarImg} alt="Imagem de perfil, de uma mulher ruiva" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
