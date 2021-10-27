
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { FormLogin } from '../components/FormLogin'

afterEach(cleanup);
//beforeEach(() => render(<FormLogin/>)) 

test('sobre el coponente FormLogin', () => {
    
    const mockHandleSubmit = jest.fn();
    render(<FormLogin handleSubmit={(mockHandleSubmit)} />);

    const inputEmail = screen.getByPlaceholderText('Correo')
    const inputPassword = screen.getByPlaceholderText('Contraseña')
    const btnSubmit = screen.getByTestId('submit-test')

    expect(inputEmail).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(btnSubmit).toBeInTheDocument()

    const emailValue = "bbjunior@developer.com";
    const passwordValue = "12345678";

    fireEvent.change(inputEmail, { target: { value: emailValue } });
    fireEvent.change(inputPassword, { target: { value: passwordValue } });
    fireEvent.click(btnSubmit);
    expect(mockHandleSubmit).toHaveBeenCalledWith(emailValue, passwordValue);

});