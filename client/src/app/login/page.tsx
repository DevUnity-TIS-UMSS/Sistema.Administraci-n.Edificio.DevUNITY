// Pantalla estática de referencia visual — sin lógica de autenticación conectada.
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Marca */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-[15px] font-bold text-white">
            E
          </div>
          <div>
            <h1 className="font-title text-[22px] font-bold leading-[1.2] tracking-[-0.015em] text-neutral-900">
              Bienvenido de nuevo
            </h1>
            <p className="font-subtitle mt-1 text-[14px] font-semibold leading-[1.3] tracking-[-0.005em] text-neutral-500">
              Ingresa tus credenciales para acceder al panel
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-neutral-100 bg-surface-white p-8 shadow-[0_1px_2px_rgba(17,24,39,0.04),0_12px_32px_-16px_rgba(17,24,39,0.12)]">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[13px] font-medium leading-[1.3] tracking-[-0.005em] text-neutral-700"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="nombre@empresa.com"
                className="h-11 rounded-lg border border-neutral-300 bg-surface-white px-3.5 text-[14px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-primary-600 focus:ring-4 focus:ring-primary-50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[13px] font-medium leading-[1.3] tracking-[-0.005em] text-neutral-700"
                >
                  Contraseña
                </label>
                <a
                  href="#"
                  className="font-caption text-[12px] leading-[1.3] tracking-[0.01em] text-primary-600 hover:text-primary-700"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-lg border border-neutral-300 bg-surface-white px-3.5 text-[14px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-primary-600 focus:ring-4 focus:ring-primary-50"
              />
            </div>

            <label className="flex items-center gap-2 text-[13px] leading-[1.4] text-neutral-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-600"
              />
              Recordarme en este dispositivo
            </label>

            <button
              type="submit"
              className="mt-1 flex h-11 items-center justify-center rounded-lg bg-primary-600 text-[14px] font-medium text-white transition-colors hover:bg-primary-700"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-100" />
            <span className="font-caption text-[11px] uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
              o continúa con
            </span>
            <div className="h-px flex-1 bg-neutral-100" />
          </div>

          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 text-[14px] font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Continuar con SSO corporativo
          </button>
        </div>

        <p className="font-caption mt-6 text-center text-[12px] leading-[1.3] tracking-[0.01em] text-neutral-500">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-700">
            Contacta a tu administrador
          </a>
        </p>
      </div>
    </div>
  );
}
