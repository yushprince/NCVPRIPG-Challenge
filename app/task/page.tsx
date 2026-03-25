import PageShell from '../../components/PageShell';
import SectionIntro from '../../components/SectionIntro';
import { tasks } from '../../lib/content';

export default function TaskPage() {
  return (
    <PageShell>
      <SectionIntro
        title="Task"
        intro="Participants generate usable pre-annotations directly from raw manuscript page images with minimal supervision."
      >
        <div style={{ display: 'grid', gap: '1.2rem' }}>
          {tasks.map((task, index) => (
            <article
              key={task.title}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(220px,0.42fr) minmax(0,1fr)',
                gap: '1.2rem',
                padding: '1.6rem',
                border: '1px solid rgba(37,99,235,0.15)',
                borderRadius: '28px',
                background:
                  'linear-gradient(145deg,rgba(255,255,255,0.98),rgba(240,248,255,0.97))',
                boxShadow: '0 20px 44px rgba(33,83,155,0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* left accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  bottom: 0,
                  background: 'linear-gradient(180deg,#2563eb,#1d4fa8)',
                  borderRadius: '28px 0 0 28px',
                }}
              />

              {/* header */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  borderRadius: '20px',
                  background: 'rgba(37,99,235,0.06)',
                }}
              >
                <span
                  style={{
                    width: '58px',
                    height: '58px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '18px',
                    background: 'linear-gradient(135deg,#2563eb,#1d4fa8)',
                    color: '#fff',
                    fontSize: '1.05rem',
                    fontWeight: 900,
                    flexShrink: 0,
                    boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
                    fontFamily: "'Times New Roman', Times, serif",
                  }}
                >
                  0{index + 1}
                </span>
                <div>
                  <p
                    style={{
                      margin: '0 0 0.35rem',
                      color: '#5f7696',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    Workflow Stage
                  </p>
                  <h3
                    style={{
                      margin: 0,
                      color: '#07111f',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    {task.title}
                  </h3>
                </div>
              </div>

              {/* chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                  gap: '0.9rem',
                }}
              >
                {task.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1.1rem',
                      borderRadius: '18px',
                      border: '1px solid rgba(37,99,235,0.14)',
                      background: 'rgba(255,255,255,0.85)',
                      boxShadow: '0 4px 12px rgba(33,83,155,0.06)',
                    }}
                  >
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        marginTop: '0.5rem',
                        borderRadius: '50%',
                        background: '#2563eb',
                        boxShadow: '0 0 0 4px rgba(37,99,235,0.15)',
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        margin: 0,
                        color: '#1e3a5f',
                        lineHeight: 1.75,
                        fontWeight: 700,
                        fontFamily: "'Times New Roman', Times, serif",
                        fontSize: '0.94rem',
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionIntro>
    </PageShell>
  );
}
