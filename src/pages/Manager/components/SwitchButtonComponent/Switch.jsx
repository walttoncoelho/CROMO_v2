import { SwitchLabelComponent, InputComponent, SliderComponent} from "./style/Switch"

export default SwitchButtonComponent
function SwitchButtonComponent() {
    return (
        <>
        <SwitchLabelComponent className="label">
            <InputComponent className='inputComponent' type='checkbox'></InputComponent>
            <SliderComponent className='sliderComponent'></SliderComponent>
        </SwitchLabelComponent>
        </>
    )
}