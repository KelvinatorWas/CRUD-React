import { formatDistanceToNow } from "date-fns";
import CardPfp from "./cardPfp";
import { DeleteForever, ModeEdit, Save } from "@mui/icons-material";
import { useEffect, useState } from "react";

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

const TextBox = (type:string, text = '', edit = false, saveData:(key:string, value:string) => void, key:string) => {
  const updateText = (e) => {
    saveData(key, e.target.value);
  }

  const typeOfBox = () => {
    if (!edit) return <p className="text-box__text">{text}</p>;
    else return <input className="edit-input-box" defaultValue={text} onChange={updateText}></input>;
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
  edit:boolean;
  saveData: (key:string, value:string) => void;
}
const MainDataRect = ({ idData, edit, saveData }: DataRectType) => (
  <div className="main-data-wrapper__data-rect">
    {TextBox('Name:', idData.name, edit, saveData, 'name')}
    {TextBox('Species:', idData.species, edit, saveData, 'species')}
    {TextBox('Sex:', idData.sex, edit, saveData, 'sex')}
    {TextBox('Origin:', idData.origin,  edit, saveData, 'origin')}
  </div>
)

const BottomDataRect = ({ idData, edit, saveData}: DataRectType) => (
  <div className="iid-card__data-rect">
    {TextBox('Occupation:', idData.occupation, edit, saveData, 'occupation')}
    {TextBox('Birth Year:', `${idData.birth_year} ${idData.origin}'s Years`, edit, saveData, 'birth_year')}
    {TextBox('Status:', idData.status, edit, saveData, 'status')}
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
  updateCard: (data:IID) => void
}

const Card = ({ data, deleteCard, updateCard }: CardType) => {
  const [editMode, setEditMode] = useState(false);
  const [mainData, setMainData] = useState(data);

  const deleteSelfCard = () => {
    if (data.id !== undefined) deleteCard(data.id);
  }

  const editSelfCard = () => {
    setEditMode(!editMode);

    if (editMode) {
      updateCard(mainData);
    }

  }

  const saveData = (key:string, value:string) => {
    if (editMode) setMainData((prevData) =>  {
      return {...prevData, [key]:value}
    });
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
          idData={mainData}
          edit={editMode}
          saveData={saveData}
         />
      </div>

      <BottomDataRect
        idData={mainData}
        edit={editMode}
        saveData={saveData}
      />

      <div className="card__ud">
        <div className="iid-card-created-at">{createdAt(mainData.createdAt)}</div>
        {renderEditOrSave()}
        <DeleteForever className="delete-card" aria-hidden='true' onClick={deleteSelfCard}></DeleteForever>
      </div>

    </div>
  </div>
  )
}

export default Card;