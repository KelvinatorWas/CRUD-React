import { formatDistanceToNow } from "date-fns";
import CardPfp from "./cardPfp";
import { DeleteForever, ModeEdit, Save } from "@mui/icons-material";
import { useState, useEffect } from "react";

export type IID = {
  id?: number;
  name: string;
  species: string;
  sex: string;
  occupation: string;
  origin: string;
  pfp: string;
  birth_year: string;
  status: string;
  desc: string;
  createdAt:string;
};

const TextBox = (type:string, text = '', edit = false) => {
  const typeOfBox = () => {
    if (!edit) return <p className="text-box__text">{text}</p>;
    else return <input className="edit-input-box" defaultValue={text}></input>;
  }

  return(
    <div className="text-box">
      <p className="text-box__type">{type}</p>
      {
        typeOfBox()
      }
    </div>
  )
}

type DataRectType = {
  idData:IID;
  edit:boolean
}
const MainDataRect = ({ idData, edit}: DataRectType) => (
  <div className="main-data-wrapper__data-rect">
    {TextBox('Name:', idData.name, edit)}
    {TextBox('Species:', idData.species, edit)}
    {TextBox('Sex:', idData.sex, edit)}
    {TextBox('Origin:', idData.origin,  edit)}
  </div>
)

const BottomDataRect = ({ idData, edit }: DataRectType) => (
  <div className="iid-card__data-rect">
    {TextBox('Occupation:', idData.occupation, edit)}
    {TextBox('Birth Year:', `${idData.birth_year} ${idData.origin}'s Years`, edit)}
    {TextBox('Status:', idData.status, edit)}
  </div>
)

const createdAt = (time:string) => {
  const createdAtDate = new Date(time);
  const dist = formatDistanceToNow(createdAtDate, { addSuffix: true });

  return `Created At: ${dist}`;
}

type CardType = {
  data:IID;
  deleteCard: (id:number) => void
  
}

const Card = ({ data, deleteCard }: CardType) => {
  const [editMode, setEditMode] = useState(false);

  const deleteSelfCard = () => {
    if (data.id !== undefined) deleteCard(data.id);
  }

  const editSelfCard = () => {
    setEditMode(!editMode);
  }

  const renderEditOrSave = () => {
    return editMode ? 
    <Save className="edit-card" aria-hidden='true' onClick = {editSelfCard}></Save> :
    <ModeEdit className="edit-card" aria-hidden='true' onClick = {editSelfCard}></ModeEdit>; 
  }

  return (
  <div className="iid-card-box">
    <div className="iid-card">
      <div className="iid-card__main-data-wrapper">
        <CardPfp dataPfp={data.pfp} />
        <MainDataRect
          idData={data}
          edit={editMode}
         />
      </div>

      <BottomDataRect
        idData={data}
        edit={editMode}
      />

      <div className="card__ud">
        <div className="iid-card-created-at">{createdAt(data.createdAt)}</div>
        {renderEditOrSave()}
        <DeleteForever className="delete-card" aria-hidden='true' onClick={deleteSelfCard}></DeleteForever>
      </div>

    </div>
  </div>
  )
}

export default Card;