import React, {Component} from "react";
import store from "../../../../store/store";
import { setUpdatedNode, setCustomizerSettingsData } from "../../../../store/customizer-settings/actions";
import Resource from "../../../../../../../editor/src/js/classes/Resource";

export default class Edge extends Component{
    constructor(props){
        super(props);
        this.state={
            customizerOptions: []
        }
        this.toggle = this.toggle.bind(this);

        this.customizerOptionsResource = new Resource({ route: "/admin/ajax/customizer_options" });
    }

    async componentDidMount() {
        const customizerOptions = await this.customizerOptionsResource.getAll();
        this.setState(s =>({...s, customizerOptions}));
    }

    toggle() {
        const node = this.props.selectEdge;

        if(node.animated === undefined) node.animated = false;
        node.animated = !node.animated;
        store.dispatch(setUpdatedNode(node));

        // вызов принудительного рендера flow
        const elements = store.getState()?.customizerSettingsData;
        const newElements = _.cloneDeep(elements);
        store.dispatch(setCustomizerSettingsData(newElements));
    }

    changeInput(e){
        const value = e.target.value;
        const node = this.props.selectEdge;
        if(!node.data) node.data = {};
        node.label = value;
        store.dispatch(setUpdatedNode(node));

        // вызов принудительного рендера flow
        const elements = store.getState()?.customizerSettingsData;
        const newElements = _.cloneDeep(elements);
        store.dispatch(setCustomizerSettingsData(newElements));
    }

    // Запись значений select в store
    changeSelect(e) {
        let node = this.props.selectEdge;
        node.type = e.target.value;
        store.dispatch(setUpdatedNode(node));

        // вызов принудительного рендера flow
        const elements = store.getState()?.customizerSettingsData;
        const newElements = _.cloneDeep(elements);
        store.dispatch(setCustomizerSettingsData(newElements));
    }

    render(){
        const edge = this.props.selectEdge?.type ?? '';
        const edgeTypeOptions = [
            {label:'default', value: 'default'},
            {label:'straight', value: 'straight'},
            {label:'step', value: 'step'},
            {label:'smoothstep', value: 'smoothstep'},
            {label:'custom', value: 'custom'}
        ];

        let value = (this.props.selectEdge?.animated === true) ?? false;
        let switcherClasses = `control-switcher control-switcher_${value ? 'on' : 'off'}`;

        return <div>
            <div className="controller-container controller-container_select">
                <div className="controller-container__label control-select__label controller-label">Start Condition</div>
                <div className="control-container_select-wrapper controller-field">
                <select className="control-select control-field"
                    value={edge || ''}
                    onChange={e => {this.changeSelect(e)}}
                >
                    <option disabled value="" />
                    {edgeTypeOptions.map(option => { return <option value={option.value} key={option.value || 'null'}>{option.label}</option> })}
                </select>
                </div>
            </div>
            <div className="customizer_switcher">
                <div className="customizer_switcher__label">
                    Animated
                </div>
                <div className={switcherClasses} onClick={this.toggle}>
                    <div className="control-switcher__on-text">ON</div>
                    <div className="control-switcher__caret" />
                    <div className="control-switcher__off-text">OFF</div>
                </div>
            </div>
            <div className="controller-container controller-container_textarea">
                <div className="controller-container__label control-select__label controller-label">Text</div>
                <textarea
                    className="control-field controller-field"
                    type="text"
                    onChange={(e) => { this.changeInput(e) }}
                    value={ this.props.selectEdge?.label ?? '' }
                    // rows="3"
                    style={{lineHeight: '125%', height: 'auto'}}
                ></textarea>
            </div>
        </div>
    }
}
