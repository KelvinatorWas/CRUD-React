import CardPfp from "./cardPfp";

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

const TextBox = (type:string, text = '') => (
  <div className="text-box">
    <p className="text-box__type">{type}</p>
    <p className="text-box__text">{text}</p>
  </div>
)

const MainDataRect = ({ idData }: {idData:IID}) => (
  <div className="main-data-wrapper__data-rect">
    {TextBox('Name:', idData.name)}
    {TextBox('Species:', idData.species)}
    {TextBox('Sex:', idData.sex)}
    {TextBox('Origin:', idData.origin)}
  </div>
)

const BottomDataRect = ({ idData }: {idData:IID}) => (
  <div className="iid-card__data-rect">
    {TextBox('Occupation:', idData.occupation)}
    {TextBox('Birth Year:', `${idData.birth_year} ${idData.origin}'s Years`)}
    {TextBox('Status:', idData.status)}
  </div>
)

const Card = ({ data }: {data:IID}) => (
  <div className="iid-card-box">
    <div className="iid-card">
      <div className="iid-card__main-data-wrapper">
        <CardPfp dataPfp={data.pfp} />
        <MainDataRect
          idData={data}
         />
      </div>

      <BottomDataRect
        idData={data}
      />
    </div>
  </div>
)

export default Card;