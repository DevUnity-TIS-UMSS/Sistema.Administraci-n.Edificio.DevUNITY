// Pantalla estática de referencia visual — sin lógica de autenticación conectada.
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Marca */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-[15px] font-bold text-primary-foreground">
            E
          </div>
          <div>
            <h1 className="font-title text-[22px] font-bold leading-[1.2] tracking-[-0.015em] text-foreground">
              Bienvenido de nuevo
            </h1>
            <p className="font-subtitle mt-1 text-[14px] font-semibold leading-[1.3] tracking-[-0.005em] text-muted-foreground">
              Ingresa tus credenciales para acceder al panel
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_1px_2px_rgba(9,9,11,0.04),0_12px_32px_-16px_rgba(9,9,11,0.12)]">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[13px] font-medium leading-[1.3] tracking-[-0.005em] text-foreground"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="nombre@empresa.com"
                className="h-11 rounded-lg border border-input bg-background px-3.5 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[13px] font-medium leading-[1.3] tracking-[-0.005em] text-foreground"
                >
                  Contraseña
                </label>
                <a
                  href="#"
                  className="font-caption text-[12px] leading-[1.3] tracking-[0.01em] text-primary hover:text-primary/80"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-lg border border-input bg-background px-3.5 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </div>

            <label className="flex items-center gap-2 text-[13px] leading-[1.4] text-foreground">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
              />
              Recordarme en este dispositivo
            </label>

            <button
              type="submit"
              className="mt-1 flex h-11 items-center justify-center rounded-lg bg-primary text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-caption text-[11px] uppercase leading-[1.3] tracking-[0.01em] text-muted-foreground">
              o continúa con
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-input text-[14px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            Continuar con SSO corporativo
          </button>
        </div>

        <p className="font-caption mt-6 text-center text-[12px] leading-[1.3] tracking-[0.01em] text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="font-medium text-primary hover:text-primary/80">
            Contacta a tu administrador
          </a>
        </p>
      </div>
    </div>
  );
}
