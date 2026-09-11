// Pantalla estática de referencia visual — layout del panel, sin datos ni lógica reales.
const navItems = [
  { label: "Panel principal", active: true },
  { label: "Edificios", active: false },
  { label: "Residentes", active: false },
  { label: "Pagos", active: false },
  { label: "Mantenimiento", active: false },
  { label: "Configuración", active: false },
];

const kpis = [
  { label: "Edificios activos", value: "12", trend: "+2 este mes", trendType: "success" as const },
  { label: "Residentes registrados", value: "1,284", trend: "+48 este mes", trendType: "success" as const },
  { label: "Ingresos del mes", value: "$48,920.00", trend: "+8.4% vs. anterior", trendType: "success" as const },
  { label: "Pagos pendientes", value: "36", trend: "-6 esta semana", trendType: "danger" as const },
];

const recentPayments = [
  { resident: "María Fernanda Rojas", unit: "Torre Norte · 4B", amount: "$450.00", status: "Pagado", date: "10 sep 2026" },
  { resident: "Carlos Iván Suárez", unit: "Torre Sur · 12A", amount: "$380.00", status: "Pendiente", date: "09 sep 2026" },
  { resident: "Lucía Andrea Paz", unit: "Torre Norte · 7C", amount: "$450.00", status: "Pagado", date: "09 sep 2026" },
  { resident: "Jorge Alejandro Quispe", unit: "Torre Este · 3D", amount: "$410.00", status: "Vencido", date: "05 sep 2026" },
  { resident: "Daniela Ibáñez", unit: "Torre Sur · 9B", amount: "$450.00", status: "Pagado", date: "04 sep 2026" },
];

const statusStyles: Record<string, string> = {
  Pagado: "bg-success-600/10 text-success-600",
  Pendiente: "bg-warning-600/10 text-warning-600",
  Vencido: "bg-danger-600/10 text-danger-600",
};

export default function AdminPanelPage() {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col justify-between border-r border-neutral-100 bg-surface-white px-4 py-6 lg:flex">
        <div>
          <div className="mb-8 flex items-center gap-2.5 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-[13px] font-bold text-white">
              E
            </div>
            <span className="font-subtitle text-[14px] font-semibold leading-[1.3] tracking-[-0.005em] text-neutral-900">
              Edificio Admin
            </span>
          </div>

          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`font-subtitle flex h-9 items-center rounded-lg px-3 text-[14px] font-medium leading-[1.3] tracking-[-0.005em] transition-colors ${
                  item.active
                    ? "bg-primary-50 text-primary-600"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5 rounded-lg border border-neutral-100 px-2.5 py-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-neutral-100" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium leading-[1.3] text-neutral-900">
              Joseph Humerez
            </p>
            <p className="font-caption truncate text-[11px] leading-[1.3] tracking-[0.01em] text-neutral-500">
              Administrador
            </p>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 items-center justify-between border-b border-neutral-100 bg-surface-white px-6">
          <h1 className="font-title text-[20px] font-bold leading-[1.2] tracking-[-0.015em] text-neutral-900">
            Panel principal
          </h1>

          <div className="flex items-center gap-3">
            <input
              type="search"
              placeholder="Buscar..."
              className="hidden h-9 w-56 rounded-lg border border-neutral-300 bg-neutral-50 px-3 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-primary-600 sm:block"
            />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-100 text-neutral-500 hover:bg-neutral-50"
              aria-label="Notificaciones"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className="h-9 w-9 rounded-full bg-neutral-100" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-6">
          <p className="mb-6 text-[13px] leading-[1.45] text-neutral-500">
            Resumen general de la operación del sistema.
          </p>

          {/* KPI cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-neutral-100 bg-surface-white p-5">
                <p className="font-caption text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                  {kpi.label}
                </p>
                <p className="font-title mt-2 text-[26px] font-bold leading-[1.2] tracking-[-0.015em] text-neutral-900 tabular-nums">
                  {kpi.value}
                </p>
                <p
                  className={`font-caption mt-1 text-[12px] font-medium leading-[1.3] ${
                    kpi.trendType === "success" ? "text-success-600" : "text-danger-600"
                  }`}
                >
                  {kpi.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Tabla */}
          <div className="mt-6 rounded-2xl border border-neutral-100 bg-surface-white">
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
              <h2 className="font-subtitle text-[15px] font-semibold leading-[1.3] tracking-[-0.005em] text-neutral-900">
                Pagos recientes
              </h2>
              <a
                href="#"
                className="font-caption text-[12px] font-medium leading-[1.3] tracking-[0.01em] text-primary-600 hover:text-primary-700"
              >
                Ver todos
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-neutral-100">
                    <th className="font-caption px-5 py-2.5 text-left text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                      Residente
                    </th>
                    <th className="font-caption px-5 py-2.5 text-left text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                      Unidad
                    </th>
                    <th className="font-caption px-5 py-2.5 text-left text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                      Monto
                    </th>
                    <th className="font-caption px-5 py-2.5 text-left text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                      Estado
                    </th>
                    <th className="font-caption px-5 py-2.5 text-left text-[11px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-neutral-500">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((row) => (
                    <tr key={row.resident} className="border-b border-neutral-100 last:border-0">
                      <td className="px-5 py-3 text-[13px] leading-[1.45] text-neutral-900">{row.resident}</td>
                      <td className="px-5 py-3 text-[13px] leading-[1.45] text-neutral-500">{row.unit}</td>
                      <td className="px-5 py-3 text-[13px] leading-[1.45] text-neutral-900 tabular-nums">
                        {row.amount}
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`font-caption inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium leading-[1.3] ${statusStyles[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="font-caption px-5 py-3 text-[12px] leading-[1.3] tracking-[0.01em] text-neutral-500">
                        {row.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
