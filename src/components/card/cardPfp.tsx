const CardPfp = ({dataPfp}: {dataPfp:string}) => {
  
  const img = `url(src/assets/images/${dataPfp.length ? dataPfp : 'default.png'})`; 
  
  return (
    <div className="main-data-wrapper___pfp" style={{background:img, backgroundSize:'100%'}}></div>
  )
}

export default CardPfp;