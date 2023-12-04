const CardPfp = ({dataPfp}: {dataPfp:string}) => {
  
  const regex = /\.\w\w\w/g;
  const img = `url(src/assets/images/${(dataPfp.length && regex.test(dataPfp)) ? dataPfp : 'default.png'})`; 
  


  return (
    <div className="main-data-wrapper___pfp" style={{background:img, backgroundSize:'100%'}}></div>
  )
}

export default CardPfp;