import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Workspace({handleNext,workspaceName,workspaceURL,dispatch}){
return(
 <>
<form onSubmit={handleNext}>
<h1>Let set up a home for all your work !</h1>
<p>You can always create new one later.</p>
<TextField
  required
  id="workspace-name"
  label="Workspace Name"
  variant="outlined"
  margin="normal"
  placeholder="Workspace-name"
  value={workspaceName}
  onChange={(e) => dispatch({ type: "updateWorkspaceName", payload: e.target.value })}
  fullWidth
  focused
/>
<TextField
  id="workspace-url"
  label="Workspace URL (Optional)"
  variant="outlined"
  margin="normal"
  value={workspaceURL}
  onChange={(e) => dispatch({ type: "updateWorkspaceURL", payload: e.target.value })}
  fullWidth
/>

<Button type="submit" variant="contained" color="primary">
  Create Workspace
</Button>

</form>
</>
)}

