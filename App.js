import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{ padding: 16, backgroundColor: "green"}}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue"}}>
          <Text>list</Text>
        </View>

      </SafeAreaView>
    </>
   
  );
}

const styles = StyleSheet.create({

});
