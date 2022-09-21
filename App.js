import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import * as React from 'react';
import { useEffect } from 'react';
import { Button, Text } from 'react-native';
import Wow from './Wow';

function App() {
  const connector = useWalletConnect();


console.log(connector)

  if (!connector.connected) {
    /**
     *  Connect! 🎉
     */
    return (
      <>
        <Button title="Connect" onPress={() => connector.connect()} />
        {connector ? (<Text>Hello</Text>) : null}
      </>
    );
  }

  return (
    <>
      <Button title="Disconnect" onPress={() => connector.killSession()} />
      {connector ? (<Text>{connector ? connector.accounts[0] : null}</Text>) : null}
      <Wow connector={connector} />
    </>
  );
}

export default withWalletConnect(App, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});