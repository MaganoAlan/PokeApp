import React from 'react';
import {Container, PokeName} from './styles';

interface props {
  name?: string;
  onPress?: () => void;
}

export function HomeCards({name, onPress}: props) {
  return (
    <Container>
      <PokeName onPress={onPress}>{name}</PokeName>
    </Container>
  );
}
