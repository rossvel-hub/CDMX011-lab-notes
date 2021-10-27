// import '@testing-library/react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormLogin } from '../components/FormLogin'


beforeEach(() => render(<FormLogin/>)) 

test('sobre el coponente FormLogin', () => {
    
    const mockHandleSubmit = jest.fn();
    render(<FormLogin handleSubmit={(mockHandleSubmit)} />);

    const inputEmail = screen.getByPlaceholderText('Correo')[0]
    const inputPassword = screen.getByPlaceholderText('Contraseña')[0]
    const btnSubmit = screen.getByRole('input', {name:/Log In/i})


    expect(inputEmail).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(btnSubmit).toBeInTheDocument()

    const emailValue = "vicky@labo.com";
    const passwordValue = "12345678";

    fireEvent.change(inputEmail, { target: { value: emailValue } });
    fireEvent.change(inputPassword, { target: { value: passwordValue } });
    fireEvent.click(btnSubmit);
    expect(mockHandleSubmit).toHaveBeenCalledWith(emailValue, passwordValue);

    // //click
    // fireEvent.submit(contentSubmit)

    // expect(mockHandleSubmit).toHaveBeenCalledWith( "vicky@labo.com", "12345678");

    // test("sobre el componente FormLogin", () => {
        // const mockHandleLogin = jest.fn();
        // render(<FormLogin handleLogin={(mockHandleLogin)} />);
        // const contentEmail = screen.getByPlaceholderText("ejemplo@ejemplo.com");
        // const contentPasswords = screen.getByPlaceholderText("*******");
        // const buttonLogin = screen.getByText("Inicia Sesión");
        // expect(contentEmail).toBeInTheDocument();
        // expect(contentPasswords).toBeInTheDocument();
        // const emailValue = "vicky@labo.com";
        // const passwordValue = "12345678";
        // fireEvent.change(contentEmail, { target: { value: emailValue } });
        // fireEvent.change(contentPasswords, { target: { value: passwordValue } });
        // fireEvent.click(buttonLogin);
        // expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
    //   });

});