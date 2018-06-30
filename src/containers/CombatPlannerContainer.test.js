import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import CombatPlannerContainer from './CombatPlannerContainer';

describe('CombatPlannerContainer', () => {
  it('renders ', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <CombatPlannerContainer />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
