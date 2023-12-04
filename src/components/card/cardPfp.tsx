const CardPfp = ({dataPfp}: {dataPfp:string}) => {
  
  const regex = /\.\w\w\w/g;
  const websiteRegex = /^(http(s):\/\/.)/;
  const img = (websiteRegex.test(dataPfp)) ? `url(${dataPfp})` : `url(src/assets/images/${(dataPfp.length && regex.test(dataPfp)) ? dataPfp : 'default.png'})`;

  return (
    <div className="main-data-wrapper___pfp" style={{background:img, backgroundSize:'100%', backgroundRepeat:'no-repeat'}}></div>
  );
};

export default CardPfp;