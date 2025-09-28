export default function Home() {
    return (
        <main className="page">
            <header className="hero" id="home">
                <nav className="top-nav">
                    <a href="#home" className="logo">
                        JC
                    </a>
                </nav>
                <div className="hero-content">
                    <p className="eyebrow">Software Engineer</p>
                </div>
            </header>

            <section className="section contact" id="contact">
                <div className="contact-card">
                    <h2>Let's build something together</h2>
                    <p>Open to full-time roles</p>
                    <div className="contact-actions">
                        <a href="mailto:jack@example.com" className="primary">
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            className="secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Jack Charles. Using Next.js.</p>
            </footer>
        </main>
    );
}
