import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Spot from './components/Spot';
import Mappy from './components/Mappy';

const App = createStackNavigator(
  {
    Splash: { screen: Splash },
    Spot: { screen: Spot },
    Mappy: { screen: Mappy }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

export default App;
