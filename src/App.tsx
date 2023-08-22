import "./styles.css";
import { Button } from "@swc-react/button";
import { Overlay } from "@spectrum-web-components/overlay";
import { Popover } from "@swc-react/popover";

export default function App() {
  const handleButtonClick = async () => {
    const overlayTriggerElement = document.getElementById("overlay-trigger");
    const overlayContentElement = document.getElementById("popover-content");
    await Overlay.open(
      overlayTriggerElement!,
      "click",
      overlayContentElement!,
      {
        placement: "bottom-start"
      }
    );
  };
  return (
    <div className="App">
      <Button id="overlay-trigger" onClick={handleButtonClick}>
        Hello CodeSandbox
      </Button>
      <h2>Start editing to see some magic happen!</h2>
      <Popover id="popover-content" tabIndex={0}>
        <h1>### Popover Content ###</h1>
      </Popover>
    </div>
  );
}
