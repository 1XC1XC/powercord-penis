const { React } = require("powercord/webpack")
const { SwitchItem, SliderInput } = require("powercord/components/settings")
// const Components = {
//     ...require("powercord/components/settings"),
//     ...require("powercord/components")
// }

module.exports = class Settings extends React.Component {
    render() {
        const { getSetting, updateSetting, toggleSetting } = this.props


        return (
            <div>
                <SwitchItem
                    note={
                        "Send the message content in chat, instead of a system message that is client side."
                    }
                    value={getSetting("send", false)}
                    onChange={() => toggleSetting("send")}
                >
                    Send In Chat
                </SwitchItem>


                <SliderInput
					stickToMarkers
					minValue={1}
					maxValue={100}
					initialValue={getSetting("size", 1)}
					markers={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
					onValueChange={change => updateSetting("size", change)}
				>
					Dick Size Precent
				</SliderInput>
            </div>
        )
    }
}
