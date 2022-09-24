import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import * as React from 'react';
import { Button, Dimensions, Image, Text, TouchableOpacity, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import lightPic from "../../assets/images/maskLight.png"
import darkPic from "../../assets/images/mask.png"
import gem from "../../assets/images/gem.png"

import { themeController } from '../../features/reduxStore/themeStore';


function WalletLogin() {


    const connector = useWalletConnect();
    const { width, height } = Dimensions.get("screen");
    const theme = useSelector((state) => { return state.themeReducer.value.theme })
    // console.log(cart)
    const dispatch = useDispatch();


    // console.log(connector)

    if (!connector.connected) {

        return (
            <SafeAreaView style={{ display: 'flex', flex: 1, backgroundColor: theme === "dark" ? "black" : "white" }}>
                <StatusBar hidden barStyle={theme === "dark" ? "light-content" : "dark-content"} />

                <View >
                    <Text style={{ fontFamily: "monster", color: theme !== "dark" ? "black" : "white", fontSize: height * 0.15, top: height * 0.01, letterSpacing: height * 0.005, position: "absolute" }}> NFT </Text>
                    <Text style={{ fontFamily: "monster", color: theme !== "dark" ? "black" : "white", fontSize: height * 0.12, top: height * 0.2, position: "absolute" }}>  MARKET</Text>
                    <Text style={{ fontFamily: "monster", color: theme !== "dark" ? "black" : "white", fontSize: height * 0.12, top: height * 0.2, position: "absolute" }}>  MARKET</Text>


                    <Image source={gem} style={{ height: 45, width: 45, top: height * 0.4, left: width * 0.2, position: "absolute" }} resizeMode={"center"} />
                    <Image source={gem} style={{ height: 45, width: 45, top: height * 0.7, left: width * 0.6, position: "absolute" }} resizeMode={"center"} />

                    <Image source={gem} style={{ height: 45, width: 45, top: height * 0.2, left: width * 0.7, position: "absolute" }} resizeMode={"center"} />

                    <Image source={gem} style={{ height: 45, width: 45, top: height * 0.6, left: width * 0.2, position: "absolute" }} resizeMode={"center"} />


                    <View style={[StyleSheet.absoluteFillObject]}><Image source={require("../../assets/images/alien.png")} resizeMode={"center"} style={{ height: height, width: width }} /></View>


                    <TouchableOpacity style={{ position: "absolute" }} onPress={() => { dispatch(themeController()) }}><Text style={{ color: theme === "dark" ? "white" : "black" }}>Dark</Text></TouchableOpacity>

                    <View style={{ top: height * 0.78, width: width * 0.8, alignSelf: "center", backgroundColor: theme === "dark" ? "black" : "white", justifyContent: "center", alignItems: "center", }}>
                        <TouchableOpacity onPress={() => { connector.connect() }} style={{ backgroundColor: theme === "dark" ? "black" : "white", width: width * 0.9, height: height * 0.08, justifyContent: "center", alignItems: "center", elevation: 10 }}><Image source={theme === "dark" ? darkPic : lightPic} resizeMode={"contain"} style={{ height: height * 0.06, width: width * 0.8, }} /></TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <>
            <Button title="Disconnect" onPress={() => connector.killSession()} />
            {connector ? (<Text>{connector ? connector.accounts[0] : null}</Text>) : null}
        </>
    );
}

export default withWalletConnect(WalletLogin, {
    redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
    storageOptions: {
        asyncStorage: AsyncStorage,
    },
});