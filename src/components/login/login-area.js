import { useHandleState } from '../../hooks/useHandleState';
import LoginArea from './login-box';
import RegisterArea from './login-register-box';

export default function LoginAreaContainer() {
    const { view } = useHandleState();
    return (
        <>
            {
                view ? <LoginArea /> : <RegisterArea />
            }
        </>
    )
}