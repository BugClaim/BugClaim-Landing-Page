/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Free Plan',
    description: 'For Small startups, company or organisation',
    buttonText: 'Register',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '1 free pentesting service by Bugclaim',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          '24/7 chat support',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '5 free bug reports (Trial)',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Unlimited scope/assets listing.',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Guidelines to implement security',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For established enterprise',
    priceWithUnit: '',
    buttonText: 'Contact Sales',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Quarterly Free Pentesting Service by Bugclaim',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          '24/7 call and chat support.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Every bug report as reported by researchers.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited scope/assets listing.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Guidelines to implement security',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Our plans"
          slogan="To make security affordable"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
