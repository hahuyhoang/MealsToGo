import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { Button, Card } from "react-native-paper";

const RestaurantCart = styled(Card)`
  background-color: white;
`;
const RestaurantCartCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = " 100 some random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;
  return (
    <RestaurantCart elevation={5}>
      <RestaurantCartCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCart>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({});
