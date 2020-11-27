import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from '../../screens/Feed';
import Meus from '../../screens/Meus';
import Settings from '../../screens/Settings';
import customDrawer from '../../Components/customDrawer';

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator
        initialRouteName='Feeds'
        drawerContent={customDrawer}
    >
        <Drawer.Screen name='Feeds' component={Feed} />
        <Drawer.Screen name='Minhas Postagens' component={Meus} />
        <Drawer.Screen name='Configurações' component={Settings} />

     </Drawer.Navigator>
);