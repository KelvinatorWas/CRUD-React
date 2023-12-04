import { readData, createData, deleteData } from "../helperFunctions/crud";
import { IID } from "./card";
import '../style/card.css'; 
import Card from "./card";
import CardForm from "../main/cardForm";
import { useEffect, useState } from "react";

const SERVER_LINK = "http://localhost:3000/IID";


const CardManager = () => {

  const [cardData, setCardData] = useState<IID[]>([]);

  const fetchData = async (): Promise<void> => {
    const data = await readData<IID>(SERVER_LINK);
    setCardData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateCardData = async (data:IID) => {
    await createData(SERVER_LINK, data);
    fetchData();
  }

  const deleteCard = async (id:number) => {
    await deleteData(SERVER_LINK, id)
    fetchData();
  }

  const renderCards = () => {
    return cardData.map((idCard:IID) => (
      <Card
      key = {idCard.id} 
      data = {idCard}
      deleteCard = {deleteCard}
      />
    )
   )
  }

  return (
    <div className='center-wrapper'>
      <div className='all-cards'>
        <div className="id-wrapper">
          { renderCards() }
        </div>
      </div>
      
      <CardForm
        createData={updateCardData}
      />
    </div>
  )
}

export default CardManager