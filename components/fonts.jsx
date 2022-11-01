import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&family=Roboto:wght@300;400;700&family=Space+Mono:ital,wght@0,700;1,400&display=swap');
    `}
  />
)

export default Fonts
