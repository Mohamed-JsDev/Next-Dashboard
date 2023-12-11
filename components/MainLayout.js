import Header from './header'
import Links from './links'
// import Footer from './footer'
// import Links from './links'
// import { ThemeProvider } from '@/context/ThemesContext'
// import variables from '../src/styles/variables.module.scss'

export default function MainLayout(props) {
  return(
        <>
            <Header/>
            <Links/>
            
            {props.children}
          </>
  )
}
