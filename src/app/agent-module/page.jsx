'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import imageconfig from '../../../imageconfig';
// import { checkUserLoggedIn } from '../authApi/Apiservice';

export default function AgentLanding() {
  // const { imageBaseURL, absoluteUrl } = imageconfig;
  const [logStatus, setLogStatus] = useState(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const statsRef = useRef(null);
  const statsTriggered = useRef(false);

  useEffect(() => {
    document.body.classList.remove('loginbanner', 'apipage', 'tradepagebg');
    AOS.init({ once: true, duration: 900 });
  }, []);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const loggedInUser = await checkUserLoggedIn();
        setLogStatus(!!loggedInUser);
      } catch {
        setLogStatus(false);
      }
    };
    verifyUser();
  }, []);

  // Animated counter
  const animateCount = (target, setter, duration = 1800) => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setter(target); clearInterval(timer); }
      else setter(Math.floor(start));
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsTriggered.current) {
        statsTriggered.current = true;
        animateCount(5000, setCount1);
        animateCount(2400000, setCount2);
        animateCount(30, setCount3);
        animateCount(18, setCount4);
      }
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const agentSteps = [
    {
      num: '01',
      img: '/assets/images/become-an-agent.png',
      title: 'Become an Agent',
      desc: 'Register & get verified. No deposit required. Start building your agent network immediately.',
    },
    {
      num: '02',
      img: '/assets/images/reqruit-sub-agent.png',
      title: 'Recruit Sub-Agents',
      desc: 'Onboard sub-agents under your network. Each sub-agent you add multiplies your passive income.',
    },
    {
      num: '03',
      img: '/assets/images/sub-agent-eran.png',
      title: 'Sub-Agents Earn',
      desc: 'Your sub-agents refer users, run campaigns, and earn commissions across the platform.',
    },
    {
      num: '04',
      img: '/assets/images/you-earn-5.png',
      title: 'You Earn 5% Passively',
      desc: 'Automatically earn 5% of every commission your sub-agents generate — forever, no limits.',
    },
  ];

  const benefits = [
    { img: '/assets/images/unlimited-sub-agent.png', title: 'Unlimited Sub-Agents', desc: 'Build an unlimited network. Every agent you recruit compounds your passive income stream.' },
    { img: '/assets/images/instant-commission.png', title: 'Instant Commission', desc: 'Earnings hit your wallet the moment your sub-agents convert. Real-time, zero delays.' },
    { img: '/assets/images/smart-contract-secured.png', title: 'Smart Contract Secured', desc: 'All commissions are enforced on-chain. No disputes, no delays, fully transparent.' },
    { img: '/assets/images/passive-forever.png', title: 'Passive Forever', desc: 'Once recruited, sub-agents earn you income perpetually — even while you sleep.' },
    { img: '/assets/images/global-network.png', title: 'Global Network', desc: 'Operate anywhere. Your network crosses borders, your commissions don\'t.' },
    { img: '/assets/images/full-dashboard.png', title: 'Full Dashboard', desc: 'Track every sub-agent, their earnings, your cut — live in a premium analytics dashboard.' },
  ];

  const tiers = [
    { level: 'You', color: '#10b981', bg: 'rgba(16,185,129,0.12)', size: 90, agents: null },
    { level: 'Tier 1 – Sub-Agents', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', size: 70, agents: 5, earn: '5%' },
    { level: 'Tier 2 – Their Refs', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', size: 55, agents: 25, earn: 'Bonus' },
  ];

  return (
    <div className="agent-landing-page">
      <Homeheader />

      {/* ─── HERO ─── */}
      <section className="agent-hero-section">
        <div className="agent-hero-bg-orbs">
          <div className="agent-orb agent-orb-1" />
          <div className="agent-orb agent-orb-2" />
          <div className="agent-orb agent-orb-3" />
        </div>
        <Container className="sitebannercontent">
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12}>
              <div data-aos="fade-right">
                <div className="agent-hero-badge">
                  <span className="agent-badge-dot" />
                  Agent Program · Passive Income
                </div>
                <h1 className="agent-hero-h1">
                  Build Your Agent<br />
                  Empire & Earn<br />
                  <span className="agent-gradient-text">5% Forever</span>
                </h1>
                <p className="agent-hero-sub">
                  Recruit sub-agents, let them earn — you collect 5% of every
                  commission they generate. No limits. No expiry. Pure passive income.
                </p>
                <div className="agent-hero-ctas">
                  <a
                    className="agent-btn-primary"
                  // href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
                  >
                    Become an Agent →
                  </a>
                  <a className="agent-btn-secondary" href="#how-it-works">
                    See How It Works
                  </a>
                </div>
                <div className="agent-hero-pills">
                  <span className="agent-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Free to Join
                  </span>
                  <span className="agent-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    No Deposit
                  </span>
                  <span className="agent-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Instant Payouts
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center">
              <div className="agent-network-visual" data-aos="fade-left" data-aos-delay="200">
                {/* Animated network diagram */}
                <div className="agent-network-diagram">
                  <Image className='badge-img' src="assets/images/header-imag.png" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── STATS ─── */}
      <div className="agent-stats-bar" ref={statsRef}>
        <Container className="sitebannercontent">
          <div className="agent-stats-grid">
            <div className="agent-stat-item" data-aos="fade-up" data-aos-delay="0">
              <div className="agent-stat-val">{count1.toLocaleString()}+</div>
              <div className="agent-stat-lbl">Active Agents</div>
            </div>
            <div className="agent-stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="agent-stat-val">${(count2 / 1000000).toFixed(1)}M</div>
              <div className="agent-stat-lbl">Commissions Paid</div>
            </div>
            <div className="agent-stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="agent-stat-val">{count3}%</div>
              <div className="agent-stat-lbl">Average Growth/Month</div>
            </div>
            <div className="agent-stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="agent-stat-val">{count4}%</div>
              <div className="agent-stat-lbl">APY on Staked RXT</div>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── HOW IT WORKS ─── */}
      <section className="agent-flow-section" id="how-it-works">
        <Container className="sitebannercontent">
          <div className="agent-section-header" data-aos="fade-up">
            <div className="agent-section-tag">Agent Flow</div>
            <h2 className="agent-section-h2">
              How the <span className="agent-gradient-text">Agent Program</span> Works
            </h2>
            <p className="agent-section-sub">
              Four simple steps from signing up to earning passive income forever.
            </p>
          </div>

          <div className="agent-flow-steps">
            {agentSteps.map((step, i) => (
              <div
                key={i}
                className="agent-flow-step"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="agent-flow-step-num">{step.num}</div>

                <div className="agent-flow-step-icon">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="agent-step-image"
                  />
                </div>

                <div className="agent-flow-step-title">{step.title}</div>
                <div className="agent-flow-step-desc">{step.desc}</div>

                {i < agentSteps.length - 1 && (
                  <div className="agent-flow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── TIER VISUAL ─── */}
      <section className="agent-tier-section">
        <Container className="sitebannercontent">
          <Row className="align-items-center gy-5">
            <Col lg={6} md={12} data-aos="fade-right">
              <div className="agent-section-tag">Network Structure</div>
              <h2 className="agent-section-h2">
                Your <span className="agent-gradient-text">Network = Your Income</span>
              </h2>
              <p className="agent-section-sub">
                Every sub-agent you recruit generates income for you — automatically,
                in real-time, on every commission they earn.
              </p>
              <div className="agent-tier-cards">
                <div className="agent-tier-card tier-you">
                  <div className="agent-tier-badge">YOU — Lead Agent</div>
                  <div className="agent-tier-earn">Earn 5% of all sub-agent commissions</div>
                </div>
                <div className="agent-tier-card tier-sub">
                  <div className="agent-tier-badge">Sub-Agents</div>
                  <div className="agent-tier-earn">Earn commissions from referrals & campaigns</div>
                </div>
                <div className="agent-tier-card tier-refs">
                  <div className="agent-tier-badge">Their Users</div>
                  <div className="agent-tier-earn">Trade, invest, predict — generate volume</div>
                </div>
              </div>
              <a
                className="agent-btn-primary mt-4 d-inline-block"
              // href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
              >
                {logStatus ? 'View My Agents →' : 'Start Building Now →'}
              </a>
            </Col>
            <Col lg={6} md={12} data-aos="fade-left" data-aos-delay="150">
              <div className="agent-pyramid-visual">
                <div className="agent-pyramid-you">
                  <Image className='badge-img' src="assets/images/network-structure.png" />
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="agent-benefits-section">
        <Container className="sitebannercontent">
          <div className="agent-section-header" data-aos="fade-up">
            <div className="agent-section-tag">Benefits</div>
            <h2 className="agent-section-h2">
              Why Agents <span className="agent-gradient-text">Love This Program</span>
            </h2>
          </div>
          <div className="agent-benefits-grid">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="agent-benefit-card"
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <div className="agent-benefit-icon">
                  <Image
                    src={b.img}
                    alt={b.title}
                    width={60}
                    height={60}
                    className="benefit-image"
                  />
                </div>

                <div className="agent-benefit-title">{b.title}</div>
                <div className="agent-benefit-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── INCOME CALCULATOR MOCK ─── */}
      <section className="agent-calc-section">
        <Container className="sitebannercontent">
          <Row className="align-items-center gy-5">
            <Col lg={6} md={12} data-aos="fade-up">
              <div className="agent-section-tag">Earnings Preview</div>
              <h2 className="agent-section-h2">
                What You Could <span className="agent-gradient-text">Earn Monthly</span>
              </h2>
              <p className="agent-section-sub">
                Based on real agent data. The more sub-agents you recruit, the higher
                your passive income compounds.
              </p>
              <div className="agent-earn-scenarios">
                <div className="agent-earn-row">
                  <div className="agent-earn-scenario-label">5 Sub-Agents</div>
                  <div className="agent-earn-bar-wrap">
                    <div className="agent-earn-bar" style={{ width: '25%' }} />
                  </div>
                  <div className="agent-earn-scenario-val">~$120/mo</div>
                </div>
                <div className="agent-earn-row">
                  <div className="agent-earn-scenario-label">20 Sub-Agents</div>
                  <div className="agent-earn-bar-wrap">
                    <div className="agent-earn-bar" style={{ width: '55%' }} />
                  </div>
                  <div className="agent-earn-scenario-val">~$580/mo</div>
                </div>
                <div className="agent-earn-row">
                  <div className="agent-earn-scenario-label">50 Sub-Agents</div>
                  <div className="agent-earn-bar-wrap">
                    <div className="agent-earn-bar" style={{ width: '80%' }} />
                  </div>
                  <div className="agent-earn-scenario-val">~$1,800/mo</div>
                </div>
                <div className="agent-earn-row highlight-row">
                  <div className="agent-earn-scenario-label">100+ Sub-Agents</div>
                  <div className="agent-earn-bar-wrap">
                    <div className="agent-earn-bar full-bar" style={{ width: '100%' }} />
                  </div>
                  <div className="agent-earn-scenario-val">~$4,500+/mo</div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} data-aos="fade-left" data-aos-delay="200">
              <div className="agent-earnings-card">
                <div className="agent-ec-header">
                  <span className="agent-ec-live-dot" />
                  Live Agent Earnings
                </div>
                <div className="agent-ec-total">
                  <div className="agent-ec-big">$3,840</div>
                  <div className="agent-ec-dec">.20</div>
                </div>
                <div className="agent-ec-up">▲ +$240 this week · 12 sub-agents active</div>
                <div className="agent-ec-rows">
                  <div className="agent-ec-row">
                    <span>Sub-Agent Volume</span>
                    <span className="agent-ec-green">$48,000</span>
                  </div>
                  <div className="agent-ec-row">
                    <span>Your 5% Cut</span>
                    <span className="agent-ec-green">$2,400</span>
                  </div>
                  <div className="agent-ec-row">
                    <span>RXT Bonuses</span>
                    <span className="agent-ec-blue">+1,200 RXT</span>
                  </div>
                  <div className="agent-ec-row highlight">
                    <span>Available to Withdraw</span>
                    <span className="agent-ec-green">$3,840</span>
                  </div>
                </div>
                <a
                  className="agent-ec-cta"
                // href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
                >
                  {logStatus ? 'My Agents Dashboard →' : 'Join & Start Earning →'}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="agent-cta-section" data-aos="fade-up">
        <Container className="sitebannercontent">
          <div className="agent-cta-inner">
            <div className="agent-cta-orb" />
            <div className="agent-cta-content">
              <div className="agent-cta-tag">Get Started</div>
              <h2 className="agent-cta-h2">
                Ready to Build Your<br />
                <span className="agent-gradient-text">Passive Income Empire?</span>
              </h2>
              <p className="agent-cta-sub">
                Join 5,000+ agents earning passively. No deposit. No cap. Start free today.
              </p>
              <div className="agent-cta-btns">
                <a
                  className="agent-btn-primary"
                // href={`${absoluteUrl}/${logStatus ? 'dashboard' : 'signup'}`}
                >
                  {logStatus ? 'Go to Agents Dashboard →' : 'Become an Agent — Free →'}
                </a>
                <a className="agent-btn-secondary"
                //  href={`${absoluteUrl}/platform-details`}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Homefooter />
    </div>
  );
}
