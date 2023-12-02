import { readData, createData } from "../crud/crud";
import { IID } from "./card";

const SERVER_LINK = "http://localhost:3000/IID";

const CardManager = () => {
  let CardData:IID[];
  const fetchData = async () => {
    CardData = await readData<IID>(SERVER_LINK)
    console.log(CardData)
  }
  fetchData();

  return (
    <div>HEllo</div>
  )
}

export default CardManager