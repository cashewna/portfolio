#set page(
  width: 1200pt,
  height: 630pt,
  margin: 0pt,
  fill: rgb("#0b101b"),
)

#let paper-raised = rgb("#111827")
#let ink = rgb("#d9d7ce")
#let ink-soft = rgb("#cbccc6")
#let muted = rgb("#8a94a6")
#let line-color = rgb("#283142")
#let accent = rgb("#ffa759")
#let accent-deep = rgb("#ffcc66")
#let teal = rgb("#bae67e")

#place(
  top + left,
  dx: 56pt,
  dy: 48pt,
  box(
    width: 1088pt,
    height: 534pt,
    fill: paper-raised,
    stroke: 1.5pt + line-color,
    radius: 16pt,
    inset: 56pt,
  )[
    #grid(
      columns: (auto, 1fr),
      column-gutter: 18pt,
      align: horizon,
      box(
        width: 48pt,
        height: 48pt,
        fill: rgb("#070b13"),
        stroke: 1.5pt + line-color,
        radius: 10pt,
      )[
        #align(center + horizon, text(font: "Liberation Mono", size: 17pt, weight: "bold", fill: ink)[KK])
      ],
      text(font: "Liberation Mono", size: 14pt, weight: "bold", tracking: 0.14em, fill: accent-deep)[
        SYDNEY, AUSTRALIA · UNSW COMPUTER SCIENCE
      ],
    )

    #v(34pt)
    #text(font: "Libertinus Serif", size: 68pt, weight: "medium", fill: ink)[
      Krishna Khong
    ]
    #v(6pt)
    #text(font: "Liberation Sans", size: 28pt, fill: ink-soft)[
      Software, Systems & Infrastructure Engineering
    ]
    #v(14pt)
    #text(font: "Liberation Sans", size: 20pt, fill: muted)[
      Tested backend & systems projects, Kubernetes (k3s) GitOps, observability, and software support.
    ]

    #place(
      bottom + left,
      grid(
        columns: (1fr, auto),
        align: horizon,
        text(font: "Liberation Mono", size: 16pt, fill: muted)[
          TypeScript · Rust · Java · PostgreSQL · k3s · OpenTofu · VictoriaMetrics
        ],
        box(
          fill: accent,
          radius: 10pt,
          inset: (x: 20pt, y: 11pt),
        )[
          #text(font: "Liberation Mono", size: 16pt, weight: "bold", fill: rgb("#070b13"))[
            portfolio.khong.dev
          ]
        ],
      ),
    )
  ],
)
