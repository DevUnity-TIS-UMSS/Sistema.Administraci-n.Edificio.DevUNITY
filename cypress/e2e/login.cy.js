describe('Login - DevUnity', () => {
  const EMAIL_VALIDO = 'admin@edificioxyz.com';
  const PASSWORD_VALIDO = 'Admin123!';

  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('muestra correctamente el formulario de login', () => {
    cy.contains('Bienvenido de nuevo').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.contains('button', 'Iniciar sesión').should('be.visible');
  });

  it('muestra un error con credenciales incorrectas', () => {
    cy.get('#email').type('usuario@incorrecto.com');
    cy.get('#password').type('claveIncorrecta123');
    cy.contains('button', 'Iniciar sesión').click();
    cy.contains('Correo o contraseña incorrectos.', { timeout: 10000 }).should('be.visible');
  });

  it('inicia sesión correctamente y redirige al panel admin', () => {
    cy.get('#email').type(EMAIL_VALIDO);
    cy.get('#password').type(PASSWORD_VALIDO);
    cy.contains('button', 'Iniciar sesión').click();
    cy.url({ timeout: 10000 }).should('include', '/admin');
  });

  it('el botón de acceso de prueba entra directo al panel', () => {
    cy.wait(500);
    cy.contains('Ingresar como admin TEST').click();
    cy.url({ timeout: 10000 }).should('include', '/admin');
  });
});