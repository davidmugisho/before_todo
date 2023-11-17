import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri:"https://i.pinimg.com/564x/76/0c/48/760c488bd61903f481dc0bd10bec193e.jpg" }} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    top:-5
  },
  cardImage: {
    width:'100%',
    height: 150, // Adjust the height as needed
    borderRadius: 10,
    marginBottom:10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 18,
    color: 'red',
  },
});

export default Card;
