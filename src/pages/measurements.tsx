import Head from "next/head";
import Link from "next/link";
import React from "react";

/*
 * Rendered as static HTML on purpose. The home page waits for a loader before
 * it shows anything, so search engines and link previews see almost nothing
 * there. This page is the one meant to be found and shared, so every number on
 * it is in the server-rendered markup.
 *
 * Every figure here is copied from the repository it links to. When a
 * repository's numbers change, change them here too.
 */

const SITE = "https://rehansanjay-portfolio.vercel.app";
const GH = "https://github.com/Rehansanjay";

type Row = { label: string; value: string };

type Study = {
  id: string;
  title: string;
  repo: string;
  question: string;
  rows: Row[];
  finding: string;
  note?: string;
};

const studies: Study[] = [
  {
    id: "turn-end",
    title: "Turn-end latency, against ground truth",
    repo: "vad-turn-end-latency",
    question:
      "How long after a caller stops talking does the agent decide the turn is over, and how often does it cut in during a pause the caller was going to speak through?",
    rows: [
      { label: "Calls scored", value: "265, labelled" },
      { label: "Final delay, VAD-only (Silero)", value: "0.49s" },
      { label: "Final delay, semantic turn head", value: "0.18s" },
      { label: "Cut-ins in pauses under 0.5s", value: "13% vs 21%" },
      { label: "Cut-ins in pauses of 0.5 to 1s", value: "69% vs 62%" },
    ],
    finding:
      "The semantic head is about 0.3s faster, and the trade-off flips with pause length. Under half a second VAD-only endpointing is the more cautious; between half a second and a second it cuts in more often. An unbucketed average hides both.",
    note:
      "Three errors in the first published version were corrected, two found by a model's maintainer reading my scoring code and one I found myself. The corrections are written up in the repository rather than quietly replaced.",
  },
  {
    id: "stt-halfopen",
    title: "Half-open websockets: speech-to-text",
    repo: "livekit-stt-halfopen",
    question:
      "When the provider disappears without closing the connection, how long does each streaming STT plugin in LiveKit Agents take to notice?",
    rows: [
      { label: "Plugins in the tree", value: "19" },
      { label: "Fail over", value: "3, in about 46s" },
      { label: "Detect it and tell no one", value: "2" },
      { label: "Never notice", value: "8" },
      { label: "Could not be redirected to measure", value: "6" },
    ],
    finding:
      "One parameter explains every result: whether the plugin passes a heartbeat to the websocket. A caller is quiet a lot of the time, so a read timeout is the wrong instrument for speech-to-text.",
  },
  {
    id: "tts-halfopen",
    title: "Half-open websockets: text-to-speech",
    repo: "livekit-tts-halfopen",
    question: "The same question for all twenty streaming TTS plugins, where a dead socket means the agent goes mute.",
    rows: [
      { label: "Plugins in the tree", value: "20" },
      { label: "Fail over", value: "9, in about 10s" },
      { label: "Fail over eventually", value: "3, in 20 to 70s" },
      { label: "Never notice", value: "7" },
      { label: "Could not be measured", value: "1" },
    ],
    finding:
      "The opposite answer to speech-to-text. Eighteen of the twenty pass no heartbeat, and what separates the groups is whether a read timeout reaches the receive call. All seven that never notice are fixed in livekit/agents#8035.",
  },
  {
    id: "plugin-health",
    title: "Pipecat plugin health, nightly",
    repo: "pipecat-plugin-health",
    question:
      "Does every community Pipecat plugin still install, import and construct against the latest release and against main?",
    rows: [
      { label: "Plugins checked", value: "75, every night" },
      { label: "Working", value: "56" },
      { label: "Broken", value: "6" },
      { label: "Need an older Pipecat", value: "8" },
      { label: "Cannot be installed", value: "3" },
    ],
    finding:
      "It finds breakage before users do, and it builds each plugin from its own repository too, so a maintainer who fixed a plugin without cutting a release is not reported as broken.",
    note: "Figures from the run on 8 November 2026. The repository has the live table.",
  },
  {
    id: "call-record",
    title: "One record per call",
    repo: "livekit-call-record",
    question:
      "When an agent goes quiet mid-call, can the logs say why? Usually not: the transcript has the sentence in it, and the caller heard nothing.",
    rows: [
      { label: "Built from", value: "the session's own events" },
      { label: "Patches to the framework", value: "none" },
      { label: "Dead air measured from", value: "the caller resuming" },
      { label: "Detects", value: "replies generated, never spoken" },
    ],
    finding:
      "Cut-ins are bucketed by how long the caller actually paused, because the caller speaking again is what proves they were not finished. That lets a call label itself, without hand-labelled audio.",
    note: "Tested on synthetic records so far, not live calls.",
  },
];

const method = [
  "Measure against ground truth where it exists, and say plainly where it does not.",
  "Publish the corrections when a number turns out wrong, next to the number.",
  "Every fix ships with a test, checked by reverting the fix and confirming the test fails.",
];

