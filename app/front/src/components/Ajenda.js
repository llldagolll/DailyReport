import React, {useState, useRef} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'



const Ajenda = () =>  {
  const ref = useRef();
  const  onclick = () => {
    console.log(ref)
  }

  return (
    <Grid container alignItems="center" justify="center">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" ref={ref} />
        <button onClick={onclick}>fas </button>
      </Box>
    </Grid>
  );
}





// const Ajenda = () =>  {
//   return (
//     <Grid container alignItems="center" justify="center">
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       </Box>
//     </Grid>
//   );
// }



export default Ajenda
