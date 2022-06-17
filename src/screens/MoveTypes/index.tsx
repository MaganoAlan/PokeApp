import React from 'react';
import {Container, Texts, TypeBack, TypesBox, TypeText} from './styles';

export function MoveTypes() {
  return (
    <Container>
      <Texts>Tipos de Ataques</Texts>
      <TypesBox>
        <TypeBack style={{backgroundColor: '#88960E'}}>
          <TypeText>BUG</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#E79302'}}>
          <TypeText>ELETRIC</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#C72100'}}>
          <TypeText>FIRE</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#3E9E07'}}>
          <TypeText>GRASS</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#ADA594'}}>
          <TypeText>NORMAL</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#9E863D'}}>
          <TypeText>ROCK</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#513C2E'}}>
          <TypeText>DARK</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#E08EE0'}}>
          <TypeText>FAIRY</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#5D73D4'}}>
          <TypeText>FLYING</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#AF8E34'}}>
          <TypeText>GROUND</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#8B3F8C'}}>
          <TypeText>POISON</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#8E8E9F'}}>
          <TypeText>STEEL</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#6B55D0'}}>
          <TypeText>DRAGON</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#7F321C'}}>
          <TypeText>FIGHTING</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#5C5CAD'}}>
          <TypeText>GHOST</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#6DD3F5'}}>
          <TypeText>ICE</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#E0376D'}}>
          <TypeText>PSYCHIC</TypeText>
        </TypeBack>
        <TypeBack style={{backgroundColor: '#0C67C2'}}>
          <TypeText>WATER</TypeText>
        </TypeBack>
      </TypesBox>
    </Container>
  );
}
