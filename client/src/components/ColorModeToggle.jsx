import { useColorMode, IconButton } from "@chakra-ui/react";
import { IoSunnyOutline, IoMoonSharp  } from 'react-icons/io5'

const ColorModeToggle = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return <IconButton icon={colorMode === 'dark' ? <IoSunnyOutline /> : <IoMoonSharp />} onClick={toggleColorMode} variant='ghost'/>
};

export default ColorModeToggle;
