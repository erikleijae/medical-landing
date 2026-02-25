"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { MotionReveal } from "./motion-reveal";
import { DeepClinicFxFrame } from "./deepclinic-fx-frame";

/* Assets */
const WHATSAPP_VIDEO = "/video/day_disconect.mp4";

type Props = {
  lang?: "es" | "en" | "pt";
};

const CONTENT = {
  es: {
    title: "DeepClinic Asistente Clínico en WhatsApp",
    description: "Tu equipo clínico opera desde WhatsApp: organiza, prioriza y da seguimiento sin perder contexto.",
    cta: "Ver Agentes",
    footer: ""
  },
  en: {
    title: "DeepClinic Clinical Assistant on WhatsApp",
    description: "Run your clinical operations from WhatsApp: organize, prioritize, and follow up with full context.",
    cta: "View Agents",
    footer: ""
  },
  pt: {
    title: "DeepClinic Assistente Clínico no WhatsApp",
    description: "Sua operação clínica roda no WhatsApp: organiza, prioriza e acompanha sem perder contexto.",
    cta: "Ver Agentes",
    footer: ""
  },
};

type WhatsAppStep = {
  id: string;
  title: string;
  caption: string;
  bullets: readonly string[];
};

const STEPS: Record<"es" | "en" | "pt", readonly WhatsAppStep[]> = {
  es: [
    {
      id: "01",
      title: "Entra por WhatsApp",
      caption: "Para el paciente no cambia nada.",
      bullets: [
        "El paciente escribe como siempre",
        "Tú ves todo en una bandeja única",
        "Sin apps nuevas, sin fricción",
      ],
    },
    {
      id: "02",
      title: "Organiza y prioriza",
      caption: "DeepClinic etiqueta, agrupa y te deja solo lo crítico.",
      bullets: [
        "Categoriza por tema (consulta, citas, administración)",
        "Detecta urgencias y pendientes",
        "Ordena por prioridad clínica",
      ],
    },
    {
      id: "03",
      title: "Responde con contexto",
      caption: "Resumen + siguientes pasos listos.",
      bullets: [
        "Resume la conversación y el motivo",
        "Plantillas para respuestas frecuentes",
        "Seguimiento automático cuando lo necesites",
      ],
    },
  ],
  en: [
    {
      id: "01",
      title: "WhatsApp in",
      caption: "No change for patients.",
      bullets: ["Patients message as usual", "You get one unified inbox", "No new apps, no friction"],
    },
    {
      id: "02",
      title: "Organize & prioritize",
      caption: "DeepClinic tags, groups and escalates what's critical.",
      bullets: ["Auto-categorize by topic", "Detect urgency & pending tasks", "Sort by clinical priority"],
    },
    {
      id: "03",
      title: "Reply with context",
      caption: "Summary + next steps, ready to send.",
      bullets: ["Conversation summary", "Templates for frequent replies", "Automated follow-up"],
    },
  ],
  pt: [
    {
      id: "01",
      title: "Entra pelo WhatsApp",
      caption: "Para o paciente, nada muda.",
      bullets: ["O paciente escreve normalmente", "Você vê tudo em uma bandeja", "Sem fricção"],
    },
    {
      id: "02",
      title: "Organiza e prioriza",
      caption: "DeepClinic etiqueta, agrupa e destaca o crítico.",
      bullets: ["Categoriza automaticamente", "Detecta urgências e pendências", "Ordena por prioridade"],
    },
    {
      id: "03",
      title: "Responde com contexto",
      caption: "Resumo + próximos passos prontos.",
      bullets: ["Resumo da conversa", "Modelos de resposta", "Follow-up automático"],
    },
  ],
};

