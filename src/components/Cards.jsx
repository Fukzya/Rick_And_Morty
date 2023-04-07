import Card from './Card';

export default function Cards({ characters }) {
   return( 
   <div>
      {
         characters.map(({id, name, status, species, gender, origin, image}) => {
            return(
            <Card 
               name = {name}
               species = {species}
               gender = {gender}
               status = {status}
               origin = {origin.name}
               image = {image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               key = {id}
               id = {id}
            />)
         })
      }
   </div>
   )
}
