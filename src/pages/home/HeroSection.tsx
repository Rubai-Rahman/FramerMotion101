import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>
            <span>Don't worry,</span>
            <span>We'll fix it.</span>
          </h1>
          <p>
            Welcome to <span>iRepair</span>,your one-stop place for all kinds of{' '}
            <span>Macbook repairs</span> and diagnostics.
          </p>
          <Button>Book a service</Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
