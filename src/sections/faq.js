/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What is responsible disclosure program?',
    contents: (
      <div>
        GA vulnerability disclosure program offers a secure channel for
        researchers to report security issues and vulnerabilities, 
        and typically includes a framework for intake, triage, and workflows 
        for remediation.
      </div>
    ),
  },
  {
    title: 'I do not want to share any development secrets. Am I eligible?',
    contents: (
      <div>
        We generally recommend black box testing. You have to share just domains,
        and apps,(or software applications) which is available to general public.
        And security researchers will provide bug reports to you.
      </div>
    ),
  },
  {
    title: `What are the charges to register on the platform?`,
    contents: (
      <div>
        Initially some of the services are free as trials. To register for enterprise 
        features, contact sales, or drop a mail to us. Newcomers will be definitely given
        some major discounts and lifetime specific services. 
      </div>
    ),
  },
  {
    title: `Can I get an audit by pentesters in my company?`,
    contents: (
      <div>
        Bugclaim provides on demand penetration testers, when asked verified security 
        researchers will be going to audit you internal networks and all the security 
        implementations.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
