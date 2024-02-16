import { Grid } from '@chakra-ui/react';
import ComponentLogin from './ComponentLogin'  

const TopSection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <ComponentLogin/>

    </Grid>
  )
}

export default TopSection;