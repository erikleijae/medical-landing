import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(213, 255, 124, 0.35), rgba(2, 6, 23, 0) 45%), radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.25), rgba(2, 6, 23, 0) 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  backgroundColor: "#d5ff7c",
                  boxShadow: "0 0 0 8px rgba(213, 255, 124, 0.12)",
                }}
              />
              <div
                style={{
                  fontSize: 26,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Copiloto Médico
              </div>
            </div>

            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.08,
              }}
            >
              La app que escribe
              <br />
              tus notas clínicas
            </div>

            <div
              style={{
                fontSize: 28,
                color: "rgba(226,232,240,0.92)",
                lineHeight: 1.35,
                maxWidth: 820,
              }}
            >
              Transcribe, resume y genera documentación médica automáticamente para que te enfoques en tu paciente.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 18,
              padding: 34,
              borderRadius: 28,
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              width: 360,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: "rgba(226,232,240,0.9)",
                letterSpacing: 0.5,
              }}
            >
              Ahorra tiempo en consulta
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: "#d5ff7c" }}>40%</div>
              <div style={{ fontSize: 18, color: "rgba(226,232,240,0.85)" }}>menos documentación</div>
            </div>
            <div
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.14)",
              }}
            />
            <div style={{ fontSize: 16, color: "rgba(226,232,240,0.85)", lineHeight: 1.4 }}>
              Compatible con tu flujo actual.
              <br />
              Funciona en Windows y Mac desde el navegador.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
