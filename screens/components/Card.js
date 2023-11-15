import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri:"https://i.pinimg.com/564x/46/3e/79/463e79db4731016c6cf8e3afadcf6a55.jpg" }} />
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
    top:-10
  },
  cardImage: {
    width:'100%',
    height: 150, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Card;
