import { Body, Column, Container, Head, Html, Img, Row, Section, Text } from '@react-email/components';

const headingFontFamily =
	"'Geist Mono', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const bodyFontFamily =
	"'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const LOGO_URL = 'https://cdn.holidaytribe.ai/website/icons/holiday-tribe-icon.png';
const BULB_ICON_URL =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .9 1.7h5.4c.1-.7.4-1.3.9-1.7A6 6 0 0 0 12 3z"/></svg>',
	);
const HERO_ILLUSTRATION_URL =
	'https://cdn.holidaytribe.ai/email-template/images/booking-confirmed-hero.png';
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
const whatsappGreen = '#00FF9D';
const ADVISOR_PHOTO =
	'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop';
const CALL_HREF = 'tel:+919319998495';
const WHATSAPP_HREF = 'https://wa.me/919319998495';
const CONTACT_HREF = 'https://holidaytribe.ai';
const SOCIALS = [
	{ name: 'Facebook', href: 'https://www.facebook.com/holidaytribe', mark: 'f' },
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/holidaytribeworld/',
		mark: '◎',
	},
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/holidaytribe/', mark: 'in' },
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

const outlineButton = {
	display: 'block',
	backgroundColor: '#ffffff',
	border: '1px solid #111111',
	borderRadius: '999px',
	padding: '10px 14px',
	fontFamily: bodyFontFamily,
	fontSize: '14px',
	fontWeight: 600,
	lineHeight: '20px',
	color: ink,
	textAlign: 'center' as const,
	textDecoration: 'none',
};

const whatsappButton = {
	...outlineButton,
	backgroundColor: whatsappGreen,
	border: 'none',
	color: '#000000',
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
							<Img
								src={LOGO_URL}
								width="36"
								alt="Holiday Tribe"
								style={{ display: 'block', width: '36px', height: 'auto' }}
							/>
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
									maxWidth: '180px',
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
									margin: '0 0 10px 0',
									fontFamily: headingFontFamily,
									fontSize: '24px',
									fontWeight: 700,
									lineHeight: '32px',
									color: '#ffffff',
									textAlign: 'left',
								}}
							>
								Aastha, your Japan holiday is confirmed !
							</Text>
							<Text
								style={{
									margin: '0',
									fontFamily: bodyFontFamily,
									fontSize: '13px',
									lineHeight: '20px',
									color: mutedOnDark,
									textAlign: 'left',
								}}
							>
								We&apos;ve received your payment of ₹20,000. Your hotels, activities and
								prices are now locked in. This email is your official booking confirmation,
								so keep it handy.
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
						<Column style={{ verticalAlign: 'middle', width: '44%', textAlign: 'center', padding: '0 6px' }}>
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
							<Column style={{ verticalAlign: 'middle', paddingLeft: '16px', whiteSpace: 'nowrap' }}>
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
							<Column style={{ width: '80px', fontSize: '1px', lineHeight: '1px' }}>&nbsp;</Column>
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
							<Column style={{ width: '80px', fontSize: '1px', lineHeight: '1px' }}>&nbsp;</Column>
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
						href="https://holidaytribe.ai"
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
					<a href="https://holidaytribe.ai" style={payButton}>
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
					<Row style={{ marginTop: '14px' }}>
						<Column className="bk-advisor-btn" style={{ width: '48%', paddingRight: '8px' }}>
							<a href={CALL_HREF} style={outlineButton}>
								☎ Call Holiday Advisor
							</a>
						</Column>
						<Column className="bk-advisor-btn" style={{ width: '52%' }}>
							<a href={WHATSAPP_HREF} style={whatsappButton}>
								Chat on Whatsapp
							</a>
						</Column>
					</Row>
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
					<a href={CONTACT_HREF} style={{ ...outlineButton, display: 'inline-block', width: 'auto' }}>
						✉ Connect with us
					</a>
				</Section>
			</Section>

			<Section style={{ height: '8px' }} />
				</Container>

				<Section style={{ maxWidth: '640px', margin: '0 auto', padding: '8px 24px 36px 24px' }}>
					<Row>
						<Column style={{ width: '50%', textAlign: 'right', verticalAlign: 'middle', paddingRight: '16px' }}>
							<Text
								style={{
									margin: '0',
									fontFamily: bodyFontFamily,
									fontSize: '14px',
									fontWeight: 700,
									lineHeight: '18px',
									color: ink,
									textAlign: 'right',
								}}
							>
								<span style={{ color: '#4285F4' }}>G</span> 4.8{' '}
								<span style={{ color: '#F5B400' }}>★★★★★</span>
							</Text>
							<Text
								style={{
									margin: '2px 0 0 0',
									fontFamily: bodyFontFamily,
									fontSize: '11px',
									lineHeight: '14px',
									color: faint,
									textAlign: 'right',
								}}
							>
								1,271 reviews on Google
							</Text>
						</Column>
						<Column style={{ width: '50%', textAlign: 'left', verticalAlign: 'middle', paddingLeft: '16px' }}>
							<Text
								style={{
									margin: '0',
									fontFamily: headingFontFamily,
									fontSize: '16px',
									fontWeight: 700,
									lineHeight: '20px',
									color: ink,
									textAlign: 'left',
								}}
							>
								Visa Protect
							</Text>
						</Column>
					</Row>
					<Section style={{ borderTop: `1px solid ${line}`, marginTop: '18px', paddingTop: '18px' }}>
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
						<Text style={{ margin: '14px 0 0 0', textAlign: 'center' }}>
							{SOCIALS.map((social) => (
								<a
									key={social.name}
									href={social.href}
									style={{
										display: 'inline-block',
										margin: '0 12px',
										fontFamily: bodyFontFamily,
										fontSize: '18px',
										fontWeight: 700,
										lineHeight: '24px',
										color: ink,
										textDecoration: 'none',
									}}
								>
									{social.mark}
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
