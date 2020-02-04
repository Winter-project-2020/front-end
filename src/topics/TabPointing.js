import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menu: 'Tab 1',
    render: () => <Tab.Pane attached={false}>내용1</Tab.Pane>,
  },
  {
    menu: 'Tab 2',
    render: () => <Tab.Pane attached={false}>내용2</Tab.Pane>,
  },
  {
    menu: 'Tab 3',
    render: () => <Tab.Pane attached={false}>내용3</Tab.Pane>,
  },
]

const TabPointg = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabPointg;