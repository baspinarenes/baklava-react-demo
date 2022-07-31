import { BlTooltip, BlButton } from "@trendyol/baklava/dist/baklava-react";

function App() {
  return (
    <div className="App">
      <p>Open tooltip and hide to trigger custom event</p>
      <bl-tooltip
        style={{ "--bl-tooltip-position": "fixed" }}
        // lit custom events not work in react
        onHide={() => alert("Custom event (onHide) triggered!")}
      >
        <bl-button slot="tooltip-trigger">bl-button:</bl-button>
        Tooltip description.
      </bl-tooltip>

      {/*---------------------------------------------------*/}

      <BlTooltip
        style={{ "--bl-tooltip-position": "fixed" }}
        onHide={() => alert("Custom event (onHide) triggered!")}
      >
        <BlButton slot="tooltip-trigger">BlButton:</BlButton>
        Tooltip description.
      </BlTooltip>
    </div>
  );
}

export default App;
