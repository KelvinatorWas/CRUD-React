import { useState } from 'react';
import { IID } from '../card/card';

type TypeCardForm = {
  createData: (data: IID) => void;
};

const defaultData = {
  name: '',
  species: '',
  sex: '',
  occupation: '',
  origin: '',
  pfp: '',
  birth_year: '',
  status: '',
  desc: '',
  createdAt: ''
};

const CardForm = ({ createData }: TypeCardForm) => {
  const [formData, setFormData] = useState<IID>({...defaultData});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    createData(updatedFormData);

    setFormData({...defaultData});
  };

  // yeah idk
  return (
    <div className="iid-input-box">
      <form id="iidForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="iid-input-text">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/><br/>

        <label htmlFor="species" className="iid-input-text">Species:</label>
        <input type="text" name="species" value={formData.species} onChange={handleInputChange} required/><br/>

        <label htmlFor="sex" className="iid-input-text">Sex:</label>
        <input type="text" name="sex" value={formData.sex} onChange={handleInputChange} required/><br/>

        <label htmlFor="origin" className="iid-input-text">Origin:</label>
        <input type="text" name="origin" value={formData.origin} onChange={handleInputChange} required/><br/>

        <label htmlFor="occupation" className="iid-input-text">Occupation:</label>
        <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} required/><br/>

        <label htmlFor="pfp" className="iid-input-text">Pfp:</label>
        <input type="text" value={formData.pfp} onChange={handleInputChange} name="pfp"/><br/>

        <label htmlFor="birth_year" className="iid-input-text">Birth Year:</label>
        <input type="text" name="birth_year" value={formData.birth_year} onChange={handleInputChange} required/><br/>

        <label htmlFor="status" className="iid-input-text">Status:</label>
        <input type="text" name="status" value={formData.status} onChange={handleInputChange} /><br/>

        <label htmlFor="desc" className="iid-input-text">Description:</label><br/>
        <textarea name="desc" rows={4} value={formData.desc}onChange={handleInputChange}/><br/>

        <button className="submit-button js-submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardForm;
