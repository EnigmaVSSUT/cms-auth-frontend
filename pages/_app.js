import '../styles/globals.css'
import EnigmaDocTheme from '../theme/EnigmaDocTheme'

function MyApp({ Component, pageProps }) {
  return (
	<EnigmaDocTheme>
		<Component {...pageProps} />
	</EnigmaDocTheme>
  )
}

export default MyApp
