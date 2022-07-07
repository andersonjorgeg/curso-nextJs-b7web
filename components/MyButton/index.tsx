import Styles from './MyButton.module.css';

type Props = {
  label: string;
  onClick: () => void;
}

export const MyButton = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className={Styles.myBtn} >{label}</button>
  )
}