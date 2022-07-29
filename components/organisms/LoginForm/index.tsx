import { Button } from "components/atoms"
import LinkComponent from "components/atoms/Link"
import HandlingInput from "components/molecules/HandlingInput"

const LoginForm = () => {
  return (
    <div>
        <HandlingInput
            title="Email yang anda masukkan tidak valid"
            type="email"
            placeholder="Email"
        />
        <HandlingInput
            title="Password kurang dari 8 karakter"
            type="password"
            placeholder="Password"
        />
        <LinkComponent
            text="Lupa kata sandi?"
            href="/dashboard"
        />
        <Button
            type="submit"
            theme="primary">
                Submit
        </Button>
    </div>
  )
}

export default LoginForm