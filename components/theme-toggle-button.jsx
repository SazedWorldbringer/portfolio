import { AnimatePresence, motion } from 'framer-motion'
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
    <AnimatePresence exitBeforeEnter initial={false}>
      <Tooltip
        hasArrow
        label="Change theme"
        openDelay={300}
        closeDelay={300}
        bg={useColorModeValue('purple.400', 'orange.200')}
        rounded="lg"
      >
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          />
        </motion.div>
      </Tooltip>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
