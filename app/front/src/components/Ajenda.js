import React, {useRef} from 'react';



const Ajenda = () =>  {
  const textRef = useRef(null);
  // const  onclick = () => {
  //   console.log(textRef)
  // }

  return (
      <>
        <input ref={textRef} type="text" />
        <button type="button" onClick={()=> alert(textRef.current.value)}>値の確認</button>
      </>
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
