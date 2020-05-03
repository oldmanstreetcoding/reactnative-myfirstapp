import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
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
