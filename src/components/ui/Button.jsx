export const ButtonIcon = ({ className, icon, text, textClassName, bgColor, hoverBgColor }) => {
  return (
    <button className={`${className} ${bgColor} inline-flex py-3 justify-center gap-3 rounded-lg transform duration-300 px-4 items-center ${hoverBgColor}`}>
      <ion-icon name={icon}></ion-icon>
      <span className={textClassName}>{text}</span>
    </button>
  );
};


export const Button =(props)=>{
  const {hoverBgColor,text,bgColor  } = props
  return(
    <button className={` ${bgColor} font-semibold  inline-flex py-3 justify-center gap-3 rounded-lg transform duration-300 px-4 ${hoverBgColor}`}>{text}</button>
  )
}


