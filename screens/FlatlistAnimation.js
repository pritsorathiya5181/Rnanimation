import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FlatlistAnimation = ({navigation}) => {
  const initialData = [
    {
      id: 0,
      img:
        'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=',
    },
    {
      id: 1,
      img:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={initialData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{height: 300, margin: 10}}
              onPress={() => {
                navigation.navigate('ItemDetails', {img: item.img});
              }}>
              <Image
                source={{uri: item.img}}
                style={{width: '100%', height: 200}}
              />
              <View style={{marginTop: 5}}>
                <Text style={{fontWeight: 'bold'}}>
                  House No.10{item.id}
                  {'\n'}Address:{' '}
                </Text>
                <Text style={{fontSize: 12, paddingLeft: 12}}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default FlatlistAnimation;

const styles = StyleSheet.create({});
