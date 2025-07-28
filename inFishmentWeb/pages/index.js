import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import MobileMainPage from '../components/Mobile/mainpage';
import WebMainPage from '../components/Web/mainpage'

export default function Index() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  if(isMobile && isPortrait) {
    return <MobileMainPage />
  } else {
    return <WebMainPage />
  }
}
