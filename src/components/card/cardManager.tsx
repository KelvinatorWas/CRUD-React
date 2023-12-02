import { readData, createData } from "../crud/crud";
import { IID } from "./card";

const SERVER_LINK = "https://localhoast:3000/IID";

const CardManager = () => {
  const CardData = readData<IID>(SERVER_LINK);
}

export default CardManager