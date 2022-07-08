import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigationLinks } from '../../utils/data';
import styles from '../Navbar/Navbar.module.css';

export const Navbar = () => {

  const router = useRouter();
  const { pathname } = router;

  /* const verifyActiveLink = (loopPath: string) => {
    if (loopPath === '/' && pathname !== '/') {
      return null;
    }

    if (pathname.indexOf(loopPath) === 0) {
      return styles.linkActive;
    }
    return null;
  } */

  return (
    <ul className={styles.container}>
      {NavigationLinks.map((navLink, index) => (
        /* Trocar class css */
        /* <li className={ pathname === navLink.path ? styles.linkActive : styles.linkItem} key={index}> */

        /* Adicionar class css */
        <li className={[
          styles.linkItem,
          navLink.path.includes(pathname) ?
          styles.linkActive :
          null 
        ].join(' ')} key={index}>

        {/* verificar com o indexOf()  */}
        {/* <li key={index} className={[
          styles.linkItem, 
          verifyActiveLink(navLink.path) 
        ].join(' ')}>*/}
          <Link href={navLink.path[0]}>{navLink.label}</Link>
        </li> 
      ))}
    </ul>
  )
}