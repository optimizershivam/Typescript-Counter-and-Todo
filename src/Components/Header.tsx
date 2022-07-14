


// interface HeaderProps {
//     label: string
// }
interface HeaderProps {
    label?: string;
    children?:JSX.Element | JSX.Element []
}
// const Header = ({label}:HeaderProps) =>


const Header = ({label="Counter",children}:HeaderProps) => {
  return (
    <>
   <h1>{label}</h1> 
   {children}
    
    </>
  )
}

export default Header