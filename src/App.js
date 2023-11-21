import { GoBell, GoAlert, GoPaperclip,GoUpload,GoAlertFill } from 'react-icons/go';
import Button from "./Button";

function App() {
  return <div>
    <div>
      <Button success rounded outline><GoBell/>Click me!</Button>
    </div>
    <div>
      <Button danger outline><GoAlert/>Buy Now!</Button>
    </div>
    <div>
      <Button warning><GoAlertFill/>See Deal!</Button>
    </div>
    <div>
      <Button secondary outline><GoPaperclip/>Hide Ads!</Button>
    </div>
    <div>
      <Button primary outline><GoUpload/>Something!</Button>
    </div>
  </div>
}

export default App;