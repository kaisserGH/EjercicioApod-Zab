//css externo
//css Inline
//css JSON

const titleStyle ={
  color:'white',
  
}


function Main ({name,age}){
  
  return (
     <>
      <h1 style={titleStyle}>
           Bienvenido, {name}
        
        </h1> 

      <h3
          style={{
              color:'red',
            
          }}
      >
            {age}
        </h3>
      </>
    )
}


export default Main;