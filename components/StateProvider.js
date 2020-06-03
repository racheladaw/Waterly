import React from 'react';
import { Stitch } from 'mongodb-stitch-react-native-sdk';

export const StateContext = React.createContext();

export class StateProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentUserId: undefined,
            client: undefined
        };
        this.loadClient = this.loadClient.bind(this);
        this.setCurrentUserId = this.setCurrentUserId.bind(this);
    }

    componentDidMount() {
        console.log("component mounted")
        this.loadClient();
    }

    setCurrentUserId(userId) {
        this.setState({ currentUserId: userId })
        console.log(`Successfully logged in as user ${userId}`);
    }

    loadClient() {
        Stitch.initializeDefaultAppClient('waterly-qyngc').then(client => {
            this.setState({ client });

            if(client.auth.isLoggedIn) {
            this.setState({ currentUserId: client.auth.user.id })
            }
    });
    console.log("client loaded")
    }

    render() {
        return (
            <StateContext.Provider value={{
                state: this.state,

            }}>
                {this.props.children}
            </StateContext.Provider>
        );
    }
}