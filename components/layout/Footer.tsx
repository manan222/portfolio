import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Abdul Manan Ali.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="https://github.com/manan222"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-manan-ali-26774415a/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </Container>
    </footer>
  );
}