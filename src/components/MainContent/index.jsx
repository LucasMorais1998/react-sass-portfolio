/* import "../../styles/components/maincontent.scss"; */

import AboutContainer from '../AboutContainer';
import ProjectsContainer from '../ProjectsContainer';
import TechnologiesContainer from '../TechnologiesContainer';

import '../../styles/components/main-content.scss';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
