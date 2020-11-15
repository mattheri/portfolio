import React from 'react';
import { useMediqQuery } from '../Hooks/useMediaQuery';
import { Main } from '../Main/Main';
import { MobileNav } from '../Nav/MobileNav';
import { Nav } from '../Nav/Nav';

export type State = {
  [key: string]: boolean,
  home: boolean,
  about: boolean,
  portfolio: boolean,
  contact: boolean
}

const App = () => {
  const [currentPage, setCurrentPage] = React.useState<State>({
    home: true,
    about: false,
    portfolio: false,
    contact: false
  });

  const handleCurrentPage = (cp: string) => {
    if (cp === "home") {
      return setCurrentPage({
        home: true,
        about: false,
        portfolio: false,
        contact: false
      });
    }
    if (cp.includes("about") && !currentPage.about) {
      return setCurrentPage({
        home: false,
        about: true,
        portfolio: false,
        contact: false
      });
    }
    if (cp.includes("portfolio") && !currentPage.portfolio) {
      return setCurrentPage({
        home: false,
        about: false,
        portfolio: true,
        contact: false
      });
    }
    if (cp.includes("contact") && !currentPage.contact) {
      return setCurrentPage({
        home: false,
        about: false,
        portfolio: false,
        contact: true
      });
    }
  }

  const isMobile = useMediqQuery(768);

  return (
    <>
      {isMobile ? <MobileNav /> : <Nav currentPage={currentPage} />}
      <Main onPageUpdate={handleCurrentPage} />
    </>
  );
}

export default App;
