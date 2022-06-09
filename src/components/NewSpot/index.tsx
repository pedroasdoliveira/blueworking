import "./style.css";
import camera from '../../assets/img/camera.jpg'
import { SyntheticEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewSpot = () => {
  const [thumbnail, setThumbnail] = useState<FileList | null>(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail[0]) : null;
  }, [thumbnail])

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    navigate('/dashboard')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label id="thumbnail" className={thumbnail ? "has-thumbnail" : ''} style={{backgroundImage: `url(${preview})`}}>
          <input type="file" onChange={(e) => setThumbnail(e.target.files)} />
          <img className="cam" src={camera} alt="select_image" />
        </label>

        <label htmlFor="company">Empresa *</label>
        <input 
          type="text"
          placeholder="Digite sua empresa" 
          id="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <label htmlFor="techs">Tecnologias * <span>(separadas por vírgula)</span></label>
        <input 
          type="text"
          placeholder="Quais tecnologias usam?"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <label htmlFor="price">Valor da Diária <span>(em branco para GRATUITO)</span></label>
        <input 
          type="text"
          placeholder="Valor cobrado por dia" 
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button className="btn">Cadastrar</button>
      </form>
    </>
  );
};

export default NewSpot;
