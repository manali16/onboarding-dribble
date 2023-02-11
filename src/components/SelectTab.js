import Button from "@material-ui/core/Button";
import "./Styles.css"
export default function SelectTab({handleNext,selectedTab,dispatch}){
return(
 <>
 <form onSubmit={handleNext}>
 <h1>How are you planning to use Eden? !</h1>
 <p>You can always create new one later.</p>
 <div style={{marginBottom:"3vh"}}>
  <div 
  className="selectTab-div"
  style={{
    boxShadow: selectedTab === "For Myself" ? "0 0 0 2px #4730a9" : "none",
  }}
  onClick={() => dispatch({ type: "updateSelectedTab", payload: "For Myself" })}
>
 <b> For Myself</b>
  <p>Write better,think clearly.Stay organized.</p>
</div>
<div
  style={{
    boxShadow: selectedTab === "With My Team" ? "0 0 0 2px #4730a9" : "none",
  }}
  className="selectTab-div"
  onClick={() => dispatch({ type: "updateSelectedTab", payload: "With My Team" })}
>
 <b>With My team</b> 
  <p>Wiki,docs,task & projects.all in one place</p>
</div>
</div>
<Button type="submit" variant="contained" color="primary" >
            Create Workspace
          </Button>
    </form>
      </>)}

