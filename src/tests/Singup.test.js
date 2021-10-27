
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { FormSignup } from '../components/FormSignUp'

afterEach(cleanup);

test('Test sobre el component SignUp', () => {

    const mockHandleSubmit = jest.fn();
    render(<FormSignup handleSubmit={mockHandleSubmit}/>);

    const inputEmail = screen.getByPlaceholderText('Email')
    const inputPassword = screen.getByPlaceholderText('Contraseña')
    const inputConfirmPassword = screen.getByPlaceholderText('Confirmar contraseña')
    const btnSubmit = screen.getByTestId('submit-testSign')

    expect(inputEmail).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(btnSubmit).toBeInTheDocument()

    const emailValue = "bbjunior@developer.com";
    const passwordValue = "12345678";
    const confirmPasswordValue = "12345678";

    fireEvent.change(inputEmail, { target: { value: emailValue } });
    fireEvent.change(inputPassword, { target: { value: passwordValue } });
    fireEvent.change(inputConfirmPassword, { target: { value: confirmPasswordValue } });
    fireEvent.click(btnSubmit);
    expect(mockHandleSubmit).toHaveBeenCalledWith(emailValue, passwordValue, confirmPasswordValue);

})