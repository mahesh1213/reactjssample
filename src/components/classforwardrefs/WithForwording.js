import { Component } from "react";

export function WithForwording (WrappedComponent){
    class Forwarding extends Component {
        // eslint-disable-next-line no-useless-constructor
        constructor(){
            super();
        }

        render(){
            return (
                <div>
                    <WrappedComponent />
                </div>
            )
        }
    }
}