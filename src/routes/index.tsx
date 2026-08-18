import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Box,
  CalendarDays,
  ClipboardList,
  Cpu,
  FileText,
  FolderKanban,
  Globe,
  HardHat,
  Layers,
  Megaphone,
  ShieldCheck,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

import heroImage from "../assets/nova-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Apps — Repositorio de Programas" },
      {
        name: "description",
        content:
          "Centro visual de aplicaciones y herramientas digitales de Novacero. Accede con un clic a todos los programas corporativos.",
      },
      { property: "og:title", content: "Nova Apps — Repositorio de Programas" },
      {
        property: "og:description",
        content:
          "Centro visual de aplicaciones y herramientas digitales de Novacero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

interface Program {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
}

const programs: Program[] = [
  {
    id: "erp",
    title: "ERP Corporativo",
    description: "Gestión integral de recursos, finanzas y operaciones.",
    href: "https://erp.ejemplo.com",
    icon: BarChart3,
    featured: true,
  },
  {
    id: "inventory",
    title: "Inventarios de Acero",
    description: "Control de materiales, bobinas, perfiles y despachos.",
    href: "https://inventario.ejemplo.com",
    icon: Box,
  },
  {
    id: "production",
    title: "Producción",
    description: "Planeación de planta, órdenes y seguimiento de líneas.",
    href: "https://produccion.ejemplo.com",
    icon: Cpu,
  },
  {
    id: "safety",
    title: "Seguridad Industrial",
    description: "Reportes HSE, inspecciones y capacitaciones.",
    href: "https://seguridad.ejemplo.com",
    icon: ShieldCheck,
  },
  {
    id: "maintenance",
    title: "Mantenimiento",
    description: "OTs preventivas, correctivas y gestión de activos.",
    href: "https://mantenimiento.ejemplo.com",
    icon: HardHat,
  },
  {
    id: "logistics",
    title: "Logística y Transporte",
    description: "Rutas, flota, entregas y tracking de embarques.",
    href: "https://logistica.ejemplo.com",
    icon: Truck,
  },
  {
    id: "hr",
    title: "Talento Humano",
    description: "Nómina, asistencia, vacantes y desarrollo.",
    href: "https://rrhh.ejemplo.com",
    icon: Users,
  },
  {
    id: "portal",
    title: "Portal del Colaborador",
    description: "Consultas, documentos y servicios internos.",
    href: "https://portal.ejemplo.com",
    icon: Globe,
  },
  {
    id: "projects",
    title: "Gestión de Proyectos",
    description: "Portafolio de proyectos, hitos y recursos.",
    href: "https://proyectos.ejemplo.com",
    icon: FolderKanban,
  },
  {
    id: "docs",
    title: "Documentación Técnica",
    description: "Manuales, especificaciones y normas de calidad.",
    href: "https://documentos.ejemplo.com",
    icon: FileText,
  },
  {
    id: "quality",
    title: "Calidad y Laboratorio",
    description: "Ensayos, certificados y control de calidad.",
    href: "https://calidad.ejemplo.com",
    icon: ClipboardList,
  },
  {
    id: "schedule",
    title: "Turnos y Agendas",
    description: "Programación de turnos, salas y reuniones.",
    href: "https://agenda.ejemplo.com",
    icon: CalendarDays,
  },
  {
    id: "comms",
    title: "Comunicaciones",
    description: "Noticias internas, campañas y canales corporativos.",
    href: "https://comunicaciones.ejemplo.com",
    icon: Megaphone,
  },
  {
    id: "catalog",
    title: "Catálogo de Productos",
    description: "Fichas técnicas y disponibilidad comercial.",
    href: "https://catalogo.ejemplo.com",
    icon: Layers,
  },
];

function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <a
      href={program.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
          Abrir
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-card-foreground">{program.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {program.description}
        </p>
      </div>
      {program.featured && (
        <span className="absolute right-0 top-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Destacado
        </span>
      )}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-nova-black text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fondo industrial de acero con líneas amarillas"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nova-black/60 via-nova-black/40 to-nova-black/90" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:py-36">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-nova-yellow backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-nova-yellow" />
            Repositorio de Programas
          </span>
          <h1 className="max-w-4xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Nova Apps
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-white/80 md:text-xl">
            El centro visual de todas las herramientas digitales de Novacero.
            Encuentra y accede a cada aplicación con un solo clic.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#programas"
              className="inline-flex items-center justify-center rounded-full bg-nova-yellow px-7 py-3.5 text-sm font-bold text-nova-black shadow-lg shadow-nova-yellow/20 transition-transform hover:scale-105"
            >
              Ver programas
            </a>
            <a
              href="https://novacero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Sitio corporativo
            </a>
          </div>
        </div>
      </section>

      {/* Search hint */}
      <section id="programas" className="relative -mt-8 z-10 px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Programas disponibles</h2>
              <p className="mt-1 text-muted-foreground">
                {programs.length} aplicaciones corporativas listas para usar.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Todos los sistemas operativos
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-nova-black text-nova-yellow">
              <span className="text-lg font-bold">N</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Novacero</p>
              <p className="text-xs text-muted-foreground">Repositorio de programas</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Novacero. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
