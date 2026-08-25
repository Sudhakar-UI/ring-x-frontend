'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
// import imageconfig from '../../../imageconfig';
// import { checkUserLoggedIn } from '../authApi/Apiservice';

const platformModules = [
  {
    key: 'monetize',
    title: 'Monetize & Earn',
    eyebrow: 'Affiliate engine',
    icon: 'two-monetize-earn.svg',
    hero: 'why-affiliates.svg',
    color: '#2AAF55',
    gradient: 'linear-gradient(135deg, #EAFBF0 0%, #F8FFFB 100%)',
    summary: 'Convert referrals, campaign traffic and partner activity into recurring commission income.',
    details:
      'Promoters can share campaigns, track conversions, earn tier-wise rewards and keep building income from their downline activity. The flow keeps signup, KYC, deposit and purchase rewards visible in one place.',
    stats: ['30% Tier 1', '10% Tier 2', '5% Tier 3'],
    steps: ['Share campaign links', 'Track clicks and leads', 'Withdraw earned commission'],
  },
  {
    key: 'p2p',
    title: 'P2P Trading',
    eyebrow: 'Fast exchange',
    icon: 'two-p2p-trading.svg',
    hero: 'mo-p2p-trade.svg',
    color: '#237BAB',
    gradient: 'linear-gradient(135deg, #EAF4FF 0%, #F8FCFF 100%)',
    summary: 'Buy and sell crypto directly with verified merchants using clear order and payment tracking.',
    details:
      'Users can place buy or sell orders, chat with merchants, confirm payment and follow the trade status from open order to completed settlement without platform fees.',
    stats: ['0% Fees', '24 Merchants', 'Instant Orders'],
    steps: ['Choose buy or sell', 'Confirm payment proof', 'Release crypto after verification'],
  },
  {
    key: 'prediction',
    title: 'Prediction Markets',
    eyebrow: 'YES / NO markets',
    icon: 'two-prediction-markets.svg',
    hero: 'prediction-market-image.svg',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #F1ECFF 0%, #FCFAFF 100%)',
    summary: 'Trade outcomes on crypto, sports, public events and politics with simple market choices.',
    details:
      'Each market is shown with outcome odds, volume, closing time and possible payout so users can decide quickly. Winning trades move to wallet balance after result settlement.',
    stats: ['68% Win Rate', '4 Categories', 'Live Payouts'],
    steps: ['Select a market', 'Pick YES or NO', 'Claim payout after result'],
  },
  {
    key: 'rwa',
    title: 'RWA Investment',
    eyebrow: 'Real asset access',
    icon: 'two-rwa-investment.svg',
    hero: 'rwa-solar-farm.svg',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #FFF7E3 0%, #FFFDFC 100%)',
    summary: 'Invest in tokenised solar, real estate and agri projects with monthly return visibility.',
    details:
      'Project cards explain funding target, ROI, lock period and payout schedule. Users can start small, monitor funding progress and track returns from their investor dashboard.',
    stats: ['From $25', '11-18% ROI', 'Monthly Payouts'],
    steps: ['Review project terms', 'Invest from wallet', 'Track monthly returns'],
  },
  {
    key: 'agent',
    title: 'Agent Program',
    eyebrow: 'Network growth',
    icon: 'two-agent-program.svg',
    hero: 'agentimg.svg',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #EAF8FF 0%, #FAFEFF 100%)',
    summary: 'Recruit sub-agents, support their growth and earn passive commission from their activity.',
    details:
      'Agents get a structured view of recruited users, sub-agent volume, payment requests and commission history. It is built for people who want to grow a local or online earning network.',
    stats: ['5% Sub Volume', 'Agent Wallet', 'Team Tracking'],
    steps: ['Invite sub-agents', 'Monitor their volume', 'Receive passive rewards'],
  },
  {
    key: 'rxt',
    title: 'RXT Token',
    eyebrow: 'Platform token',
    icon: 'two-rxt-token.svg',
    hero: 'tokensale.svg',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #FFF0F0 0%, #FFFCFC 100%)',
    summary: 'Earn RXT through daily actions, referrals, deposits and platform usage, then stake for APY.',
    details:
      'RXT connects the ecosystem rewards layer. Users can collect free daily tokens, unlock tier benefits, stake balances and use token rewards as a reason to stay active.',
    stats: ['18% APY', 'Daily Bonus', 'Tier Unlocks'],
    steps: ['Collect daily RXT', 'Earn from platform actions', 'Stake for APY rewards'],
  },
];

const startGuideSteps = [
  {
    step: '01',
    title: 'Sign Up Free',
    icon: 'z-sign-up-free.svg',
    time: '60 seconds',
    copy:
      'Create your account, get your referral identity and claim the first RXT reward without deposit or card setup.',
  },
  {
    step: '02',
    title: 'Complete KYC',
    icon: 'z-complete-kyc.svg',
    time: '+100 RXT',
    copy:
      'Verify identity once to unlock P2P trading, withdrawals, RWA access, agent tools and bonus rewards.',
  },
  {
    step: '03',
    title: 'Start Earning',
    icon: 'z-start-earning.svg',
    time: 'Multi module',
    copy:
      'Choose your path: referrals, affiliate campaigns, P2P trades, prediction markets, investments or daily RXT collection.',
  },
  {
    step: '04',
    title: 'Withdraw & Scale',
    icon: 'z-withdraw-scale.svg',
    time: 'Any time',
    copy:
      'Move earnings to wallet, withdraw when ready and grow your network with repeatable campaign and agent workflows.',
  },
];

