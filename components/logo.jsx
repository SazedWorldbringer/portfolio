import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import SwordIcon from './icons/sword'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
    transform: rotate(-90deg);
  }

  &:hover > svg {
    transform: rotate(-70deg) scale(1.1);
  }
`

const Logo = () => {
  return (
    <Link href={'/'} scroll={false}>
      <a>
        <LogoBox>
          <SwordIcon />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Atharva Pardeshi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
