import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import mac from './mac.jpg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling React Native Component</Text>
      <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
        <Image source={mac} style={{width: 188, height: 107, borderRadius: 8}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New MacBook Pro 2020</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'orange', marginTop: 12}}>Rp. 25.000.000,-</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12}}>Tangerang</Text>
        <View style={{backgroundColor: 'green', paddingVertical: 6, borderRadius: 25, marginTop: 20,}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 20,
  },
});

const SampleComponent = () => {
  return (
    <View style={{width: 400, height: 80, backgroundColor: '#81ecec'}}>
      <Text>Ahmad Furqan</Text>
      <Text>Manda Kumoro Saraswati</Text>
      <TextAnak />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const TextAnak = () => {
  return <Text>Ganapatih Edgar Ahmad</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/people'}}
      style={{width: 80, height: 80}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 20}}>Hewan Kesayangan Kami</Text>
      </View>
    );
  }
}

export default App;
