import ReactDOM from 'react-dom';

export function customAttributes(...attrs) {
    return function(component) {
        var originalComponentDidMount = component.prototype.componentDidMount;
        component.prototype.componentDidMount = function() {
            if (originalComponentDidMount) originalComponentDidMount.apply(this, arguments);
            var rootDom = ReactDOM.findDOMNode(this);
            attrs.map(attr => {
                if (!this.props.hasOwnProperty(attr)) return;
                if (this.props[attr] === false && rootDom.hasAttribute(attr)) {
                    rootDom.removeAttribute(attr);
                    return;
                }
                rootDom.setAttribute(attr, this.props[attr])
            });
        };
        return component;
    }
}
