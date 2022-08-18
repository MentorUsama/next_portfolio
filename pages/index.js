import Wrapper from '../wrappers/Wrapper'
import {Hero,Services,Skills} from '../sections/index'
import { useTheme } from '../context'
export default function Home() {
  const theme=useTheme()
  return (
    <Wrapper >
      <Hero mode={theme.mode} />
      <Services mode={theme.mode} />
      <Skills mode={theme.mode}  />
    </Wrapper>
  )
}
