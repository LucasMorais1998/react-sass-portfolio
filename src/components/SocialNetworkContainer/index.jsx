import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import '../../styles/components/social-network-container.scss';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn /> },
  { name: 'github', icon: <FaGithub /> },
  { name: 'instagram', icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(network => (
        <a href="#" key={network.name} id={network.name} className="social-btn">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
