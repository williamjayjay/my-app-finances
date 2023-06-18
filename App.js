import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { Header} from './src/components/Header'
import {Balance} from './src/components/Balance'
import { HeaderNavIcons } from './src/components/HeaderNavIcons'

export default function App() {
  return (


    <View >  
      <Header/>

    <Balance/>
    <Balance/>
    <Balance/>
    <Balance/>
    <Balance/>
    <Balance/>

    <HeaderNavIcons/>
    <HeaderNavIcons/>
    <HeaderNavIcons/>
    <HeaderNavIcons/>
    <HeaderNavIcons/>

    <StatusBar style="auto" />
    </View>

  );
}
