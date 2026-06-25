import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  return (
    <PageWrapper>
      <Seo title="Page Not Found" noindex description="The page you are looking for has moved or no longer exists." />
      <section className="flex min-h-screen items-center bg-ink text-ivory">
        <Container className="text-center">
          <p className="eyebrow mb-6 text-brass-light">Error 404</p>
          <h1 className="font-serif text-hero font-light leading-none">
            Off the map.
          </h1>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-ivory/60">
            The page you are looking for has moved or no longer exists. Let us guide you
            back to firmer ground.
          </p>
          <div className="mt-12 flex justify-center">
            <Button to="/" variant="light">
              Return home
            </Button>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
