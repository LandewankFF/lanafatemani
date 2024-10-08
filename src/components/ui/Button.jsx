export const ButtonIcon = ({ className, icon, text, textClassName }) => {
  return (
    <button className={className}>
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