export default function Measurements() {
  const description =
    "Published measurements of how voice agents behave: turn-end latency across 265 labelled calls, half-open websockets across 39 LiveKit plugins, a nightly health check of 75 Pipecat plugins, and a per-call record that catches replies generated but never spoken.";

  return (
    <div className="m">
      <Head>
        <title>Measurements — Rehan Sanjay</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE}/measurements`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Measurements of voice-agent behaviour — Rehan Sanjay" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE}/measurements`} />
        <meta property="og:image" content={`${SITE}/icon.png`} />
        <meta name="twitter:card" content="summary" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>

      <header className="m__top">
        <Link href="/" className="m__home">
          &larr; Rehan Sanjay
        </Link>
      </header>

      <main className="m__main">
        <p className="m__eyebrow">Measurements</p>
        <h1 className="m__title">What voice agents actually do</h1>
        <p className="m__lede">
          Most writing about voice agents describes what they should do. These are measurements of
          what they do: timed against real calls or real failures, published with the code that
          produced them, and corrected in public when they were wrong.
        </p>

        <nav className="m__toc" aria-label="Measurements on this page">
          {studies.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.title}
            </a>
          ))}
        </nav>

        {studies.map((s) => (
          <section key={s.id} id={s.id} className="m__study">
            <h2>{s.title}</h2>
            <p className="m__question">{s.question}</p>
            <dl className="m__rows">
              {s.rows.map((r) => (
                <div key={r.label} className="m__row">
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="m__finding">{s.finding}</p>
            {s.note && <p className="m__note">{s.note}</p>}
            <a className="m__repo" href={`${GH}/${s.repo}`}>
              github.com/Rehansanjay/{s.repo} &rarr;
            </a>
          </section>
        ))}

        <section className="m__study m__method">
          <h2>How the numbers are made</h2>
          <ul>
            {method.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="m__study m__contact">
          <h2>Have a voice agent that misbehaves?</h2>
          <p>
            I take on paid work measuring and fixing this kind of problem in production agents.
            Email <a href="mailto:rehansanjay28@gmail.com">rehansanjay28@gmail.com</a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .m {
          min-height: 100vh;
          background: var(--navy);
          color: var(--light-slate);
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .m__top {
          max-width: 860px;
          margin: 0 auto;
          padding: 28px 24px 0;
        }
        .m__main {
          max-width: 860px;
          margin: 0 auto;
          padding: 40px 24px 96px;
        }
        .m__eyebrow {
          font-family: var(--font-mono), monospace;
          color: var(--green);
          font-size: 14px;
          margin: 0 0 12px;
        }
        .m__title {
          font-family: var(--font-heading), sans-serif;
          color: var(--lightest-slate);
          font-size: clamp(32px, 6vw, 52px);
          line-height: 1.1;
          margin: 0 0 20px;
        }
        .m__lede {
          font-size: 18px;
          line-height: 1.6;
          max-width: 680px;
          margin: 0 0 32px;
        }
        .m__toc {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 56px;
        }
        .m__study {
          border-top: 1px solid var(--lightest-navy);
          padding: 40px 0 8px;
          scroll-margin-top: 24px;
        }
        .m__study h2 {
          font-family: var(--font-heading), sans-serif;
          color: var(--lightest-slate);
          font-size: clamp(22px, 3.4vw, 28px);
          margin: 0 0 12px;
        }
        .m__question {
          font-size: 17px;
          line-height: 1.6;
          margin: 0 0 22px;
        }
        .m__rows {
          margin: 0 0 22px;
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          background: var(--light-navy);
        }
        .m__row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 11px 16px;
          border-bottom: 1px solid var(--lightest-navy);
        }
        .m__row:last-child {
          border-bottom: none;
        }
        .m__row dt {
          color: var(--slate);
          font-size: 15px;
        }
        .m__row dd {
          margin: 0;
          font-family: var(--font-mono), monospace;
          color: var(--green);
          font-size: 15px;
          text-align: right;
          white-space: nowrap;
        }
        .m__finding {
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 12px;
        }
        .m__note {
          font-size: 14px;
          line-height: 1.6;
          color: var(--slate);
          margin: 0 0 12px;
        }
        .m__method ul {
          margin: 0;
          padding-left: 20px;
          line-height: 1.8;
          font-size: 16px;
        }
        .m__contact p {
          font-size: 16px;
          line-height: 1.6;
        }
        @media (max-width: 560px) {
          .m__row {
            flex-direction: column;
            gap: 2px;
          }
          .m__row dd {
            text-align: left;
            white-space: normal;
          }
        }
      `}</style>
      <style jsx global>{`
        .m__home,
        .m__toc a,
        .m__repo,
        .m__contact a {
          color: var(--green);
          text-decoration: none;
          font-family: var(--font-mono), monospace;
        }
        .m__home {
          font-size: 14px;
        }
        .m__toc a {
          font-size: 13px;
          padding: 6px 12px;
          border: 1px solid var(--glass-border);
          border-radius: 999px;
          background: var(--light-navy);
        }
        .m__repo {
          display: inline-block;
          font-size: 14px;
          margin: 4px 0 8px;
        }
        .m__home:hover,
        .m__toc a:hover,
        .m__repo:hover,
        .m__contact a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
