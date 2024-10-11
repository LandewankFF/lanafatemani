export const ButtonIcon = ({ className, icon, text, textClassName, bgColor, hoverBgColor }) => {
  return (
    <button className={`${className} ${bgColor} flex py-3 justify-center gap-3 rounded-lg transform duration-300 px-4 items-center ${hoverBgColor}`}>
      <ion-icon name={icon}></ion-icon>
      <span className={textClassName}>{text}</span>
    </button>
  );
};


export const Button =(props)=>{
  const {className,text} = props
  return(
    <button className={className}>{text}</button>
  )
}


