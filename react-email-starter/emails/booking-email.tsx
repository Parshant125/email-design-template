import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components';

const headingFontFamily =
  "'Geist Mono', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const bodyFontFamily =
  "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const LOGO_URL = 'https://cdn.holidaytribe.ai/website/icons/holiday-tribe-icon.png';
const GOOGLE_LOGO_URL = 'https://cdn.holidaytribe.ai/website/icons/google-logo.svg';
const STAR_FULL_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#F5B400" d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"/></svg>'
  );
const STAR_HALF_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#E5E5E5" d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"/><path fill="#F5B400" d="M12 2.5v15.27l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z"/></svg>'
  );
const BULB_ICON_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .9 1.7h5.4c.1-.7.4-1.3.9-1.7A6 6 0 0 0 12 3z"/></svg>'
  );
const PHONE_ICON_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  );
const MAIL_ICON_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
  );
const WHATSAPP_ICON_URL =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#111111"><path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.24-1.94 1.32-.5.07-1.12.1-1.81-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.26.64-.38.85-.38.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.64.89 2.2.97 2.36.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.4-.47.54-.16.16-.32.33-.14.64.19.31.83 1.37 1.78 2.22 1.22 1.09 2.25 1.43 2.57 1.59.32.16.5.13.69-.08.19-.21.8-.93 1.01-1.25.21-.32.43-.26.72-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/></svg>'
  );
const HERO_ILLUSTRATION_URL =
  'https://cdn.holidaytribe.ai/email-template/icons/booking_confirmation_illustration.svg';
const VISA_PROTECT_URL =
  'https://cdn.holidaytribe.ai/email-template/icons/visa_protect.svg';
const AIRLINE_LOGO_URL = 'https://cdn.holidaytribe.ai/website/icons/holiday-tribe-icon.png';
const HOTEL_IMAGE_OSAKA =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=200&fit=crop';
const HOTEL_IMAGE_KYOTO =
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&h=200&fit=crop';
const HOTEL_IMAGE_TOKYO =
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=200&fit=crop';

const darkBg = '#221C1A';
const mutedOnDark = 'rgba(255, 255, 255, 0.68)';
const ink = '#1A1A1A';
const muted = '#6B7280';
const faint = '#9CA3AF';
const line = '#ECEAE6';
const cardBorder = '#E7E5E1';
const soft = '#F6F5F3';
const green = '#16A34A';
const payGreen = '#80FF00';
const ADVISOR_PHOTO =
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop';
const CALL_HREF = 'tel:+919821332300';
const WHATSAPP_HREF = 'https://wa.me/919319998495';
const CONTACT_HREF = 'mailto:contact@holidaytribe.com';
const QUOTATION_ID = '699e1afbd08345b906a5fe55';
const TRIP_HREF = `https://holidaytribe.ai/trip/${QUOTATION_ID}`;
const USER_ITINERARY_ID = '6afea64970d866b47f9ee6dd';
const BOOKING_HREF = `https://holidaytribe.ai/user-itinerary/${USER_ITINERARY_ID}/edit`;
const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/holidaytribe',
    src: 'https://cdn.holidaytribe.ai/email-template/icons/facebook.svg',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/holidaytribeworld',
    src: 'https://cdn.holidaytribe.ai/email-template/icons/instagram-icon-gray.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/holidaytribe/posts/',
    src: 'https://cdn.holidaytribe.ai/email-template/icons/linkedIn-icon-gray.svg',
  },
];
const pagePad = '20px 24px';

const mobileCss = `
  @media only screen and (max-width: 620px) {
    .bk-hero-art,
    .bk-hero-copy,
    .bk-meta-col {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
    }
    .bk-hero-art {
      text-align: center !important;
      padding-bottom: 4px !important;
    }
    .bk-hero-img {
      margin: 0 auto !important;
      max-width: 220px !important;
    }
    .bk-hero-copy {
      padding-left: 0 !important;
      padding-top: 16px !important;
    }
    .bk-meta-col {
      padding: 0 0 14px 0 !important;
    }
    .bk-advisor-btn {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      padding-right: 0 !important;
      padding-left: 0 !important;
      padding-bottom: 10px !important;
    }
  }
`;

