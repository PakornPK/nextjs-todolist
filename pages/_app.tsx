import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </RecoilRoot>
  )
}
