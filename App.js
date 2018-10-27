import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Spot from './components/Spot';

const App = createStackNavigator(
  {
    Splash: { screen: Splash },
    Spot: { screen: Spot }
  },
  {
    initialRouteName: 'Spot',
    headerMode: 'none'
  }
);

export default App;
