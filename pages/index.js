import Wrapper from '../wrappers/Wrapper'
import {Hero} from '../sections/index'
import { useTheme } from '../context'
export default function Home() {
  const theme=useTheme()
  return (
    <Wrapper >
      <Hero mode={theme.mode}></Hero>
      <div style={{backgroundColor:'purple',height:"100vh"}}></div>
      <div style={{backgroundColor:'magenta',height:"100vh"}}></div>
    </Wrapper>
  )
}
