import Wrapper from '../wrappers/Wrapper'
import {Hero,Services} from '../sections/index'
import { useTheme } from '../context'
export default function Home() {
  const theme=useTheme()
  return (
    <Wrapper >
      <Hero mode={theme.mode}></Hero>
      <Services mode={theme.mode} />
      <div style={{backgroundColor:'purple',height:"100vh"}}></div>
      <div style={{backgroundColor:'magenta',height:"100vh"}}></div>
    </Wrapper>
  )
}