const cities = [
  {
    name: 'Osaka',
    days: 'Day 1-4',
    dates: '26 Oct-29 Oct',
    image: HOTEL_IMAGE_OSAKA,
    hotel: 'Holiday Inn Osaka Namba by IHG',
    rooms: ['2 x Superior Twin Room', '1 x Deluxe Room with Bathtub'],
    checkIn: 'Check-in: Day 2 · 2:00 PM',
    checkOut: 'Check-out: Day 5 · 11:00 AM',
    activities: '4 Activities in Osaka',
  },
  {
    name: 'Kyoto',
    days: 'Day 4-7',
    dates: '29 Oct-01 Nov',
    image: HOTEL_IMAGE_KYOTO,
    hotel: 'Hotel Resol Trinity Kyoto',
    rooms: ['2 x Twin Room'],
    checkIn: 'Check-in: Day 4 · 3:00 PM',
    checkOut: 'Check-out: Day 7 · 11:00 AM',
    activities: '5 Activities in Kyoto',
  },
  {
    name: 'Tokyo',
    days: 'Day 7-14',
    dates: '01 Nov-08 Nov',
    image: HOTEL_IMAGE_TOKYO,
    hotel: 'The Royal Park Hotel Iconic Tokyo Shiodome',
    rooms: ['2 x Superior Twin Room'],
    checkIn: 'Check-in: Day 7 · 2:00 PM',
    checkOut: 'Check-out: Day 14 · 11:00 AM',
    activities: '8 Activities in Tokyo',
  },
];

const includedLeft = ['Visa Protect', 'Travel insurance', 'Airport transfers'];
const includedRight = ['Daily breakfast', '24/7 on-trip support', '6 activities'];

const labelStyle = {
  margin: '0 0 4px 0',
  fontFamily: bodyFontFamily,
  fontSize: '12px',
  lineHeight: '16px',
  color: mutedOnDark,
  textAlign: 'left' as const,
};

const valueStyle = {
  margin: '0',
  fontFamily: bodyFontFamily,
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '18px',
  color: '#ffffff',
  textAlign: 'left' as const,
};

const sectionTitle = {
  margin: '0 0 14px 0',
  fontFamily: headingFontFamily,
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '24px',
  color: ink,
  textAlign: 'left' as const,
};

const cardStyle = {
  backgroundColor: '#ffffff',
  border: `1px solid ${cardBorder}`,
  borderRadius: '16px',
  padding: '16px 18px',
  margin: '0 0 14px 0',
};

const cityCardStyle = {
  backgroundColor: '#F3F3F3',
  borderRadius: '20px',
  padding: '20px 20px 18px',
  margin: '0 0 12px 0',
};

const activitiesStyle = {
  verticalAlign: 'middle' as const,
  fontFamily: 'Instrument Sans, sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  letterSpacing: '0',
};

const payLabel = {
  margin: '0',
  fontFamily: bodyFontFamily,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: ink,
  textAlign: 'left' as const,
};

const payHint = {
  margin: '2px 0 0 0',
  fontFamily: bodyFontFamily,
  fontSize: '12px',
  lineHeight: '16px',
  color: faint,
  textAlign: 'left' as const,
};

const payValue = {
  margin: '0',
  fontFamily: bodyFontFamily,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: ink,
  textAlign: 'right' as const,
};

const receiptLabel = {
  ...payLabel,
  fontWeight: 500,
  color: muted,
};

const totalLabel = {
  margin: '0',
  fontFamily: headingFontFamily,
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: '22px',
  color: ink,
  textAlign: 'left' as const,
};

const paidPill = {
  display: 'inline-block',
  backgroundColor: '#E7F8EC',
  color: green,
  borderRadius: '999px',
  padding: '3px 8px',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  marginRight: '8px',
};

