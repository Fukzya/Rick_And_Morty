import Card from '../Card/Card.jsx';
import { CardsContainer } from "./styledComponent";

export default function Cards(props) {
   const { characters , onClose } = props;
   return(
   <CardsContainer>
      {characters.map((character) => (
         <Card 
            id = {character.id}
            key = {character.id}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            image = {character.image}
            onClose={onClose}
         />
      ))}
   </CardsContainer>);
}

