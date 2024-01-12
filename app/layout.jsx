import "./globals.css"
import { PopContextProvider } from "./context/PopContext"

export const metadata = {
    title: "Jitender Kumar's Portfolio",
    description: "Welcome to my personal portfolio website.",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <meta charset='UTF-8' />
                <link rel='icon' type='image/svg+xml' href='/logo.svg' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css' integrity='sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==' crossorigin='anonymous' referrerpolicy='no-referrer' />
            </head>
            <body>
                <PopContextProvider>{children}</PopContextProvider>
            </body>
        </html>
    )
}
