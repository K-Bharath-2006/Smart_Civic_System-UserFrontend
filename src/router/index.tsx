import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../views/login';
import EntranceScreen from '../views/entranceScreen';
import SplashScreen from '../views/splashScreen';
import registerationScreen from '../views/Registeration';
import HomepageScreen from '../views/home';
import addIssueScreen from '../views/addIssue';
import myIssuesScreen from '../views/myIssues';
import WorkerDashboardScreen from '../views/workerhome';
import WorkerCompleteScreen from '../views/WorkerCompleteScreen';
// import RewardScreen from '../views/rewards';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Entrance}
        component={EntranceScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Splash}
        component={SplashScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Registeration}
        component={registerationScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.Home}
        component={HomepageScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.AddIssue}
        component={addIssueScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={routes.MyIssues}
        component={myIssuesScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.WorkerDashboard}
        component={WorkerDashboardScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.WorkerComplete}
        component={WorkerCompleteScreen}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name={routes.RewardsPage}
        component={RewardScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default RouterApp;
