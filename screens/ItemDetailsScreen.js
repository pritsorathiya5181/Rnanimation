import React from 'react';
import {
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ItemDetailsScreen = ({navigation, route}) => {
  console.log(route);
  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={{uri: route.params.img}}
        style={{width: '100%', height: 200, marginTop: 35}}
      />
      <Text style={{fontSize: 12, paddingLeft: 12, marginTop: 25}}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: '#FF6347',
          width: 150,
          height: 40,
          marginTop: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({});
