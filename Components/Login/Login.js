import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import * as React from 'react';
import { Button, Dimensions, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';


function Login() {
    const connector = useWalletConnect();
    const { width, height } = Dimensions.get("screen");


    // console.log(connector)

    if (!connector.connected) {

        return (
            <>
                {/* <View style={[StyleSheet.absoluteFillObject]}><Image source={require("../../assets/images/alien.jpg")} resizeMode={"contain"} /></View> */}
                <View style={{ display: 'flex', flex: 1, backgroundColor: "white" }}>
                    <View style={{ top: height * 0.7, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ backgroundColor: "white", width: width * 0.9, height: height * 0.08, justifyContent: "center", alignItems: "center" }}><Image source={require("../../assets/images/maskLight.png")} resizeMode={"contain"} style={{ height: height * 0.06, width: width * 0.8, }} /></TouchableOpacity>

                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <Button title="Disconnect" onPress={() => connector.killSession()} />
            {connector ? (<Text>{connector ? connector.accounts[0] : null}</Text>) : null}
        </>
    );
}

export default withWalletConnect(Login, {
    redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
    storageOptions: {
        asyncStorage: AsyncStorage,
    },
});