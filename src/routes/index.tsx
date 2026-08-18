import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  ClipboardList,
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
  status: "active" | "temporal";
}

const programs: Program[] = [
  {
    id: "thcf002",
    title: "THCF002",
    description: "Portal de talento humano y gestión de colaboradores.",
    href: "https://thcf002.ejemplo.com",
    icon: Briefcase,
    status: "temporal",
  },
  {
    id: "ruta-carrera",
    title: "Ruta de Carrera",
    description: "Planificación y desarrollo profesional de los colaboradores.",
    href: "https://ruta-carrera.ejemplo.com",
    icon: BarChart3,
    status: "active",
  },
  {
    id: "capacitacion",
    title: "Sistema de Capacitación",
    description: "Cursos, formación y seguimiento de capacitaciones corporativas.",
    href: "https://capacitacion.ejemplo.com",
    icon: BookOpen,
    status: "active",
  },
  {
    id: "desempeno",
    title: "Gestión de Desempeño",
    description: "Evaluación de competencias, metas y retroalimentación.",
    href: "https://desempeno.ejemplo.com",
    icon: ClipboardList,
    status: "active",
  },
];

function StatusBadge({ status }: { status: Program["status"] }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Activo
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 ring-1 ring-inset ring-amber-500/20">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      Temporal
    </span>
  );
}

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
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-card-foreground">{program.title}</h3>
        </div>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {program.description}
        </p>
      </div>
      <div className="mt-auto pt-2">
        <StatusBadge status={program.status} />
      </div>
    </a>
  );
}

function Index() {
  const counts = useMemo(() => {
    const active = programs.filter((p) => p.status === "active").length;
    const temporal = programs.filter((p) => p.status === "temporal").length;
    return { active, temporal };
  }, []);

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

      {/* Status summary */}
      <section id="programas" className="relative -mt-8 z-10 px-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Programas disponibles</h2>
              <p className="mt-1 text-muted-foreground">
                {programs.length} aplicaciones corporativas listas para usar.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {counts.active} activo{counts.active !== 1 ? "s" : ""}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {counts.temporal} temporal{counts.temporal !== 1 ? "es" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
