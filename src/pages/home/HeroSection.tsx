import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import mackbook from '@/assets/images/macbook-exposed.png';

const HeroSection = () => {
  return (
    <div>
      <Container className="grid grid-cols-2 place-content-center h-screen bg-red-400">
        <div>
          <h1 className="text-8xl font-bold">
            <span className="text-gray-400">Don't worry,</span>
            <br />
            <span className="text-gray-900">We'll fix it.</span>
          </h1>
          <p className="text-gray-400 max-w-[50ch] mt-10 mb-5 text-lg">
            Welcome to {''}
            <span className="text-gray-900  font-semibold">iRepair</span>
            ,your one-stop place for all kinds of {''}
            <span className="text-gray-900 font-semibold">
              Macbook repairs
            </span>{' '}
            and diagnostics.
          </p>
          <Button>Book a service</Button>
        </div>
        <div className="w-full bg-green-300">
          <img
            className="-rotate-35 object-contain"
            src={mackbook}
            alt="mackbook"
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
