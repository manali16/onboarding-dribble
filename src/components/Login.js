import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Login({handleNext,fullName,nickName,dispatch}){
    return(
      <>
       
          <form onSubmit={handleNext}>
            <h1>Welcome! First things first...</h1>
            <p>You can always change them later</p>
            <TextField
              required
              id="full-name"
              label="Full Name"
              variant="outlined"
              margin="normal"
              placeholder="Steve Jobs"
              fullWidth
              focused
              value={fullName}
              onChange={(e) => dispatch({ type: "updateFullName", payload: e.target.value })}
            />
  
            <TextField
              required
              id="display-name"
              label="Display Name"
              variant="outlined"
              margin="normal"
              placeholder="Steve"
              fullWidth
              focused
              value={nickName}
              onChange={(e) => dispatch({ type: "updateNickName", payload: e.target.value })}
            />
  
            <Button type="submit" variant="contained" color="primary">
              Create Workspace
            </Button>
          </form>
        
      </>
    )
  }