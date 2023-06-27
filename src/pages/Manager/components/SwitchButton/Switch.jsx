import { SwitchLabel, Input, Slider, SpanArquivar} from "./style/Switch"

export default SwitchButton
function SwitchButton() {
    function changeOpacity(event) {
        const checkbox = event.currentTarget.querySelector(".input");
        const label = event.currentTarget.querySelector(".arquivar");

        if (checkbox.checked) {
          label.style.opacity = 0;
        } else {
          label.style.opacity = 1;
        }
      }
    return (
        <>
        <SwitchLabel className="label" onClick={changeOpacity}>
          <SpanArquivar className="arquivar">Arquivar</SpanArquivar>
            <Input className="input" type="checkbox" />
            <Slider className="slider" />
        </SwitchLabel>
    </>
    )
}


