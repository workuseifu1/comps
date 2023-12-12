import { GoBell, GoAlert, GoPaperclip, GoUpload, GoAlertFill } from 'react-icons/go';
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log('clicked!');
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoAlert />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoAlertFill />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoPaperclip />Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoUpload />Something!
        </Button>
      </div>
    </div>
  );
}

export default App;