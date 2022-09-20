import ShowPerson from "./ShowPerson";

export default function ShowPersons(props) {
  let { persons } = props;

  return (
    <div>
           
        {
          persons.map((item) => {
            return (  
              <ShowPerson person={item} />
            )
          })
        }
      
    </div>
  );
}
