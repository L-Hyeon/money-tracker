import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CalendarPage from './pages/CalendarPage';
import TestPage from './pages/TestPage';

const Router = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} classNames={'page'} timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<CalendarPage />} />

          <Route path="/test/:pageKey" element={<TestPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
