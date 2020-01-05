import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute';

import Header from '../header/Header.component';
import HomePage from '../../pages/homepage/HomePage.page';
import ValuesSelectionPage from '../../pages/values-selection/ValuesSelectionPage';
import ChoiceExplanation from '../choice-explanation/ChoiceExplanationForm.component';

function Dashboard() {
  return (
    <div>
      <Header />
      <PrivateRoute exact path="/dashboard/homepage" component={HomePage} />
      <PrivateRoute
        path="/dashboard/values-selection"
        component={ValuesSelectionPage}
      />
      <PrivateRoute
        path="/dashboard/choice-expl"
        component={ChoiceExplanation}
      />
    </div>
  );
}

export default Dashboard;
