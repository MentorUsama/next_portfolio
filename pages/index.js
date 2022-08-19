import Wrapper from '../wrappers/Wrapper'
import {Hero,Services,Skills,Projects} from '../sections/index'
import { useTheme } from '../context'
export default function Home() {
  const theme=useTheme()
  return (
    <Wrapper >
      <Hero mode={theme.mode} />
      <Services mode={theme.mode} />
      <div style={{backgroundColor:'yellow'}}><Skills mode={theme.mode}  /></div>
      <div style={{backgroundColor:'red'}}><Projects mode={theme.mode} /></div>
    </Wrapper>
  )
}
