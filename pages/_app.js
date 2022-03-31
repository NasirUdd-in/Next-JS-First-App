import Navigation from '../Components/Navigation/Navigation'
import { Box } from '@mui/system'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Box>
    <Navigation></Navigation>
    <Component {...pageProps} />
  </Box>
}

export default MyApp
