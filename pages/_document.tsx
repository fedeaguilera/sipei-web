import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import Header from "../components/Header";

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
						integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
				</Head>
				<Header />
				<body className="font-main">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