function WhatsAppVisual({
  activeStep,
  videoRef,
  lang,
}: {
  activeStep: number;
  videoRef: React.RefObject<HTMLVideoElement>;
  lang: "es" | "en" | "pt";
}) {
  const PhoneFrame = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="relative h-full w-auto max-h-full max-w-full">
        <div className="h-full rounded-[54px] bg-gradient-to-b from-white/25 to-white/10 p-[14px] shadow-[0_44px_140px_rgba(0,0,0,0.34)]">
          <div className="relative mx-auto h-full w-auto max-w-full overflow-hidden rounded-[42px] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
            <div className="relative aspect-[9/19] h-full w-auto">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_10%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(80%_65%_at_75%_35%,rgba(34,197,94,0.08),transparent_62%)]" />
              <div className="absolute left-1/2 top-3 h-[22px] w-[128px] -translate-x-1/2 rounded-full bg-black/10" />
              <div className="absolute left-6 top-4 text-[11px] font-semibold text-black/60">9:41</div>
              <div className="absolute right-6 top-4 flex items-center gap-1.5 text-[11px] font-semibold text-black/45">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/25" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/25" />
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/25" />
              </div>
              <div className="absolute inset-0 pt-12 pb-6">{children}</div>
              <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ui =
    lang === "es"
      ? {
        chats: "Chats",
        all: "Todo",
        review: "Por revisar",
        done: "Revisado",
        seen: "Revisado",
        personal: "Contacto personal",
        summary: "Mostrar mensajes",
        createNote: "Crear nota interna",
        assign: "Asignar conversación",
        settings: "Ajustes",
        support: "Soporte",
        heroQuote: "“Doctor, tengo dolor desde ayer…”",
        summaryDate: "2 - 4 Feb 2025",
        summaryPoints: [
          "Semana 38 de embarazo, parto inminente.",
          "Vacuna de hepatitis B recomendada para el bebé.",
          "Próxima cita: jueves, pero podría dar a luz antes.",
          "Consulta sobre maleta del hospital.",
        ],
        msgPatient: "Nos vemos entonces. Que tenga un buen día.",
        msgPatientMeta: "Viernes - 10:01",
        msgAdmin: "Igualmente. Hasta pronto.",
        msgAdminMeta: "Admin Isabella · Viernes - 10:05",
        reassignedText: "re-asignó la conversación",
        reassignedMeta: "Solo visible para ti · 2:16",
        typeHere: "Escribe aquí",
      }
      : lang === "pt"
        ? {
          chats: "Chats",
          all: "Tudo",
          review: "Para revisar",
          done: "Revisado",
          seen: "Revisado",
          personal: "Contato pessoal",
          summary: "Mostrar mensagens",
          createNote: "Criar nota interna",
          assign: "Atribuir conversa",
          settings: "Configurações",
          support: "Suporte",
          heroQuote: "“Doutor, estou com dor desde ontem…”",
          summaryDate: "2 - 4 Fev 2025",
          summaryPoints: [
            "38 semanas de gestação, parto iminente.",
            "Vacina de hepatite B recomendada para o bebê.",
            "Próxima consulta: quinta-feira, mas pode entrar em trabalho de parto antes.",
            "Dúvida sobre mala do hospital.",
          ],
          msgPatient: "Então nos vemos. Tenha um bom dia.",
          msgPatientMeta: "Sexta-feira - 10:01",
          msgAdmin: "Igualmente. Até logo.",
          msgAdminMeta: "Admin Isabella · Sexta-feira - 10:05",
          reassignedText: "reatribuiu a conversa",
          reassignedMeta: "Visível apenas para você · 2:16",
          typeHere: "Escreva aqui",
        }
        : {
          chats: "Chats",
          all: "All",
          review: "To review",
          done: "Reviewed",
          seen: "Reviewed",
          personal: "Personal contact",
          summary: "Show messages",
          createNote: "Create internal note",
          assign: "Assign chat",
          settings: "Settings",
          support: "Support",
          heroQuote: "“Doctor, I've been in pain since yesterday…”",
          summaryDate: "Feb 2–4, 2025",
          summaryPoints: [
            "38 weeks pregnant, labor imminent.",
            "Hepatitis B vaccine recommended for the newborn.",
            "Next appointment: Thursday, but she may deliver earlier.",
            "Question about the hospital bag.",
          ],
          msgPatient: "See you then. Have a great day.",
          msgPatientMeta: "Friday - 10:01",
          msgAdmin: "Likewise. See you soon.",
          msgAdminMeta: "Admin Isabella · Friday - 10:05",
          reassignedText: "reassigned the conversation",
          reassignedMeta: "Visible only to you · 2:16",
          typeHere: "Type here",
        };

  const ink = "#2B1670";
  const soft = "rgba(43,22,112,0.10)";
  const chipInk = "rgba(43,22,112,0.78)";
  const dcGreen = "rgba(34,197,94,0.22)";

  const ChatsScreen = () => {
    const tabs = [
      { label: ui.all, count: 15, active: false },
      { label: ui.review, count: 13, active: true },
      { label: ui.done, count: 2, active: false },
    ] as const;

    const list =
      lang === "es"
        ? [
          {
            id: "javier-velazquez",
            name: "Javier Velázquez",
            time: "10:35 AM",
            preview: "Tengo mucho dolor abdominal y quisiera saber qué puedo tomar?",
            tags: ["Alergia Diclofenaco", "Gastritis"],
            unread: 4,
            badge: "MT IN",
          },
          {
            id: "rosa-marin",
            name: "Rosa Marín",
            time: "10:35 AM",
            preview: "Tengo mucho dolor abdominal y quisiera saber qué puedo tomar?",
            tags: ["Alergia Diclofenaco", "Gastritis"],
            unread: 4,
            badge: "MT IN",
          },
          {
            id: "teresa-bermudez",
            name: "Teresa Bermúdez",
            time: "10:35 AM",
            preview: "Todavía sigo con el dolor. Crees que deba agendar una cita?",
            tags: [],
            unread: 16,
            badge: "",
          },
          {
            id: "carlos-novoa-1",
            name: "Carlos Novoa",
            time: "10:35 AM",
            preview: "Quisiera agendar una cita para el 23 de agosto",
            tags: ["Citas"],
            unread: 1,
            badge: "MT IN",
          },
          {
            id: "carlos-novoa-2",
            name: "Carlos Novoa",
            time: "10:35 AM",
            preview: "Quisiera agendar una cita para el 23 de agosto",
            tags: [],
            unread: 1,
            badge: "",
          },
        ]
        : lang === "pt"
          ? [
            {
              id: "javier-velazquez",
              name: "Javier Velázquez",
              time: "10:35 AM",
              preview: "Estou com muita dor abdominal — o que posso tomar?",
              tags: ["Alergia a diclofenaco", "Gastrite"],
              unread: 4,
              badge: "MT IN",
            },
            {
              id: "rosa-marin",
              name: "Rosa Marín",
              time: "10:35 AM",
              preview: "Estou com muita dor abdominal — o que posso tomar?",
              tags: ["Alergia a diclofenaco", "Gastrite"],
              unread: 4,
              badge: "MT IN",
            },
            {
              id: "teresa-bermudez",
              name: "Teresa Bermúdez",
              time: "10:35 AM",
              preview: "Ainda estou com dor. Você acha que devo marcar uma consulta?",
              tags: [],
              unread: 16,
              badge: "",
            },
            {
              id: "carlos-novoa-1",
              name: "Carlos Novoa",
              time: "10:35 AM",
              preview: "Quero agendar uma consulta para 23 de agosto",
              tags: ["Agendamentos"],
              unread: 1,
              badge: "MT IN",
            },
            {
              id: "carlos-novoa-2",
              name: "Carlos Novoa",
              time: "10:35 AM",
              preview: "Quero agendar uma consulta para 23 de agosto",
              tags: [],
              unread: 1,
              badge: "",
            },
          ]
          : [
            {
              id: "javier-velazquez",
              name: "Javier Velázquez",
              time: "10:35 AM",
              preview: "I have severe abdominal pain—what can I take?",
              tags: ["Diclofenac allergy", "Gastritis"],
              unread: 4,
              badge: "MT IN",
            },
            {
              id: "rosa-marin",
              name: "Rosa Marín",
              time: "10:35 AM",
              preview: "I have severe abdominal pain—what can I take?",
              tags: ["Diclofenac allergy", "Gastritis"],
              unread: 4,
              badge: "MT IN",
            },
            {
              id: "teresa-bermudez",
              name: "Teresa Bermúdez",
              time: "10:35 AM",
              preview: "I'm still in pain. Do you think I should book an appointment?",
              tags: [],
              unread: 16,
              badge: "",
            },
            {
              id: "carlos-novoa-1",
              name: "Carlos Novoa",
              time: "10:35 AM",
              preview: "I'd like to book an appointment for August 23",
              tags: ["Appointments"],
              unread: 1,
              badge: "MT IN",
            },
            {
              id: "carlos-novoa-2",
              name: "Carlos Novoa",
              time: "10:35 AM",
              preview: "I'd like to book an appointment for August 23",
              tags: [],
              unread: 1,
              badge: "",
            },
          ];

    return (
      <div className="flex h-full flex-col">
        <div className="px-7">
          <div className="flex items-start justify-between">
            <div className="pt-2 text-[22px] font-semibold tracking-tight" style={{ color: ink }}>
              {ui.chats}
            </div>
            <div className="flex items-center gap-2 pt-2">
              {[
                { glyph: "⌕", tone: "rgba(43,22,112,0.06)" },
                { glyph: "≡", tone: "rgba(43,22,112,0.06)" },
                { glyph: "+", tone: "rgba(124,58,237,0.12)" },
              ].map((b) => (
                <div
                  key={b.glyph}
                  className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold"
                  style={{ background: b.tone, color: ink }}
                >
                  {b.glyph}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-5 text-[13px] font-semibold" style={{ color: chipInk }}>
            {tabs.map((t) => (
              <div key={t.label} className="relative pb-2">
                <div className="flex items-center gap-2">
                  <div className={t.active ? "text-[13px]" : "text-[13px] opacity-60"}>{t.label}</div>
                  <div
                    className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                    style={{ background: "rgba(43,22,112,0.08)", color: chipInk }}
                  >
                    {t.count}
                  </div>
                </div>
                {t.active ? <div className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full" style={{ background: ink }} /> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 h-px w-full" style={{ background: "rgba(15,23,42,0.06)" }} />

        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-hidden">
            <div className="h-full overflow-hidden bg-white/70">
              <div className="h-full">
                {list.map((row, idx) => (
                  <div key={row.id} className="px-7 py-4" style={idx === 0 ? undefined : { borderTop: "1px solid rgba(15,23,42,0.06)" }}>
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5"
                        style={{ background: idx === 0 ? "rgba(124,58,237,0.10)" : "rgba(43,22,112,0.06)", color: ink }}
                      >
                        <div className="text-[11px] font-semibold">{row.name.split(" ")[0]?.slice(0, 1)}</div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0 truncate text-[14px] font-semibold" style={{ color: ink }}>
                            {row.name}
                          </div>
                          <div className="shrink-0 text-[12px] font-semibold" style={{ color: "rgba(43,22,112,0.55)" }}>
                            {row.time}
                          </div>
                        </div>
                        <div className="mt-1 text-[12.5px] leading-snug" style={{ color: "rgba(43,22,112,0.72)" }}>
                          {row.preview}
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          {row.tags.map((t) => (
                            <div
                              key={t}
                              className="rounded-full border border-black/5 px-3 py-1 text-[11px] font-semibold"
                              style={{ background: soft, color: chipInk }}
                            >
                              {t}
                            </div>
                          ))}
                          {row.badge ? (
                            <div
                              className="ml-auto rounded-full border border-black/5 px-3 py-1 text-[11px] font-semibold"
                              style={{ background: "rgba(34,197,94,0.16)", color: ink }}
                            >
                              {row.badge}
                            </div>
                          ) : (
                            <div className="ml-auto" />
                          )}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold"
                          style={{ background: ink, color: "white" }}
                        >
                          {row.unread}
                        </div>
                      </div>
                    </div>

                    {idx === 0 ? (
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div
                          className="flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold"
                          style={{ background: "rgba(43,22,112,0.06)", color: ink }}
                        >
                          <span className="text-[14px]">⊖</span>
                          {ui.personal}
                        </div>
                        <div
                          className="flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold"
                          style={{ background: "rgba(37,99,235,0.12)", color: ink }}
                        >
                          <span className="text-[14px]">✓</span>
                          {ui.seen}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 bg-white/75 px-10 py-3">
          <div className="grid grid-cols-3 gap-6 text-center text-[11px] font-semibold" style={{ color: "rgba(43,22,112,0.62)" }}>
            <div>
              <div className="mx-auto h-7 w-7 rounded-2xl" style={{ background: dcGreen }} />
              <div className="mt-1">{ui.chats}</div>
            </div>
            <div>
              <div className="mx-auto h-7 w-7 rounded-2xl" style={{ background: "rgba(43,22,112,0.06)" }} />
              <div className="mt-1">{ui.settings}</div>
            </div>
            <div>
              <div className="mx-auto h-7 w-7 rounded-2xl" style={{ background: "rgba(43,22,112,0.06)" }} />
              <div className="mt-1">{ui.support}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ConversationScreen = () => {
    return (
      <div className="flex h-full flex-col">
        <div className="px-6">
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold"
                style={{ background: "rgba(43,22,112,0.06)", color: ink }}
              >
                ←
              </div>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-semibold" style={{ color: ink }}>
                  Luis Enrique Navarro…
                </div>
                <div className="truncate text-[11px] font-medium" style={{ color: "rgba(43,22,112,0.55)" }}>
                  Luis Enrique Navarro Ortiz
                </div>
              </div>
            </div>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold"
              style={{ background: "rgba(43,22,112,0.06)", color: ink }}
            >
              ⌕
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-black/5 bg-white/85 px-4 py-3 shadow-[0_18px_44px_rgba(43,22,112,0.10)]">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold" style={{ color: "rgba(43,22,112,0.55)" }}>
                {ui.summaryDate}
              </div>
              <div className="rounded-full border border-black/5 px-2.5 py-1 text-[11px] font-semibold" style={{ background: dcGreen, color: ink }}>
                @MT
              </div>
            </div>
            <div className="mt-2 space-y-1 text-[12px] leading-snug" style={{ color: "rgba(43,22,112,0.80)" }}>
              {ui.summaryPoints.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <div className="mt-[6px] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.35)" }} />
                  <div className="min-w-0">{r}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-[12px] font-semibold" style={{ color: "rgba(124,58,237,0.95)" }}>
              {ui.summary}
              <span aria-hidden>⌄</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex-1 px-6">
          <div className="rounded-3xl border border-black/5 bg-white/65 px-4 py-3 text-[12px]" style={{ color: "rgba(43,22,112,0.72)" }}>
            {ui.msgPatient}
            <div className="mt-1 text-[11px]" style={{ color: "rgba(43,22,112,0.45)" }}>
              {ui.msgPatientMeta}
            </div>
          </div>
          <div className="mt-3 ml-auto w-[78%] rounded-3xl border border-black/5 bg-white/85 px-4 py-3 text-[12px]" style={{ color: "rgba(43,22,112,0.80)" }}>
            {ui.msgAdmin}
            <div className="mt-1 text-[11px]" style={{ color: "rgba(43,22,112,0.45)" }}>
              {ui.msgAdminMeta}
            </div>
          </div>
          <div className="mt-3 rounded-3xl border border-black/5 bg-white/85 px-4 py-3 text-[12px]" style={{ color: "rgba(43,22,112,0.72)" }}>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 h-6 w-6 rounded-2xl border border-black/5" style={{ background: "rgba(124,58,237,0.10)" }} />
              <div className="min-w-0">
                <div className="font-semibold" style={{ color: ink }}>
                  Dr. Torres
                </div>
                {ui.reassignedText} <span style={{ color: "rgba(245,158,11,0.95)" }}>@Admin Victoria</span>
                <div className="mt-1 text-[11px]" style={{ color: "rgba(43,22,112,0.45)" }}>
                  {ui.reassignedMeta}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-4">
          <div className="grid grid-cols-2 gap-3">
            <div
              className="flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold"
              style={{ background: "rgba(43,22,112,0.06)", color: ink }}
            >
              <span className="text-[14px]">▢</span>
              {ui.createNote}
            </div>
            <div
              className="flex items-center justify-center gap-2 rounded-2xl border border-black/5 px-4 py-3 text-[12px] font-semibold"
              style={{ background: "rgba(124,58,237,0.12)", color: ink }}
            >
              <span className="text-[14px]">✚</span>
              <span className="min-w-0 truncate whitespace-nowrap">{ui.assign}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-3xl border border-black/5 bg-white/85 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold" style={{ background: "rgba(43,22,112,0.06)", color: ink }}>
              +
            </div>
            <div className="flex-1 text-[12px] font-medium" style={{ color: "rgba(43,22,112,0.45)" }}>
              {ui.typeHere}
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl border border-black/5 text-[14px] font-semibold" style={{ background: "rgba(43,22,112,0.06)", color: ink }}>
              🎙
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl sm:h-[560px] md:h-[600px] lg:h-[640px]">
      <div className="absolute inset-0 bg-[#ECE6FF]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_40%_12%,rgba(124,58,237,0.22),transparent_62%),radial-gradient(80%_70%_at_70%_65%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/15 to-white/0" />

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <PhoneFrame>
          <div className="relative h-full w-full">
            <div
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (activeStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none")
              }
            >
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={WHATSAPP_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/20" />
              <div className="absolute left-6 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-semibold text-white/80">
                WhatsApp
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/35 px-4 py-3 text-[11px] font-medium text-white/80">
                {ui.heroQuote}
              </div>
            </div>

            <div
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (activeStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none")
              }
            >
              <ChatsScreen />
            </div>

            <div
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none")
              }
            >
              <ConversationScreen />
            </div>
          </div>
        </PhoneFrame>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
    </div>
  );
}

export function DeepClinicWhatsApp({ lang = "es" }: Props) {
  const t = CONTENT[lang];
  const accent = "rgba(34,197,94,0.22)";
  const steps = STEPS[lang];
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const flowLabel = lang === "es" ? "Flujo" : lang === "pt" ? "Fluxo" : "Flow";
  const detailLabel = lang === "es" ? "Detalle" : lang === "pt" ? "Detalhe" : "Detail";

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      if (el.getAttribute("data-dc-active") !== "true") return;
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, [reducedMotion, steps.length]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (activeStep === 0) {
      if (v.autoplay && v.paused) {
        void v.play().catch(() => { });
      }
    } else {
      if (!v.paused) v.pause();
    }
  }, [activeStep]);

  const painPoints =
    lang === "es"
      ? ["Mensajes sin orden", "Triage manual", "Seguimiento perdido"]
      : lang === "pt"
        ? ["Mensagens sem ordem", "Triagem manual", "Follow-up perdido"]
        : ["Unstructured messages", "Manual triage", "Lost follow-up"];
  const metrics =
    lang === "es"
      ? [
        { label: "Tiempo", value: "3 h/día", note: "ahorro" },
        { label: "Cobertura", value: "24/7", note: "asistencia" },
        { label: "Respuesta", value: "-40%", note: "fricción" },
      ]
      : lang === "pt"
        ? [
          { label: "Tempo", value: "3 h/dia", note: "economia" },
          { label: "Cobertura", value: "24/7", note: "assistência" },
          { label: "Resposta", value: "-40%", note: "atrito" },
        ]
        : [
          { label: "Time", value: "3 h/day", note: "saved" },
          { label: "Coverage", value: "24/7", note: "assist" },
          { label: "Response", value: "-40%", note: "friction" },
        ];
  return (
    <section ref={sectionRef} className="relative z-10 w-full min-h-[100svh] snap-start flex items-start px-6 pt-20 pb-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-screen-2xl">
        <MotionReveal durationMs={740} className="w-full">
          <div className="relative isolate flex min-h-[70svh] items-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:min-h-[74svh] md:p-12 lg:min-h-[78svh] lg:p-14 text-white">

            {/* Background Glows */}
            <div className="pointer-events-none hidden absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]" />
            <div className="pointer-events-none hidden absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/[0.015] blur-[110px]" />

            <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Content */}
              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-6 text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                  {t.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                  <div className="border-b border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{flowLabel}</div>
                  </div>
                  <div className="divide-y divide-white/10">
                    {steps.map((s, i) => {
                      const isActive = i === activeStep;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveStep(i)}
                          className={
                            "w-full px-4 py-3 text-left transition-colors duration-300 " +
                            (isActive ? "bg-white/[0.04]" : "bg-transparent")
                          }
                          aria-current={isActive ? "step" : undefined}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px] font-semibold tracking-[0.18em]"
                              style={{ background: isActive ? accent : "rgba(255,255,255,0.04)" }}
                            >
                              {s.id}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className={"text-[13px] font-semibold tracking-tight " + (isActive ? "text-white" : "text-white/75")}>
                                {s.title}
                              </div>
                              <div className="mt-1 text-[12px] leading-relaxed text-white/55">{s.caption}</div>
                            </div>
                            {isActive ? (
                              <div className="mt-1 h-2 w-2 rounded-full" style={{ background: "rgba(255,255,255,0.22)", boxShadow: `0 0 14px ${accent}` }} />
                            ) : (
                              <div className="mt-1 h-2 w-2 rounded-full bg-white/10" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                  <div className="border-b border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{detailLabel}</div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="text-[12.5px] font-semibold tracking-tight text-white/85">{steps[activeStep]?.title}</div>
                    <div className="mt-1 text-[12px] leading-relaxed text-white/55">{steps[activeStep]?.caption}</div>
                    <div className="mt-3 grid gap-2">
                      {(steps[activeStep]?.bullets ?? []).slice(0, 3).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-[12px] text-white/70">
                          <div className="mt-[7px] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.22)" }} />
                          <div className="min-w-0">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {painPoints.slice(0, 3).map((p) => (
                    <div
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.24)", boxShadow: `0 0 18px ${accent}` }} />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5">
                      <div className="text-[16px] font-semibold tracking-tight text-white/90">{m.value}</div>
                      <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href={`/${lang}/desk`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80"
                  >
                    {t.cta}
                    <span className="ml-2" aria-hidden>
                      ↗
                    </span>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative z-10">
                <DeepClinicFxFrame accent={accent} variant="video">
                  <WhatsAppVisual activeStep={activeStep} videoRef={videoRef} lang={lang} />
                </DeepClinicFxFrame>
              </div>
            </div>

            {/* Social Proof / Logos */}
            {t.footer ? (
              <div className="mt-20 flex flex-col items-center gap-8 text-center">
                <p className="text-sm font-medium text-white/50">{t.footer}</p>
              </div>
            ) : null}

          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