export default function PlatformDetails() {
  const [activeKey, setActiveKey] = useState(platformModules[0].key);
  // const { imageBaseURL, absoluteUrl } = imageconfig;

  useEffect(() => {
    document.body.classList.remove('loginbanner', 'apipage', 'tradepagebg', 'userpanelpage');
    AOS.init({ once: true });
  }, []);

  const activeModule = useMemo(
    () => platformModules.find((item) => item.key === activeKey) || platformModules[0],
    [activeKey]
  );

  const [logStatus, setLogStatus] = useState(null);

  useEffect(() => {

    if (typeof window === "undefined") return;
    const verifyUser = async () => {
      try {
        const loggedInUser = await checkUserLoggedIn();
        setLogStatus(!!loggedInUser);
      } catch (error) {
        console.error("User check failed:", error);
        setLogStatus(false);
      }
    };

    verifyUser();

  }, []);

  return (
    <>
      <Homeheader />
      <main className="platform-details-page">
        <section className="platform-detail-hero">
          <Container className="sitebannercontent">
            <div className="platform-detail-grid">
              <div data-aos="fade-up" data-aos-duration="800">
                <div className="section-tag">Platform Details</div>
                <h1 className="platform-detail-title">
                  Six income modules, <span>one connected flow</span>
                </h1>
                <p className="platform-detail-sub">
                  Tap each module to see how RingX connects earning, trading, investing,
                  agent growth and RXT rewards inside one user journey.
                </p>
                <div className="platform-detail-actions">
                  <a className="btn-hero-primary"
                  //  href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
                  >Get Started &rarr;</a>
                  <a className="btn-hero-secondary"
                  // href={`${absoluteUrl}/#ecosystem`}
                  >Back to Overview</a>
                </div>
              </div>

              <div className="platform-orbit" data-aos="zoom-in" data-aos-duration="900">
                <Image className='badge-img' src="assets/images/header-bg-plat.png" />

              </div>
            </div>
          </Container>
        </section>

        <section className="platform-tabs-section">
          <Container className="sitebannercontent">
            <div className="platform-tabs-shell" data-aos="fade-up" data-aos-duration="800">
              <div className="platform-tabs-menu" role="tablist" aria-label="Platform modules">
                {platformModules.map((item) => (
                  <button
                    type="button"
                    key={item.key}
                    className={`platform-tab-btn ${activeKey === item.key ? 'active' : ''}`}
                    style={{ '--module-color': item.color }}
                    onClick={() => setActiveKey(item.key)}
                    role="tab"
                    aria-selected={activeKey === item.key}
                  >
                    {/* <Image src={`${imageBaseURL}assets/images/${item.icon}`} width={34} height={34} alt="" /> */}
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              <div
                className="platform-tab-panel"
                style={{ '--module-color': activeModule.color, background: activeModule.gradient }}
                role="tabpanel"
              >
                <div className="platform-panel-content">
                  <div className="platform-panel-eyebrow">{activeModule.eyebrow}</div>
                  <h2>{activeModule.title}</h2>
                  <p className="platform-panel-summary">{activeModule.summary}</p>
                  <p className="platform-panel-details">{activeModule.details}</p>

                  <div className="platform-panel-stats">
                    {activeModule.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>

                  <div className="platform-flow">
                    {activeModule.steps.map((step, index) => (
                      <div className="platform-flow-step" key={step}>
                        <strong>{String(index + 1).padStart(2, '0')}</strong>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="platform-panel-visual">
                  <div className="platform-visual-card">
                    <Image
                      // src={`${imageBaseURL}assets/images/${activeModule.hero}`}
                      src={`assets/images/plat-monetize-earn.png`}
                      width={360}
                      height={280}
                      alt={activeModule.title}
                      key={activeModule.key}
                      className="plat-monetize-earn"
                    />
                    <div className="platform-live-widget">
                      <span>Live Module</span>
                      <strong>{activeModule.stats[0]}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="start-guide" className="platform-start-guide">
          <Container className="sitebannercontent">
            <div className="section-header" data-aos="fade-up" data-aos-duration="800">
              <div className="section-tag">How It Works</div>
              <h2 className="section-h2">
                From signup to payout, <span className="green-home">clear step by step</span>
              </h2>
              <p className="section-sub">
                This is the full guide behind the home page flow: join, verify,
                pick an earning module, then withdraw or scale your network.
              </p>
            </div>

            <div className="start-guide-grid" data-aos="fade-up" data-aos-duration="900">
              {startGuideSteps.map((item) => (
                <div className="start-guide-card" key={item.step}>
                  <div className="start-guide-top">
                    <span>{item.step}</span>
                    <strong>{item.time}</strong>
                  </div>
                  <div className="start-guide-icon">
                    {/* <Image src={`${imageBaseURL}assets/images/${item.icon}`} width={56} height={56} alt="" /> */}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="start-guide-cta" data-aos="fade-up" data-aos-duration="900">
              <div>
                <strong>Ready to start?</strong>
                <span>Open an account, finish KYC and begin earning from the module that fits you best.</span>
              </div>
              <a className="btn-hero-primary"
              //  href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
              >Get Started &rarr;</a>
            </div>
          </Container>
        </section>
      </main>
      <Homefooter />
    </>
  );
}
