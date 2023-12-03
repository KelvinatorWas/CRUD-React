import { readData, createData } from "../crud/crud";
import { IID } from "./card";
import '../style/card.css'; 
import Card from "./card";


const SERVER_LINK = "http://localhost:3000/IID";

const fetchData = async (): IID[] => {
  const data = await readData<IID>(SERVER_LINK)
  return data;
  //console.log(CardData)
}
const CardData:IID[] = await fetchData();

const CardManager = () => {

  return (
    
    <div className="id-wrapper">
      {
        CardData.map((idCard:IID) => (
          <Card
          key = {idCard.id} 
          data = {idCard}
          />
        )
      )}
    </div>
  )
}

export default CardManager