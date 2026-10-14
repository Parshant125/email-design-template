import { Body, Container, Hr, Html, Img, Link, Preview, Section, Text } from 'react-email';

const links = {
  logo: 'https://holidaytribe.ai/?utm_source=email&utm_medium=logo&utm_campaign=mokobara',
  hero: 'https://holidaytribe.ai/international-holidays?utm_source=email&utm_medium=banner+image&utm_campaign=mokobara',
  packages: 'https://holidaytribe.ai/international-holidays?utm_source=email&utm_medium=explore+packages+cta&utm_campaign=mokobara',
  instagram:
    'https://www.instagram.com/holidaytribeworld/?utm_source=email&utm_medium=cta&utm_campaign=mokobara',
  linkedin:
    'https://www.linkedin.com/company/holidaytribe/?utm_source=email&utm_medium=cta&utm_campaign=mokobara',
  youtube:
    'https://www.youtube.com/@HolidayTribe/?utm_source=email&utm_medium=cta&utm_campaign=mokobara',
};

const images = {
  hero: 'https://cdn.holidaytribe.ai/email-template/images/mokobara-travel-accessories-snow-mountain.jpg',
  waves: 'https://cdn.holidaytribe.ai/email-template/icons/waves.png',
  logo: 'https://cdn.holidaytribe.ai/website/icons/holiday-tribe-icon.png',
  instagram: 'https://cdn.holidaytribe.ai/email-template/icons/instagram.png',
  linkedin: 'https://cdn.holidaytribe.ai/email-template/icons/linkedin.png',
  youtube: 'https://cdn.holidaytribe.ai/email-template/icons/youtube.png',
};

const socials = [
  { name: 'Instagram', href: links.instagram, icon: images.instagram },
  { name: 'LinkedIn', href: links.linkedin, icon: images.linkedin },
  { name: 'YouTube', href: links.youtube, icon: images.youtube },
];

