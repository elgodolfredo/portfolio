import { Box, Image } from "@chakra-ui/react";

const ToolImage = ({ src }) => {
  return (
    <Box width={100} height={100} alignItems="center" display="flex">
     <Image src={src} alt="tool" width={80} />
    </Box>
  )
}


export default ToolImage;