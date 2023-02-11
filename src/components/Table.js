
import "./Styles.css";
export default function Table({fullName,nickName,workspaceName,workspaceURL,selectedTab})
{
    return(
      <>
       <form>
       <h1>Congratulation, {fullName} !</h1>
          <p>You have completed onboarding,Start using Eden !</p>
          {/* table to display data */}
      <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Full Name</td>
          <td>{fullName}</td>
        </tr>
        <tr>
          <td>Nickname</td>
          <td>{nickName}</td>
        </tr>
        <tr>
          <td>Workspace Name</td>
          <td>{workspaceName}</td>
        </tr>
        <tr>
          <td>Workspace URL</td>
          <td>{workspaceURL?workspaceURL:"NA"}</td>
        </tr>
        <tr>
          <td>Select tab</td>
          <td>{selectedTab}</td>
        </tr>
      </tbody>
    </table>
      {/* table ends here */}
        </form>
        
      </>
    )
  }