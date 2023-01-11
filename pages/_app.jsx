import Head from 'next/head'
import AuthProvider from '../components/auth/AuthProvider'
import '../styles/globals.css'
import EnigmaTheme from '../theme/EnigmaTheme'

export default function App({ Component, pageProps }) {
	const auth = Component.auth
	const title = Component.title || 'Enigma VSSUT'

	const getLayout = Component.getLayout || (page => page)

  return (
		<EnigmaTheme>
			<Head>
				<title>{ title }</title>
			</Head>
			{ 
				auth ? (
					<AuthProvider>
						{ getLayout(<Component {...pageProps} />) }
					</AuthProvider>
				) : (
					getLayout(<Component {...pageProps} />)
				)
			}
		</EnigmaTheme>
	)
}
