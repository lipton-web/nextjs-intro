import Layout from "../components/Layout";
// _app.js에서만 globals.css import 가능함.
import "../styles/globals.css";

export default function App({Component, pageProps}) {
	return (
		<Layout>
			<Component {...pageProps} />
			<span>hello</span>
			<style jsx global>{`
        // a {
        //   color: white;
        // }
      `}</style>
		</Layout>
	)
}