const payButton = {
  display: 'block',
  backgroundColor: payGreen,
  borderRadius: '12px',
  padding: '14px 16px',
  fontFamily: bodyFontFamily,
  fontSize: '15px',
  fontWeight: 700,
  lineHeight: '20px',
  color: '#111111',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const advisorCallButton = {
  display: 'block',
  width: '187px',
  height: '36px',
  backgroundColor: '#ffffff',
  border: '1px solid #000000',
  borderRadius: '12px',
  padding: '6px 12px',
  margin: '0 auto',
  textAlign: 'center' as const,
  textDecoration: 'none',
  boxSizing: 'border-box' as const,
};

const advisorWhatsappButton = {
  ...advisorCallButton,
  backgroundColor: '#00FF9D',
  border: '1px solid #000000',
};

const advisorButtonLabel = {
  fontFamily: bodyFontFamily,
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '22px',
  color: '#111111',
  whiteSpace: 'nowrap' as const,
};

export const BookingConfirmationEmail = () => {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: mobileCss }} />
      </Head>
      <Body
        style={{
          backgroundColor: '#f4f5f7',
          fontFamily: bodyFontFamily,
          margin: '0',
          padding: '40px 0',
        }}
      >
        <Container
          style={{
            backgroundColor: '#ffffff',
            margin: '0 auto',
            maxWidth: '640px',
            borderRadius: '16px',
          }}
        >
          <Section className="main-content-section" style={{ padding: pagePad }}>
            <Section
              style={{
                backgroundColor: darkBg,
                borderRadius: '22px',
                padding: '22px 22px 0 22px',
                overflow: 'hidden',
              }}
            >
              <Row>
                <Column style={{ verticalAlign: 'middle', width: '50%' }}>
                  <a
                    href="https://holidaytribe.ai/"
                    target="_blank"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    <Img
                      src={LOGO_URL}
                      width="36"
                      alt="Holiday Tribe"
                      style={{ display: 'block', width: '36px', height: 'auto', border: 0 }}
                    />
                  </a>
                </Column>
                <Column style={{ verticalAlign: 'middle', width: '50%', textAlign: 'right' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '16px',
                      color: '#ffffff',
                    }}
                  >
                    Order ID: 64849
                  </span>
                </Column>
              </Row>

              <Row style={{ marginTop: '22px' }}>
                <Column className="bk-hero-art" style={{ verticalAlign: 'middle', width: '42%' }}>
                  <Img
                    className="bk-hero-img"
                    src={HERO_ILLUSTRATION_URL}
                    width="180"
                    alt="Booking confirmed"
                    style={{
                      display: 'block',
                      width: '100%',
                      maxWidth: '218px',
                      height: 'auto',
                    }}
                  />
                </Column>
                <Column
                  className="bk-hero-copy"
                  style={{ verticalAlign: 'middle', width: '58%', paddingLeft: '8px' }}
                >
                  <Text
                    style={{
                        width: '100%',
                        margin: '0 0 10px 0',
                        fontFamily: 'Instrument Sans',
                        fontSize: '34px',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        lineHeight: '120%',
                        letterSpacing: '-0.5px',
                        color: '#ffffff',
                        textAlign: 'left',
                    }}
                  >
                    Aastha, your Japan
                    <br />
                    holiday is
                    <br />
                    confirmed !
                  </Text>
                  <Text
                style={{
                  width: '100%',
                  fontFamily: 'Instrument Sans',
                  fontSize: '16px',
                  fontWeight: 400,
                  fontStyle: 'regular',
                  lineHeight: '24px',
                  color: '#D9D3D1',
                }}
                  >
                    We&apos;ve received your payment of <br />₹20,000. Your hotels, activities and <br /> prices
                    are now locked in. This email is <br />  your official booking confirmation, so <br />  keep it
                    handy.
                  </Text>
                </Column>
              </Row>

              <Section
                style={{
                  marginTop: '22px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '16px 0 18px 0',
                }}
              >
                <Row>
                  <Column className="bk-meta-col" style={{ verticalAlign: 'top', width: '34%' }}>
                    <Text style={labelStyle}>Travel dates</Text>
                    <Text style={valueStyle}>26 Oct – 08 Nov 2026</Text>
                  </Column>
                  <Column className="bk-meta-col" style={{ verticalAlign: 'top', width: '33%' }}>
                    <Text style={labelStyle}>Duration</Text>
                    <Text style={valueStyle}>13 nights, 3 cities</Text>
                  </Column>
                  <Column className="bk-meta-col" style={{ verticalAlign: 'top', width: '33%' }}>
                    <Text style={labelStyle}>Travellers</Text>
                    <Text style={valueStyle}>4 adults, 2 children</Text>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>

          <Section className="main-content-section" style={{ padding: '4px 24px 8px 24px' }}>
            <Section
              style={{
                backgroundColor: soft,
                borderRadius: '16px',
                padding: '18px 18px',
              }}
            >
              <Text
                style={{
                  margin: '0 0 6px 0',
                  fontFamily: headingFontFamily,
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '22px',
                  color: ink,
                  textAlign: 'left',
                }}
              >
                Welcome aboard, Triber!
              </Text>
              <Text
                style={{
                  margin: '0',
                  fontFamily: bodyFontFamily,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: muted,
                  textAlign: 'left',
                }}
              >
                Our team will be in touch within the next few days to guide you through the next
                steps and answer any questions. In the meantime, you can review your booking below.
              </Text>
            </Section>
          </Section>

          <Section className="main-content-section" style={{ padding: '22px 24px 8px 24px' }}>
            <Text style={sectionTitle}>Trip overview</Text>

            <Section style={cardStyle}>
              <Row>
                <Column style={{ verticalAlign: 'middle', width: '55%' }}>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: headingFontFamily,
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: '22px',
                      color: ink,
                      textAlign: 'left',
                    }}
                  >
                    Delhi → Osaka
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'middle', width: '45%', textAlign: 'right' }}>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: muted,
                      textAlign: 'right',
                    }}
                  >
                    Departure Flight
                  </Text>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: faint,
                      textAlign: 'right',
                    }}
                  >
                    Economy class
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginTop: '14px' }}>
                <Column style={{ verticalAlign: 'middle', width: '36px' }}>
                  <Img
                    src={AIRLINE_LOGO_URL}
                    width="28"
                    height="28"
                    alt="Air India"
                    style={{ display: 'block', width: '28px', height: '28px', borderRadius: '50%' }}
                  />
                </Column>
                <Column style={{ verticalAlign: 'middle', paddingLeft: '8px' }}>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: bodyFontFamily,
                      fontSize: '13px',
                      fontWeight: 600,
                      lineHeight: '18px',
                      color: ink,
                      textAlign: 'left',
                    }}
                  >
                    Air India
                  </Text>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: faint,
                      textAlign: 'left',
                    }}
                  >
                    Flight number pending
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginTop: '18px' }}>
                <Column style={{ verticalAlign: 'top', width: '28%' }}>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: headingFontFamily,
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: '26px',
                      color: ink,
                      textAlign: 'left',
                    }}
                  >
                    20:50
                  </Text>
                  <Text
                    style={{
                      margin: '2px 0 0 0',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: muted,
                      textAlign: 'left',
                    }}
                  >
                    IGI Airport
                  </Text>
                </Column>
                <Column
                  style={{
                    verticalAlign: 'middle',
                    width: '44%',
                    textAlign: 'center',
                    padding: '0 6px',
                  }}
                >
                  <Text
                    style={{
                      margin: '0 0 6px 0',
                      fontFamily: bodyFontFamily,
                      fontSize: '11px',
                      lineHeight: '14px',
                      color: faint,
                      textAlign: 'center',
                    }}
                  >
                    48h 05m
                  </Text>
                  <div style={{ height: '1px', backgroundColor: '#D6D3D1', width: '100%' }} />
                  <Text
                    style={{
                      margin: '6px 0 0 0',
                      fontFamily: bodyFontFamily,
                      fontSize: '11px',
                      lineHeight: '14px',
                      color: faint,
                      textAlign: 'center',
                    }}
                  >
                    2 layovers
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'top', width: '28%', textAlign: 'right' }}>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: headingFontFamily,
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: '26px',
                      color: ink,
                      textAlign: 'right',
                    }}
                  >
                    07:25
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#EF4444',
                        marginLeft: '4px',
                      }}
                    >
                      +2 Days
                    </span>
                  </Text>
                  <Text
                    style={{
                      margin: '2px 0 0 0',
                      fontFamily: bodyFontFamily,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: muted,
                      textAlign: 'right',
                    }}
                  >
                    Osaka Airport
                  </Text>
                </Column>
              </Row>

              <Section style={{ marginTop: '16px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#F3F4F6',
                    borderRadius: '999px',
                    padding: '6px 12px',
                    fontFamily: bodyFontFamily,
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '16px',
                    color: muted,
                  }}
                >
                  2 Adult · 2 Children
                </span>
              </Section>
            </Section>

            {cities.map((city) => (
              <Section key={city.name} style={cityCardStyle}>
                <Row>
                  <Column style={{ width: '1%', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                    <Text
                      style={{
                        margin: '0',
                        fontFamily: bodyFontFamily,
                        fontSize: '22px',
                        fontWeight: 700,
                        lineHeight: '28px',
                        color: '#111111',
                        letterSpacing: '-0.4px',
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {city.name}
                    </Text>
                  </Column>
                  <Column
                    style={{ verticalAlign: 'middle', paddingLeft: '16px', whiteSpace: 'nowrap' }}
                  >
                    <Text
                      style={{
                        margin: '0',
                        fontFamily: bodyFontFamily,
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        color: '#111111',
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {city.days}
                      <span style={{ padding: '0 7px' }}>·</span>
                      {city.dates}
                    </Text>
                  </Column>
                </Row>

                <Row style={{ marginTop: '18px' }}>
                  <Column style={{ width: '80px', verticalAlign: 'middle' }}>
                    <Img
                      src={city.image}
                      width="80"
                      height="80"
                      alt={city.hotel}
                      style={{
                        display: 'block',
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                      }}
                    />
                  </Column>
                  <Column style={{ verticalAlign: 'middle', paddingLeft: '16px' }}>
                    <Text
                      style={{
                        margin: '0',
                        fontFamily: bodyFontFamily,
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        color: '#111111',
                        textAlign: 'left',
                      }}
                    >
                      {city.hotel}
                    </Text>
                    {city.rooms.map((room) => (
                      <Text
                        key={room}
                        style={{
                          margin: '2px 0 0 0',
                          fontFamily: bodyFontFamily,
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '20px',
                          color: '#6E6E6E',
                          textAlign: 'left',
                        }}
                      >
                        {room}
                      </Text>
                    ))}
                  </Column>
                </Row>

                <Row style={{ marginTop: '10px' }}>
                  <Column style={{ width: '80px', fontSize: '1px', lineHeight: '1px' }}>
                    &nbsp;
                  </Column>
                  <Column style={{ paddingLeft: '16px', verticalAlign: 'middle' }}>
                    <Text
                      style={{
                        margin: '0',
                        fontFamily: bodyFontFamily,
                        fontSize: '13px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        color: '#9A9A9A',
                        textAlign: 'left',
                      }}
                    >
                      {city.checkIn}
                      <span style={{ padding: '0 8px' }}>-</span>
                      {city.checkOut}
                    </Text>
                  </Column>
                </Row>

                <Row style={{ marginTop: '14px' }}>
                  <Column style={{ width: '80px', fontSize: '1px', lineHeight: '1px' }}>
                    &nbsp;
                  </Column>
                  <Column style={{ paddingLeft: '16px', verticalAlign: 'middle' }}>
                    <Text
                      style={{
                        margin: '0',
                        fontFamily: bodyFontFamily,
                        fontSize: '15px',
                        fontWeight: 700,
                        lineHeight: '22px',
                        color: '#111111',
                        textAlign: 'left',
                      }}
                    >
                      <Img
                        src={BULB_ICON_URL}
                        alt=""
                        width="18"
                        height="18"
                        style={{
                          display: 'inline-block',
                          width: '18px',
                          height: '18px',
                          marginRight: '8px',
                          verticalAlign: 'middle',
                        }}
                      />
                      <span style={activitiesStyle}>{city.activities}</span>
                    </Text>
                  </Column>
                </Row>
              </Section>
            ))}
          </Section>

          <Section className="main-content-section" style={{ padding: '18px 24px 8px 24px' }}>
            <Text style={sectionTitle}>Included in your holiday</Text>
            <Section
              style={{
                backgroundColor: soft,
                borderRadius: '16px',
                padding: '16px 18px',
              }}
            >
              <Row>
                <Column style={{ verticalAlign: 'top', width: '50%', paddingRight: '8px' }}>
                  {includedLeft.map((item) => (
                    <Text
                      key={item}
                      style={{
                        margin: '0 0 10px 0',
                        fontFamily: bodyFontFamily,
                        fontSize: '13px',
                        lineHeight: '18px',
                        color: ink,
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ color: green, fontWeight: 700, marginRight: '8px' }}>✓</span>
                      {item}
                    </Text>
                  ))}
                </Column>
                <Column style={{ verticalAlign: 'top', width: '50%' }}>
                  {includedRight.map((item) => (
                    <Text
                      key={item}
                      style={{
                        margin: '0 0 10px 0',
                        fontFamily: bodyFontFamily,
                        fontSize: '13px',
                        lineHeight: '18px',
                        color: ink,
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ color: green, fontWeight: 700, marginRight: '8px' }}>✓</span>
                      {item}
                    </Text>
                  ))}
                </Column>
              </Row>
            </Section>

            <Section style={{ marginTop: '16px' }}>
              <a
                href={BOOKING_HREF}
                target="_blank"
                style={{
                  display: 'block',
                  backgroundColor: '#111111',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  fontFamily: bodyFontFamily,
                  fontSize: '15px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  color: '#ffffff',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                View booking
              </a>
            </Section>
          </Section>

          <Section className="main-content-section" style={{ padding: '28px 24px 8px 24px' }}>
            <Text style={{ ...sectionTitle, marginBottom: '4px' }}>Payment schedule</Text>
            <Text
              style={{
                margin: '0 0 8px 0',
                fontFamily: bodyFontFamily,
                fontSize: '13px',
                lineHeight: '20px',
                color: muted,
                textAlign: 'left',
              }}
            >
              You&apos;ve paid 1 of 3 instalments. Here&apos;s what&apos;s left.
            </Text>

            <Row style={{ borderBottom: `1px solid ${line}`, padding: '14px 0' }}>
              <Column style={{ verticalAlign: 'middle', width: '58%' }}>
                <Text style={payLabel}>1st instalment</Text>
                <Text style={payHint}>Paid on 28 Aug 2026</Text>
              </Column>
              <Column style={{ verticalAlign: 'middle', width: '42%', textAlign: 'right' }}>
                <Text style={payValue}>
                  <span style={paidPill}>✓ Paid</span>
                  ₹59,896
                </Text>
              </Column>
            </Row>

            <Row style={{ borderBottom: `1px solid ${line}`, padding: '14px 0' }}>
              <Column style={{ verticalAlign: 'middle', width: '58%' }}>
                <Text style={payLabel}>2nd instalment</Text>
                <Text style={payHint}>Due 08 Oct 2026</Text>
              </Column>
              <Column style={{ verticalAlign: 'middle', width: '42%', textAlign: 'right' }}>
                <Text style={payValue}>₹59,896</Text>
              </Column>
            </Row>

            <Row style={{ borderBottom: `1px solid ${line}`, padding: '14px 0' }}>
              <Column style={{ verticalAlign: 'middle', width: '58%' }}>
                <Text style={payLabel}>3rd instalment</Text>
                <Text style={payHint}>Due 16 Oct 2026</Text>
              </Column>
              <Column style={{ verticalAlign: 'middle', width: '42%', textAlign: 'right' }}>
                <Text style={payValue}>₹59,897</Text>
              </Column>
            </Row>

            <Row style={{ padding: '14px 0 4px 0' }}>
              <Column style={{ verticalAlign: 'middle', width: '50%' }}>
                <Text style={totalLabel}>Trip total</Text>
              </Column>
              <Column style={{ verticalAlign: 'middle', width: '50%', textAlign: 'right' }}>
                <Text style={{ ...totalLabel, textAlign: 'right' }}>₹1,39,793</Text>
              </Column>
            </Row>

            <Section style={{ marginTop: '16px' }}>
              <a href={TRIP_HREF} style={payButton} target="_blank">
                Pay 2nd instalment of ₹59,896
              </a>
            </Section>
          </Section>

          <Section className="main-content-section" style={{ padding: '28px 24px 8px 24px' }}>
            <Text style={sectionTitle}>Payment receipt</Text>
            {[
              ['Amount paid', '₹20,000'],
              ['Paid on', '28 Aug 2026'],
              ['Payment method', 'PayU'],
              ['Transaction ID', 'BHYDU14364849'],
            ].map(([label, value], index, rows) => (
              <Row
                key={label}
                style={{
                  borderBottom: index === rows.length - 1 ? 'none' : `1px solid ${line}`,
                  padding: '14px 0',
                }}
              >
                <Column style={{ verticalAlign: 'middle', width: '50%' }}>
                  <Text style={receiptLabel}>{label}</Text>
                </Column>
                <Column style={{ verticalAlign: 'middle', width: '50%', textAlign: 'right' }}>
                  <Text style={payValue}>{value}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Section className="main-content-section" style={{ padding: '20px 24px 8px 24px' }}>
            <Text style={sectionTitle}>Refund policy</Text>
            <Text
              style={{
                margin: '0 0 4px 0',
                fontFamily: bodyFontFamily,
                fontSize: '13px',
                lineHeight: '20px',
                color: muted,
                textAlign: 'left',
              }}
            >
              If your plans change, the refund depends on when you cancel.
            </Text>
            {[
              ['45 days before departure', 'On or before 11 Sep 2026', '₹50,000', ink],
              ['30 days before departure', '12 Sep – 26 Sep 2026', '₹35,000', ink],
              ['15 days before departure', '27 Sep – 11 Oct 2026', '₹20,000', ink],
              ['Less than 15 days before departure', 'From 12 Oct 2026', 'No refund', '#EF4444'],
            ].map(([title, when, amount, color], index, rows) => (
              <Row
                key={title}
                style={{
                  borderBottom: index === rows.length - 1 ? 'none' : `1px solid ${line}`,
                  padding: '14px 0',
                }}
              >
                <Column style={{ verticalAlign: 'middle', width: '68%' }}>
                  <Text style={payLabel}>{title}</Text>
                  <Text style={payHint}>{when}</Text>
                </Column>
                <Column style={{ verticalAlign: 'middle', width: '32%', textAlign: 'right' }}>
                  <Text style={{ ...payValue, color }}>{amount}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Section className="main-content-section" style={{ padding: '18px 24px 8px 24px' }}>
            <Section style={{ backgroundColor: soft, borderRadius: '16px', padding: '18px' }}>
              <Row>
                <Column style={{ width: '56px', verticalAlign: 'top' }}>
                  <Img
                    src={ADVISOR_PHOTO}
                    width="48"
                    height="48"
                    alt="Anjali Verma"
                    style={{
                      display: 'block',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                </Column>
                <Column style={{ verticalAlign: 'middle' }}>
                  <Text
                    style={{
                      margin: '0 0 4px 0',
                      fontFamily: headingFontFamily,
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: '22px',
                      color: ink,
                      textAlign: 'left',
                    }}
                  >
                    Anjali Verma, your Holiday Advisor
                  </Text>
                  <Text
                    style={{
                      margin: '0',
                      fontFamily: bodyFontFamily,
                      fontSize: '13px',
                      lineHeight: '20px',
                      color: muted,
                      textAlign: 'left',
                    }}
                  >
                    Reach out for anything, from itinerary changes to visa questions.
                  </Text>
                </Column>
              </Row>
              <table
                className="bk-advisor-actions"
                role="presentation"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  margin: '16px 0 0 56px',
                  borderCollapse: 'collapse',
                }}
              >
                <tbody>
                  <tr>
                    <td
                      className="bk-advisor-btn"
                      style={{ verticalAlign: 'middle', paddingRight: '12px' }}
                    >
                      <a href={CALL_HREF} style={{ ...advisorCallButton }} target="_blank">
                        <table
                          role="presentation"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ margin: '0 auto', borderCollapse: 'collapse' }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  verticalAlign: 'middle',
                                  paddingRight: '8px',
                                  lineHeight: 0,
                                }}
                              >
                                <Img
                                  src={PHONE_ICON_URL}
                                  alt=""
                                  width="18"
                                  height="18"
                                  style={{ display: 'block', width: '18px', height: '18px' }}
                                />
                              </td>
                              <td style={{ ...advisorButtonLabel, verticalAlign: 'middle' }}>
                                Call Holiday Advisor
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </td>
                    <td className="bk-advisor-btn" style={{ verticalAlign: 'middle' }}>
                      <a href={WHATSAPP_HREF} style={{ ...advisorWhatsappButton }} target="_blank">
                        <table
                          role="presentation"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ margin: '0 auto', borderCollapse: 'collapse' }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  verticalAlign: 'middle',
                                  paddingRight: '8px',
                                  lineHeight: 0,
                                }}
                              >
                                <Img
                                  src={WHATSAPP_ICON_URL}
                                  alt=""
                                  width="18"
                                  height="18"
                                  style={{ display: 'block', width: '18px', height: '18px' }}
                                />
                              </td>
                              <td style={{ ...advisorButtonLabel, verticalAlign: 'middle' }}>
                                Chat on Whatsapp
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>
          </Section>

          <Section className="main-content-section" style={{ padding: '8px 24px 20px 24px' }}>
            <Section style={{ backgroundColor: soft, borderRadius: '16px', padding: '20px 18px' }}>
              <Text
                style={{
                  margin: '0 0 16px 0',
                  fontFamily: bodyFontFamily,
                  fontSize: '15px',
                  lineHeight: '24px',
                  color: '#4B5563',
                  textAlign: 'left',
                }}
              >
                If you have any concerns and need assistance, we would want to hear it first-hand.
                Write directly to us and we will make sure that it gets resolved at the earliest.
              </Text>
              <a
                href={CONTACT_HREF}
                style={{ ...advisorCallButton, display: 'inline-block', width: 'auto' }}
                target="_blank"
              >
                <table
                  role="presentation"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ borderCollapse: 'collapse' }}
                >
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle', paddingRight: '8px', lineHeight: 0  }}>
                        <Img
                          src={MAIL_ICON_URL}
                          alt=""
                          width="18"
                          height="18"
                          style={{ display: 'block', width: '18px', height: '18px' }}
                        />
                      </td>
                      <td style={{ ...advisorButtonLabel, verticalAlign: 'middle' }}>
                        Connect with us
                      </td>
                    </tr>
                  </tbody>
                </table>
              </a>
            </Section>
          </Section>

          <Section style={{ height: '8px' }} />
        </Container>

        <Section style={{ maxWidth: '640px', margin: '0 auto', padding: '8px 24px 36px 24px' }}>
          <Row>
            <Column
              style={{
                width: '50%',
                textAlign: 'right',
                verticalAlign: 'middle',
                paddingRight: '16px',
              }}
            >
              <table
                role="presentation"
                cellPadding="0"
                cellSpacing="0"
                align="right"
                style={{ borderCollapse: 'collapse', marginLeft: 'auto' }}
              >
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: 'middle', paddingRight: '10px', lineHeight: 0 }}>
                      <Img
                        src={GOOGLE_LOGO_URL}
                        alt="Google"
                        width="28"
                        height="28"
                        style={{ display: 'block', width: '28px', height: '28px' }}
                      />
                    </td>
                    <td style={{ verticalAlign: 'middle', textAlign: 'left' }}>
                      <table
                        role="presentation"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ borderCollapse: 'collapse' }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                verticalAlign: 'middle',
                                fontFamily: bodyFontFamily,
                                fontSize: '18px',
                                fontWeight: 700,
                                lineHeight: '22px',
                                color: ink,
                                paddingRight: '6px',
                              }}
                            >
                              4.8
                            </td>
                            <td style={{ verticalAlign: 'middle', lineHeight: 0 }}>
                              {[STAR_FULL_URL, STAR_FULL_URL, STAR_FULL_URL, STAR_FULL_URL, STAR_HALF_URL].map(
                                (src, i) => (
                                  <Img
                                    key={`star-${i}`}
                                    src={src}
                                    alt=""
                                    width="14"
                                    height="14"
                                    style={{
                                      display: 'inline-block',
                                      width: '14px',
                                      height: '14px',
                                      verticalAlign: 'middle',
                                      marginLeft: i === 0 ? '0' : '1px',
                                    }}
                                  />
                                )
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              style={{
                                fontFamily: headingFontFamily,
                                fontSize: '8px',
                                lineHeight: '8px',
                                color: muted,
                                paddingTop: '2px',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              1,271 reviews on Google
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Column>
            <Column
              style={{
                width: '50%',
                textAlign: 'left',
                verticalAlign: 'middle',
                paddingLeft: '16px',
              }}
            >
              
              <Img
                src={VISA_PROTECT_URL}
                width="40"
                height="40"
                alt="Visa Protection"
                style={{width: 'auto', height: 'auto', color: '#000000' }}
              />              
            </Column>
          </Row>
          <Section
            style={{ borderTop: `1px solid ${line}`, marginTop: '18px', paddingTop: '18px' }}
          >
            <Text
              style={{
                margin: '0',
                fontFamily: bodyFontFamily,
                fontSize: '13px',
                lineHeight: '20px',
                color: '#4B5563',
                textAlign: 'center',
              }}
            >
              Holiday Tribe Private Limited. All rights reserved © 2026
            </Text>
            <Text style={{ margin: '14px 0 0 0', textAlign: 'center', lineHeight: 0 }}>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href} target="_blank"
                  style={{
                    display: 'inline-block',
                    margin: '0 12px',
                    lineHeight: 0,
                    textDecoration: 'none',
                    verticalAlign: 'middle',
                  }}
                >
                  <Img
                    src={social.src}
                    alt={social.name}
                    width="24"
                    height="24"
                    style={{ display: 'block', width: '24px', height: '24px' }}
                  />
                </a>
              ))}
            </Text>
          </Section>
        </Section>
      </Body>
    </Html>
  );
};

export default BookingConfirmationEmail;
