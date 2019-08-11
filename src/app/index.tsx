import * as React from 'react';
import { TreatProvider } from 'react-treat';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { theme } from '../components/Theme/theme.treat';
import { Nav } from '../components/Navbar';
import { DesignSystem } from './Pages/DesignSystem';

export const App = () => {
  return (
    <>
      <Helmet
        defaultTitle="Demo Project"
        titleTemplate="%s Demo"
      />
      <TreatProvider theme={theme}>
        <Router>
          <Nav>
            <Link to="/">
              <Nav.Item>
                Design System
              </Nav.Item>
            </Link>
        </Nav>
        <div>
          <Route path="/" component={DesignSystem} />
        </div>
        </Router>
      </TreatProvider>
    </>
  );
}
