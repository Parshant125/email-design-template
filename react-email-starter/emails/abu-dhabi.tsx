import {
  Body,
  Button,
  Column,
  Container,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from 'react-email';

const videoUrl =
  'https://www.youtube.com/watch?v=3j0RXqyOpJ0&utm_source=youtube&utm_medium=email&utm_campaign=abudhabi';

const links = {
  logo: 'https://holidaytribe.ai/?utm_source=logo&utm_medium=email&utm_campaign=abudhabi',
  packages:
    'https://holidaytribe.ai/international-holidays/abu-dhabi-tour-packages?utm_source=cta&utm_medium=email&utm_campaign=abudhabi',
  chat: 'https://api.whatsapp.com/send/?phone=%2B919319998495&text&type=phone_number&app_absent=0&utm_campaign=summer_campaign&utm_source=email',
  talk: 'tel:+919821332300',
  romanceVideo: 'https://cdn.holidaytribe.ai/email-template/videos/abu-dhabi-theme.gif',
  instagram:
    'https://www.instagram.com/holidaytribeworld/?utm_source=email&utm_medium=cta&utm_campaign=summer_campaign',
  youtube:
    'https://www.youtube.com/@HolidayTribe/?utm_source=email&utm_medium=cta&utm_campaign=summer_campaign',
  linkedin:
    'https://www.linkedin.com/company/holidaytribe/?utm_source=email&utm_medium=cta&utm_campaign=summer_campaign',
};

const images = {
  hero: 'https://cdn.holidaytribe.ai/email-template/images/marhaba-abu-dhabi.jpg',
  logo: 'https://cdn.holidaytribe.ai/website/icons/holiday-tribe-icon.png',
  adtLogo: 'https://cdn.holidaytribe.ai/website/our-partners/abu-dhabi-experiance.png',
  couples: 'https://cdn.holidaytribe.ai/email-template/images/dining-at-the-bridge.jpg',
  families: 'https://cdn.holidaytribe.ai/email-template/images/enjoy-a-meal-with-the-giraffes.jpg',
  friends: 'https://cdn.holidaytribe.ai/email-template/images/dining-at-mamsha-ai-saadiyat.jpg',
  video: 'https://cdn.holidaytribe.ai/email-template/images/abu-dhabi-ft.jpg',
  banner: 'https://cdn.holidaytribe.ai/email-template/images/abu-dhabi-visa-free-ond-v1.jpg',
  chatIcon:
    'https://cdn.holidaytribe.ai/email-template/icons/chat-icon.svg?format=png&width=48&quality=75',
  phoneIcon:
    'https://cdn.holidaytribe.ai/website/icons/phone-outgoing-icon-black.svg?format=png&width=48&quality=75',
};

const tribes: { label: string; image: string; caption: string[]; objectPosition?: string }[] = [
  {
    label: 'COUPLES',
    image: images.couples,
    objectPosition: '26% center',
    caption: ['For days that are', 'better shared', 'two-gether.'],
  },
  {
    label: 'FAMILIES',
    image: images.families,
    caption: ['For memories', 'everyone', 'can take home.'],
  },
  {
    label: 'FRIENDS',
    image: images.friends,
    caption: ['For a holiday that', 'brings everyone', 'together.'],
  },
];

export const AbuDhabiEmail = () => {
  return (
    <Html>
      {/* Plain <head>: react-email's <Head> adds x-apple-disable-message-reformatting, which stops iPhone Mail from fitting the 600px layout to the screen. */}
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      </head>
      <Preview>
        Marhaba. Abu Dhabi — grand mosques, island escapes, and desert drives in one holiday.
      </Preview>
      <Body style={body} className="ht-page-bg">
        <Container style={container} className="ht-navy-bg">
          <Section style={heroWrap} {...{ background: images.hero, bgcolor: navy }}>
            <Row>
              <Column style={adtLogoCell}>
                <Img
                  src={images.adtLogo}
                  alt="Experience Abu Dhabi"
                  width="178"
                  height="46"
                  style={adtLogo}
                />
              </Column>
              <Column align="right" style={htLogoCell}>
                <Link href={links.logo} style={htLogo}>
                  <Img
                    src={images.logo}
                    alt="Holiday Tribe"
                    width="50"
                    height="50"
                    style={htLogoImage}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Column style={heroSpacer}>&nbsp;</Column>
            </Row>
            {heroFadeSteps.map((alpha) => (
              <Row key={alpha}>
                <Column style={{ ...heroFadeStep, backgroundColor: `rgba(9, 48, 81, ${alpha})` }}>&nbsp;</Column>
              </Row>
            ))}
            <Row>
              <Column style={discoverBlock} {...{ bgcolor: navy }}>
                <Text style={tagline} className="ht-white-text">
                  Go from grand mosques to island escapes,
                  <br />
                  desert drives to non-stop thrills, all in one holiday.
                </Text>
                <Section style={taglineRule} className="ht-tagline-rule">
                  <Row>
                    <Column style={ruleCell}>&nbsp;</Column>
                  </Row>
                </Section>
                <Text style={discoverKicker} className="ht-white-text">
                  A CITY WITH MANY SIDES
                </Text>
                <Heading style={discoverTitle} className="ht-white-text">
                  TO DISCOVER
                </Heading>
              </Column>
            </Row>
          </Section>

          <Section style={romanceSection}>
            <Row>
              <Column style={romanceCard}>
                <Img
                  src={links.romanceVideo}
                  alt="Abu Dhabi"
                  width="500"
                  height="500"
                  style={{
                    width: '500px',
                    height: '500px',
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.4)',
                  }}
                />
              </Column>
            </Row>
          </Section>

          <Section style={tribeSection}>
            <Section style={tribeHeading}>
              <Text style={discoverKicker} className="ht-white-text">
                AND A HOLIDAY FOR
              </Text>
              <Heading style={discoverTitle} className="ht-white-text">
                EVERY KIND OF TRIBE
              </Heading>
            </Section>
            <Row style={tribeRow}>
              {tribes.map((tribe, index) => (
                <Column
                  key={tribe.label}
                  style={
                    index < tribes.length - 1
                      ? { ...tribeColumn, paddingRight: '15px' }
                      : tribeColumn
                  }
                >
                  <Section style={tribeItem}>
                    <Section style={tribeCard}>
                      <Row>
                        <Column
                          style={{
                            ...tribeImage,
                            backgroundImage: `url(${tribe.image})`,
                            backgroundPosition: tribe.objectPosition ?? 'center',
                          }}
                          className="ht-image-border"
                          {...{ background: tribe.image, height: '263' }}
                        >
                          <Text style={tribeLabel} className="ht-light-surface">
                            {tribe.label}
                          </Text>
                        </Column>
                      </Row>
                    </Section>
                    <Text style={tribeCaption} className="ht-white-text">
                      {tribe.caption.map((line, lineIndex) => (
                        <span key={line}>
                          {lineIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </Text>
                  </Section>
                </Column>
              ))}
            </Row>
            <Section style={buttonWrap}>
              <Button href={links.packages} style={exploreButton} className="ht-light-surface">
                <span style={underlineText} className="ht-navy-text">
                  Explore Packages
                </span>
              </Button>
            </Section>
          </Section>

          <Section style={experienceSection}>
            <Text style={experienceTitle} className="ht-white-text">
              <span style={experienceMuted} className="ht-muted-text">
                ALSO,
              </span>{' '}
              WE EXPERIENCE IT
              <br />
              <span style={experienceMuted} className="ht-muted-text">
                BEFORE
              </span>{' '}
              WE SELL IT!
            </Text>
            <Text style={experienceCopy} className="ht-white-text">
              We’ve been to Abu Dhabi ourselves.
              <br />
              We know the top spots worth adding to your itinerary.
            </Text>
            <Link href={videoUrl} style={videoLink}>
              <Section style={videoCard} {...{ background: images.video }}>
                <Section style={playButton} className="ht-white-bg">
                  <Section style={playIcon} />
                </Section>
              </Section>
            </Link>
          </Section>

          <Section style={payoffSection}>
            <Text style={payoffTitle} className="ht-white-text">
              <span style={experienceMuted} className="ht-muted-text">
                ONE LESS THING TO PAY.
              </span>
              <br />
              ONE MORE REASON TO GO.
            </Text>
            <Img
              src={images.banner}
              alt="India, your Abu Dhabi holiday starts visa-free. Stay 3 nights or more in Abu Dhabi and get visa-free. Valid till 31st Oct '26. T&C apply."
              width="497"
              height="136"
              style={bannerImage}
            />
          </Section>

          <Section style={footerSection}>
            <Section style={footerRule} className="ht-footer-rule">
              <Row>
                <Column style={ruleCell}>&nbsp;</Column>
              </Row>
            </Section>
            <Row style={advisorRow}>
              <Column style={advisorColumnLeft}>
                <Link href={links.chat} style={advisorButton} className="ht-white-bg">
                  <Img src={images.chatIcon} alt="" width="20" height="20" style={chatIcon} />
                  <span style={advisorText} className="ht-dark-text">
                    Chat with our advisor
                  </span>
                </Link>
              </Column>
              <Column style={advisorColumnRight}>
                <Link href={links.talk} style={advisorButton} className="ht-white-bg">
                  <Img src={images.phoneIcon} alt="" width="21.2" height="20" style={phoneIcon} />
                  <span style={advisorText} className="ht-dark-text">
                    Talk to our advisor
                  </span>
                </Link>
              </Column>
            </Row>
            <Section style={footerRule} className="ht-footer-rule">
              <Row>
                <Column style={ruleCell}>&nbsp;</Column>
              </Row>
            </Section>
            <Text style={socialText} className="ht-footer-text">
              <Link href={links.instagram} style={socialLink} className="ht-footer-text">
                Instagram
              </Link>
              {' · '}
              <Link href={links.youtube} style={socialLink} className="ht-footer-text">
                YouTube
              </Link>
              {' · '}
              <Link href={links.linkedin} style={socialLink} className="ht-footer-text">
                LinkedIn
              </Link>
            </Text>
            <Text style={copyrightText} className="ht-footer-text">
              HOLIDAY TRIBE PRIVATE LIMITED. All rights reserved © 2026
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AbuDhabiEmail;

const navy = '#093051';
const white = '#ffffff';

const themeColors = (prefix = '', textPrefix = prefix) => `
  ${prefix}.ht-page-bg { background-color: #070b14 !important; }
  ${prefix}.ht-navy-bg { background-color: ${navy} !important; }
  ${prefix}.ht-white-bg, ${prefix}.ht-light-surface { background-color: ${white} !important; }
  ${prefix}.ht-tagline-rule { background-color: rgba(255, 255, 255, 0.4) !important; }
  ${prefix}.ht-footer-rule { background-color: #5C7F9D !important; }
  ${prefix}.ht-image-border { border-color: rgba(255, 255, 255, 0.4) !important; }
  ${textPrefix}.ht-white-text { color: ${white} !important; }
  ${textPrefix}.ht-muted-text { color: #6F8AA6 !important; }
  ${textPrefix}.ht-footer-text { color: #B8CDE0 !important; }
  ${textPrefix}.ht-navy-text, ${textPrefix}.ht-light-surface { color: ${navy} !important; }
  ${textPrefix}.ht-dark-text { color: #0B2234 !important; }
`;

const themeStyles = `
  :root { color-scheme: light only; supported-color-schemes: light only; }
  ${themeColors()}
  @media (prefers-color-scheme: dark) { ${themeColors()} }
  ${themeColors('[data-ogsb] ', '[data-ogsc] ')}
`;

const body = {
  backgroundColor: '#070b14',
  margin: '0',
  padding: '24px 0',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  WebkitTextSizeAdjust: '100%',
};

const container = {
  width: '600px',
  maxWidth: '600px',
  backgroundColor: navy,
  margin: '0 auto',
  overflow: 'hidden',
};

// Single background layer only: Gmail drops multi-layer `background-image` entirely.
const heroWrap = {
  width: '100%',
  backgroundColor: navy,
  backgroundImage: `url(${images.hero})`,
  backgroundSize: '100% auto',
  backgroundPosition: 'top left',
  backgroundRepeat: 'no-repeat',
};

const adtLogoCell = {
  padding: '22px 0 0 22px',
  verticalAlign: 'top',
};

const htLogoCell = {
  padding: '22px 18px 0 0',
  verticalAlign: 'top',
};

const adtLogo = {
  width: '178px',
  height: '46px',
  opacity: 1,
  transform: 'rotate(0deg)',
  display: 'block',
};

const htLogo = {
  width: '50px',
  height: '50px',
  opacity: 1,
  display: 'block',
  lineHeight: '0',
  textDecoration: 'none',
};

const htLogoImage = {
  width: '50px',
  height: '50px',
  display: 'block',
};

// Fills the hero to its original 954px height (600px × 159%).
// Logo row (72px) + spacer (448px) puts the fade start at 520px, as in the original design.
const heroSpacer = {
  height: '448px',
  lineHeight: '448px',
  fontSize: '1px',
};

// Gmail mobile strips CSS gradients, so the fade is stacked rgba rows: 17 × 15px = 255px.
const heroFadeSteps = Array.from({ length: 17 }, (_, i) => Number(((i + 1) / 17).toFixed(3)));

const heroFadeStep = {
  height: '15px',
  lineHeight: '15px',
  fontSize: '1px',
};

const discoverBlock = {
  backgroundColor: navy,
  padding: '0 50px 26px',
  textAlign: 'left' as const,
  lineHeight: 'normal',
};

const romanceSection = {
  padding: '0 50px',
};

const tagline = {
  margin: '0',
  color: '#FFFFFF',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontStyle: 'italic' as const,
  fontSize: '20px',
  lineHeight: '120%',
  letterSpacing: '0',
  textAlign: 'left' as const,
  fontOpticalSizing: 'none' as const,
};

const taglineRule = {
  width: '100%',
  height: '1px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  margin: '22px 0 28px',
};

const ruleCell = {
  height: '1px',
  lineHeight: '1px',
  fontSize: '1px',
};

const discoverKicker = {
  margin: '0',
  color: '#FFFFFF',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '100%',
  letterSpacing: '0',
  fontOpticalSizing: 'none' as const,
};

const discoverTitle = {
  margin: '6px 0 0',
  color: '#FFFFFF',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '100%',
  letterSpacing: '0',
  fontOpticalSizing: 'none' as const,
};

const romanceCard = {
  width: '500px',
  height: '500px',
  lineHeight: '0',
};

const tribeSection = {
  padding: '41px 30px 0',
};

const tribeHeading = {
  padding: '0 20px',
  textAlign: 'left' as const,
};

const tribeRow = {
  marginTop: '16px',
};

const tribeColumn = {
  width: '170px',
  verticalAlign: 'top',
};

const tribeItem = {
  width: '170px',
  height: '336px',
};

const tribeCard = {
  width: '170px',
  height: '263px',
  borderRadius: '12px',
  overflow: 'hidden',
  lineHeight: '0',
};

// Photo as cell background so the label can sit on top without absolute positioning.
const tribeImage = {
  width: '170px',
  height: '263px',
  verticalAlign: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '12px',
  border: '0.5px solid #FFFFFF66',
  boxSizing: 'border-box' as const,
};

const tribeLabel = {
  display: 'inline-block',
  margin: '0',
  padding: '12px 22px',
  backgroundColor: white,
  borderTopLeftRadius: '12px',
  borderBottomRightRadius: '12px',
  color: navy,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '100%',
  fontWeight: 500,
  textAlign: 'left' as const,
};

const tribeCaption = {
  margin: '14px 0 0',
  padding: '0 0 0 22px',
  color: white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 400,
  textAlign: 'left' as const,
  whiteSpace: 'nowrap' as const,
};

const buttonWrap = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const exploreButton = {
  display: 'inline-block',
  width: '250px',
  padding: '16px 0',
  borderRadius: '8px',
  backgroundColor: white,
  color: navy,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  lineHeight: '100%',
  fontWeight: 500,
  textAlign: 'center' as const,
  textDecoration: 'underline',
};

const underlineText = {
  textDecoration: 'underline',
};

const experienceSection = {
  padding: '44px 50px 0',
  textAlign: 'left' as const,
};

const experienceTitle = {
  margin: '0',
  color: white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '32px',
  lineHeight: '38px',
  fontWeight: 600,
  letterSpacing: '0',
};

const experienceMuted = {
  color: '#6F8AA6',
};

const experienceCopy = {
  margin: '11px 0 0',
  color: white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  lineHeight: '100%',
  fontWeight: 400,
  fontStyle: 'normal' as const,
  letterSpacing: '0',
};

const videoLink = {
  display: 'block',
  marginTop: '18px',
  textDecoration: 'none',
};
const videoCard = {
  width: '498px',
  height: '282px',
  overflow: 'hidden',
  lineHeight: '0',
  backgroundImage: `url(${images.video})`,
  backgroundSize: '498px 282px',
  backgroundRepeat: 'no-repeat',
};

const playButton = {
  margin: '0 0 0 212px',
  width: '74px',
  height: '74px',
  borderRadius: '50%',
  backgroundColor: white,
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
};

const playIcon = {
  margin: '0 0 0 30px',
  width: '0',
  height: '0',
  borderTop: '13px solid transparent',
  borderBottom: '13px solid transparent',
  borderLeft: '22px solid #FF5A1F',
};

const payoffSection = {
  padding: '39px 50px 29px',
  lineHeight: '0',
  textAlign: 'left' as const,
};

const payoffTitle = {
  ...experienceTitle,
  fontSize: '32px',
  lineHeight: '39px',
  fontWeight: 500,
};

const bannerImage = {
  width: '497px',
  height: '136px',
  marginTop: '11px',
  display: 'block',
  borderRadius: '12px',
};

const footerSection = {
  padding: '0 50px 80px',
  textAlign: 'left' as const,
};

const footerRule = {
  width: '100%',
  height: '1px',
  backgroundColor: '#5C7F9D',
  lineHeight: '1px',
  fontSize: '1px',
};

const advisorRow = {
  margin: '33px 0 32px',
};

const advisorColumnLeft = {
  width: '240px',
  paddingRight: '21px',
  verticalAlign: 'top',
};

const advisorColumnRight = {
  width: '239px',
  verticalAlign: 'top',
};

const advisorButton = {
  display: 'block',
  height: '53px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  lineHeight: '53px',
  whiteSpace: 'nowrap' as const,
  borderRadius: '8px',
  backgroundColor: white,
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const advisorIcon = {
  display: 'inline-block',
  marginRight: '10px',
};

const chatIcon = {
  ...advisorIcon,
  width: '20px',
  height: '20px',
  verticalAlign: '-3.5px',
};

const phoneIcon = {
  ...advisorIcon,
  width: '21.2px',
  height: '20px',
  verticalAlign: '-3.5px',
};

const advisorText = {
  color: '#0B2234',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: 500,
  textDecoration: 'underline',
  verticalAlign: 'baseline',
};

const socialText = {
  margin: '25px 0 0',
  color: '#B8CDE0',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 500,
};

const socialLink = {
  color: '#B8CDE0',
  textDecoration: 'underline',
};

const copyrightText = {
  margin: '28px 0 0',
  color: '#B8CDE0',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 400,
};