export const MokobaraEmail = () => {
  return (
    <Html>
      {/* Plain <head>: react-email's <Head> adds x-apple-disable-message-reformatting, which stops iPhone Mail from fitting the 600px layout to the screen. */}
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      </head>
      <Preview>
        Kuchh toh log kahenge… apka cool sa Mokobara bag dekh ke. Get up to ₹10,000 worth of
        Mokobara travel gear, free with your next booking!
      </Preview>
      <Body style={body} className="mk-page-bg">
        <Container style={container} className="mk-black-bg">
          <Section style={heroSection} {...{ background: images.hero, bgcolor: skyBlue }}>
            <Text style={logoRow}>
              <Link href={links.logo} style={logoLink}>
                <Img src={images.logo} alt="Holiday Tribe" width="60" height="60" style={logoImage} />
              </Link>
            </Text>
            <Link href={links.hero} style={heroLink}>
              <Text style={heroTitle} className="mk-yellow-title">
                Kuchh toh
                <br />
                log kahenge...
              </Text>
              <Text style={heroSubtitle} className="mk-white-text">
                apka cool sa
                <br />
                <span style={heroAccent} className="mk-yellow-title">
                  mokobara
                </span>{' '}
                bag dekh ke
              </Text>
            </Link>
            <Text style={wavesClip}>
              <Img src={images.waves} alt="" width="600" height="240" style={wavesImage} />
            </Text>
          </Section>

          <Section style={contentSection} className="mk-black-bg">
            <Text style={headline} className="mk-white-text">
              Get up to ₹10,000 worth of Mokobara
              <br />
              travel gear,{' '}
              <span style={headlineAccent} className="mk-yellow-text">
                free with your next booking!
              </span>
            </Text>

            <Link href={links.packages} style={ctaButton} className="mk-yellow-bg">
              <span style={ctaText} className="mk-black-text">
                Explore Packages
              </span>
              <span style={ctaArrow} className="mk-black-text">
                &rarr;
              </span>
            </Link>

            <Hr style={divider} />

            <Text style={socialRow}>
              {socials.map((social, index) => (
                <Link key={social.name} href={social.href} style={socialLink}>
                  <Img
                    src={social.icon}
                    alt={social.name}
                    width="27"
                    height="27"
                    style={index < socials.length - 1 ? socialIconSpaced : socialIcon}
                  />
                </Link>
              ))}
            </Text>

            <Text style={copyrightText} className="mk-muted-text">
              HOLIDAY TRIBE PRIVATE LIMITED. All rights reserved
              <sup style={copyrightMark}>©</sup> 2026
            </Text>

            <Text style={unsubscribeText} className="mk-muted-text">
              <Link
                href="we_wk_unsubscribe_link"
                target="_self"
                style={unsubscribeLink}
                className="mk-muted-text"
              >
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default MokobaraEmail;

const black = '#040707';
const white = '#ffffff';
const yellow = '#FFCF69';
const yellowText = '#FFD987';
const yellowTitle = '#FFD069';
const skyBlue = '#234A7D';
const muted = '#B7B7B7';
const dividerColor = '#4A4A4A';

const themeColors = (prefix = '', textPrefix = prefix) => `
  ${prefix}.mk-page-bg { background-color: #F5F5F5 !important; }
  ${prefix}.mk-black-bg { background-color: ${black} !important; }
  ${prefix}.mk-yellow-bg { background-color: ${yellow} !important; }
  ${textPrefix}.mk-white-text { color: ${white} !important; }
  ${textPrefix}.mk-yellow-text { color: ${yellowText} !important; }
  ${textPrefix}.mk-yellow-title { color: ${yellowTitle} !important; }
  ${textPrefix}.mk-black-text { color: ${black} !important; }
  ${textPrefix}.mk-muted-text { color: ${muted} !important; }
`;

const themeStyles = `
  :root { color-scheme: light only; supported-color-schemes: light only; }
  ${themeColors()}
  @media (prefers-color-scheme: dark) { ${themeColors()} }
  ${themeColors('[data-ogsb] ', '[data-ogsc] ')}
`;

const fontFamily = 'Inter, Helvetica, Arial, sans-serif';

const body = {
  backgroundColor: '#F5F5F5',
  margin: '0',
  padding: '24px 0',
  fontFamily,
  WebkitTextSizeAdjust: '100%',
};

const container = {
  width: '600px',
  maxWidth: '600px',
  backgroundColor: black,
  margin: '0 auto',
  overflow: 'hidden',
};

// The photo is 600×1398 but only its top 1174px shows: the waves image ends there and the black section starts.
// Logo (30 + 60) + title (20 + 128) + subtitle (12 + 100) + gap (600) + waves (224) = 1174px.
const heroSection = {
  backgroundColor: skyBlue,
  backgroundImage: `url(${images.hero})`,
  backgroundSize: '600px 1398px',
  backgroundPosition: 'top left',
  backgroundRepeat: 'no-repeat',
};

const logoRow = {
  margin: '0',
  padding: '30px 30px 0 0',
  textAlign: 'right' as const,
  fontSize: '0',
  lineHeight: '0',
};

const logoLink = {
  display: 'inline-block',
  textDecoration: 'none',
};

const logoImage = {
  width: '60px',
  height: '60px',
  display: 'block',
  border: '0',
};

const heroLink = {
  display: 'block',
  textDecoration: 'none',
};

// Padding instead of margins so the gap above the title and the 600px of photo below the subtitle stay clickable.
const heroTitle = {
  margin: '0',
  padding: '20px 0 0 50px',
  color: yellowTitle,
  fontFamily,
  fontSize: '58px',
  lineHeight: '74px',
  fontWeight: 600,
  letterSpacing: '0',
};

const heroSubtitle = {
  margin: '0',
  padding: '12px 0 600px 50px',
  color: white,
  fontFamily,
  fontSize: '42px',
  lineHeight: '50px',
  fontWeight: 700,
  letterSpacing: '0',
  whiteSpace: 'nowrap' as const,
};

const heroAccent = {
  color: yellowTitle,
};

// waves.png is 240px tall but its bottom 16px is transparent; clipping to 224px stops the photo showing through.
const wavesClip = {
  margin: '0',
  height: '210px',
  fontSize: '0',
  overflow: 'hidden',
  lineHeight: '0',
};

const wavesImage = {
  width: '600px',
  height: '254px',
  display: 'block',
  border: '0',
};

const contentSection = {
  padding: '21px 50px 38px',
  backgroundColor: black,
  textAlign: 'left' as const,
};

const headline = {
  margin: '0',
  color: white,
  fontFamily,
  fontSize: '24px',
  lineHeight: '33px',
  fontWeight: 500,
  letterSpacing: '0',
};

const headlineAccent = {
  color: yellowText,
};

const ctaButton = {
  display: 'inline-block',
  marginTop: '19px',
  padding: '15px 30px',
  borderRadius: '29px',
  backgroundColor: yellow,
  fontFamily,
  fontSize: '24px',
  lineHeight: '28px',
  fontWeight: 500,
  textDecoration: 'none',
  whiteSpace: 'nowrap' as const,
};

const ctaText = {
  color: black,
  fontWeight: 600,
  textDecoration: 'none',
};

// Text arrow sized to Figma's 22.67×14 icon (2px stroke) so no image has to be hosted.
const ctaArrow = {
  marginLeft: '18px',
  color: black,
  fontSize: '40px',
  lineHeight: '28px',
  fontWeight: 400,
  textDecoration: 'none',
};

const divider = {
  width: '100%',
  margin: '42px 0 0',
  border: 'none',
  borderTop: `1px solid ${dividerColor}`,
};

const socialRow = {
  margin: '20px 0 0',
  fontSize: '0',
  lineHeight: '0',
};

const socialLink = {
  textDecoration: 'none',
};

const socialIcon = {
  width: '27px',
  height: '27px',
  display: 'inline-block',
  border: '0',
};

const socialIconSpaced = {
  ...socialIcon,
  marginRight: '30px',
};

const copyrightText = {
  margin: '24px 0 0',
  color: muted,
  fontFamily,
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 400,
};

const copyrightMark = {
  fontSize: '8px',
  lineHeight: '0',
  verticalAlign: 'super',
};

const unsubscribeText = {
  margin: '16px 0 0',
  color: muted,
  fontFamily,
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 400,
  textAlign: 'center' as const,
};

const unsubscribeLink = {
  color: muted,
  textDecoration: 'underline',
};
