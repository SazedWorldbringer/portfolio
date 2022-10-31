import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Tooltip
      hasArrow
      label="Change theme"
      openDelay={300}
      closeDelay={300}
      bg={useColorModeValue('purple.400', 'orange.200')}
      rounded="lg"
    >
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
    </Tooltip>
  )
}

export default ThemeToggleButton
