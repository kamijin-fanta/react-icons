
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdArrowForward extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"/></g>
            </IconBase>
        );
    }
}