import React, { useState ,useReducer} from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Login from "./Login";
import Workspace from "./Workspace";
import SelectTab from "./SelectTab";
import Table from "./Table";
import "./Styles.css";

const steps = ["1", "2", "3", "4"];

function getStepContent(step, handleNext, state, dispatch) {
  const { fullName, nickName, workspaceName, workspaceURL, selectedTab } = state;
  switch (step) {
    case 0:
      return (
      <Login
      handleNext={handleNext}
      fullName={fullName}
      nickName={nickName}
      dispatch={dispatch}/>
      );
    case 1:
      return (
      <Workspace
       handleNext={handleNext}
       workspaceName={workspaceName}
       workspaceURL={workspaceURL}
       dispatch={dispatch}/>
      );

    case 2:
       return (
       <SelectTab 
       handleNext={handleNext}
       selectedTab={selectedTab} 
       dispatch={dispatch}/>
       );
    case 3:
      return (
      <Table fullName={fullName} 
      nickName={nickName}
       workspaceName={workspaceName} 
       workspaceURL={workspaceURL} 
       selectedTab={selectedTab}/>
      );
    default:
      return "Unknown step";
  }
}

export default function HorizontalStepper() {
  const initialState = {
    fullName: "",
    nickName: "",
    workspaceName: "",
    workspaceURL: "",
    selectedTab: "",
  };
  const [activeStep, setActiveStep] = useState(0);
  const [state, dispatch] = useReducer(formReducer, initialState);
 
  function formReducer(state, action) {
    switch (action.type) {
      case "updateFullName":
        return { ...state, fullName: action.payload };
      case "updateNickName":
        return { ...state, nickName: action.payload };
      case "updateWorkspaceName":
        return { ...state, workspaceName: action.payload };
      case "updateWorkspaceURL":
        return { ...state, workspaceURL: action.payload };
      case "updateSelectedTab":
        return { ...state, selectedTab: action.payload };
      default:
        return state;
    }
  }  

// Stepper handler 
  const handleNext = (event) => {
    event.preventDefault();

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return ( 
    <>
      <div className="container">
        <div className="content-box">
          <Stepper activeStep={activeStep}>
            {steps.map((label,index) => (
              <Step key={label} completed={index===3?index < activeStep+1:index < activeStep}>
                <StepLabel ></StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep, handleNext, state, dispatch)}
        </div>
      </div>
    </>
  );
}

