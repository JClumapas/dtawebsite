import { useState, useEffect } from 'react';
import { AmplifyAuthContainer,
         AmplifyAuthenticator,
         AmplifySignUp,
         AmplifySignIn
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Cards from "components/cards/ThreeColSlider"

const OpenTournaments = () => {
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);

    console.log(authState);
    console.log(user);
    return authState === AuthState.SignedIn && user ? (
        <AnimationRevealPage>
            <Cards></Cards>
        </AnimationRevealPage>
    ) : (
        <AmplifyAuthContainer>
            <AmplifyAuthenticator usernameAlias="email">
                <AmplifySignUp
                    slot="sign-up"
                    formFields={[
                    {
                        type: "username",
                        label: "Username *",
                        inputProps: { required: true, autocomplete: "username" },
                    },
                    {
                        type: "email",
                        label: "Email *",
                        inputProps: { required: true, autocomplete: "email" },
                    },
                    {
                        type: "password",
                        label: "Password *",
                        inputProps: { required: true, autocomplete: "new-password" },
                    },
                    ]} 
                />
                <AmplifySignIn 
                    slot="sign-in" 
                    usernameAlias="email" 
                    formFields={[
                    {
                        type: "username",
                        label: "Username or Email *",
                        inputProps: { required: true, autocomplete: "username" },
                    },
                    {
                        type: "password",
                        label: "Password *",
                        inputProps: { required: true, autocomplete: "password"},
                    },
                    ]}
                />
            </ AmplifyAuthenticator>
        </AmplifyAuthContainer>
    );
};

export default OpenTournaments;