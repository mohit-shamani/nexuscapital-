// Each post carries a `content` array. A string is a paragraph; an object
// { h: '…' } is a sub-heading. Rendered by src/pages/InsightPost.jsx.
export const insights = [
  {
    id: 'institutional-crypto-asset-management',
    related: [
      'institutional-allocation-2026',
      'custody-foundation-of-trust',
      'regulatory-perimeter-2026',
    ],
    category: 'Institutional Guide',
    title: 'What Is Institutional Crypto Asset Management? (Complete Guide)',
    excerpt:
      'A complete guide to institutional crypto asset management — how family offices, HNWIs and institutions custody, build and manage digital asset portfolios.',
    definition: {
      term: 'institutional crypto asset management',
      question: 'What is institutional crypto asset management?',
      text: 'Institutional crypto asset management is the professional management of digital assets on behalf of institutions, family offices and high-net-worth investors. It applies the same portfolio construction, risk management, compliance and custody disciplines used across traditional asset classes to cryptocurrencies — treating them as a governed, risk-budgeted allocation held through institutional-grade custody and reported transparently, rather than as a speculative trade reacting to price.',
    },
    date: '2026-07-13',
    readingTime: '15 min',
    author: 'The Investment Committee',
    content: [
      {
        p: [
          'For institutional allocators, the question about digital assets is no longer whether the asset class merits attention, but how it should be owned, controlled and governed. Over the past decade the participants have changed: what began as a retail phenomenon is now the subject of ',
          {
            href: 'https://www.fidelitydigitalassets.com/research-and-insights',
            text: 'dedicated institutional research desks',
          },
          ', regulated custody, and formal allocation policy at family offices, endowments and corporate treasuries.',
        ],
      },
      'This guide sets out what institutional crypto asset management is, how it works in practice, and why it differs — structurally, not cosmetically — from the way individuals typically buy and hold cryptocurrency. It is written for allocators who already understand portfolio theory, fiduciary duty and operational risk, and who want to understand how those disciplines translate to a newer and more volatile asset class.',
      { h: 'What Is Institutional Crypto Asset Management?' },
      'Institutional crypto asset management is the professional, discretionary or advisory management of digital assets on behalf of qualified investors — institutions, family offices and high-net-worth individuals — under a defined mandate. It brings the full apparatus of traditional asset management to cryptocurrencies and tokenised instruments: an investment policy, a portfolio construction process, an independent risk framework, institutional-grade custody, compliance controls and transparent reporting.',
      'The distinction matters. Buying a cryptocurrency and holding it in a personal wallet is a transaction. Institutional crypto asset management is a governed process in which the transaction is only the final, and least important, step. Before any capital is committed, the mandate defines the role the allocation plays in the wider portfolio, the risk it is permitted to contribute, the assets and vehicles that are eligible, the custody arrangements that will hold it, and the reporting that will evidence how it is being managed.',
      {
        p: [
          'In practice, the discipline rests on four pillars: ',
          { to: '/insights/institutional-allocation-2026', text: 'strategic allocation' },
          ' (why and how much), portfolio construction (in what form), risk management (within what tolerances) and custody (held how, and controlled by whom). The remainder of this guide examines each in turn.',
        ],
      },
      { h: 'Why Institutional Investors Are Entering Digital Assets' },
      'Institutional interest in digital assets is driven by portfolio considerations rather than enthusiasm for the technology itself. Allocators are evaluating the asset class for the same reasons they evaluate any candidate allocation: its potential return characteristics, its correlation with existing holdings, its liquidity, and the maturity of the infrastructure required to hold it safely.',
      'Several structural developments have lowered the barriers that once kept serious capital on the sidelines. Regulated custodians now hold digital assets to institutional standards. Regulated market access — including exchange-traded products in several jurisdictions — allows exposure without direct key management. Accounting guidance and audit practices have matured. And a body of independent research has developed the language allocators need to size and justify a position.',
      { h3: 'The most commonly cited rationales' },
      'When institutions articulate the case for an allocation, a consistent set of arguments recurs: a potential diversification benefit relative to traditional assets; the properties of a scarce, liquid, globally portable asset with no single counterparty; and a strategic desire to understand an asset class that a firm’s clients or beneficiaries increasingly ask about. None of these rationales requires a forecast of price. Each can be assessed on its merits and, crucially, sized so that being wrong is survivable.',
      {
        p: [
          'What unites credible institutional entrants is temperament. They approach digital assets as an allocation decision, not a trade — a distinction explored in depth in our note on the ',
          { to: '/insights/institutional-allocation-2026', text: 'institutional allocation to digital assets' },
          '.',
        ],
      },
      { h: 'How Institutional Crypto Asset Management Works' },
      'Institutional crypto asset management works as a governed lifecycle that runs from mandate to reporting, with independent controls at each stage. It is deliberately unglamorous: the value lies in the process, not in any single decision.',
      { h3: 'From mandate to reporting' },
      'The lifecycle typically proceeds as follows. First, an investment mandate and policy define objectives, constraints, eligible assets and risk limits. Second, a portfolio is constructed within those limits. Third, custody and operational infrastructure are established before any material capital moves. Fourth, positions are executed through vetted venues with best-execution and counterparty controls. Fifth, the portfolio is monitored, rebalanced on a rule and reviewed by an independent risk function. Finally, holdings and performance are reported transparently to the client on a defined cadence.',
      'Governance sits above the entire lifecycle. Segregation of duties ensures that the people who decide on a trade are not the people who settle it, and that neither can move assets alone. An investment committee owns the policy; an independent risk function owns the limits; and custody is structured so that no single individual can unilaterally transfer client assets. This separation of powers is the quiet difference between an institutional process and an individual one.',
      { h3: 'Execution and liquidity' },
      'Execution deserves particular attention because digital asset markets remain fragmented across many venues with varying depth, and prices can differ meaningfully between them. An institutional manager therefore treats execution as a controlled activity in its own right: routing orders across vetted venues, monitoring for slippage and market impact, and holding as little as possible on any single exchange at any time. Assets are swept to custody rather than left resting on a trading venue, so that a venue failure does not become a client loss. Liquidity is assessed not in ordinary conditions but in stressed ones — the relevant question is whether a position can be exited in a disorderly market, not a calm one.',
      { h: 'Portfolio Construction Process' },
      'Portfolio construction in digital assets is the process of translating a mandate into a specific, diversified set of positions sized by the risk each contributes rather than the capital each absorbs. The objective is a portfolio that expresses the intended exposure while remaining within its risk budget through a full market cycle.',
      { h3: 'Defining the objective and universe' },
      'Construction begins with the role the allocation is meant to play — diversification, long-horizon growth exposure, or a specific thematic position — and the eligible universe that role implies. A conservative mandate may confine itself to the largest, most liquid assets and regulated vehicles; a broader mandate may include a considered sleeve of network and infrastructure tokens, each admitted only after independent due diligence.',
      { h3: 'Risk budgeting and sizing' },
      'Because digital assets carry high standalone volatility, position sizing is governed by risk contribution, not headline weight. The manager asks how much risk the allocation should contribute to the total portfolio and sizes from there. In most institutional mandates this results in a low-single-digit percentage of total assets — enough to be meaningful, small enough that a severe drawdown does not threaten the broader portfolio. Sizing to survival, rather than to conviction, is the principle that keeps an allocation intact long enough to matter.',
      {
        p: [
          'Diversification is then applied across assets, sectors and access vehicles, and the portfolio is rebalanced on a rule rather than a reaction. We examine the mechanics of surviving volatility in our note on ',
          { to: '/insights/position-sizing-drawdown-control', text: 'position sizing and drawdown control' },
          '.',
        ],
      },
      { h: 'Risk Management Framework' },
      'A risk management framework for digital assets is the independent system of limits, monitoring and controls that keeps a portfolio within its mandate as market conditions change. In an institutional setting it is owned by a function separate from the one that makes investment decisions, so that limits cannot be quietly relaxed to accommodate a position.',
      'The framework addresses several distinct categories of risk. Market risk — the volatility and drawdown characteristic of the asset class — is managed through sizing, diversification and rebalancing rules. Liquidity risk is managed by favouring assets and venues that can be exited in stressed conditions without disproportionate impact. Counterparty risk is managed by diversifying and vetting exchanges, custodians and lending counterparties, and by minimising assets left on any single venue.',
      { h3: 'Risks specific to digital assets' },
      {
        p: [
          'Alongside familiar risks, the asset class introduces categories that traditional frameworks do not fully anticipate: smart-contract and protocol risk, on-chain settlement risk, and the operational risk of key management itself. Firms such as ',
          {
            href: 'https://www.chainalysis.com/blog/',
            text: 'blockchain analytics providers',
          },
          ' now supply the transaction-monitoring and compliance tooling that allows managers to screen counterparties and demonstrate the provenance of assets — a capability with no direct analogue in traditional markets. Each risk is identified, priced and, where possible, mitigated before capital is committed, on the principle that an unpriced risk is an uncontrolled one.',
        ],
      },
      { h: 'Secure Custody & Asset Protection' },
      'Custody is how digital assets are securely held and controlled on an investor’s behalf, and in this asset class it is the centre of the risk conversation rather than a back-office afterthought. Because blockchains remove the intermediaries that safeguard traditional assets, the question of who controls the private keys is inseparable from the question of who owns the asset.',
      { h3: 'Removing single points of failure' },
      'Institutional custody begins with a principle: no single person, device or location should be able to move client assets. Modern key management — whether multi-party computation (MPC) or multi-signature — distributes signing authority so that a transfer requires a quorum of independent approvals. A compromised device or a coerced individual is no longer sufficient to cause loss. Around that cryptographic core sits operational governance: segregation of duties, withdrawal allow-lists, time-locks on large transfers and independent reconciliation.',
      {
        p: [
          'Asset protection also extends to the arrangements around custody — the legal segregation of client assets, independent audits of controls, and, in some cases, insurance. We examine the mechanics of distributed key management in our note on ',
          { to: '/insights/mpc-multisig-custody', text: 'MPC and multi-signature custody' },
          ', and the broader philosophy in ',
          { to: '/insights/custody-foundation-of-trust', text: 'custody as the foundation of trust' },
          '.',
        ],
      },
      { h: 'Benefits of Institutional Crypto Asset Management' },
      'The central benefit of institutional crypto asset management is that it allows exposure to a new asset class without inheriting the operational and security failures that have characterised much of its history. It converts a fragile, self-directed activity into a governed, controlled and evidenced one.',
      'Specific benefits typically include: professional portfolio construction that sizes exposure to a defined risk budget; an independent risk function that enforces limits through volatility; institutional-grade custody that removes single points of failure; compliance and reporting infrastructure that satisfies auditors, boards and regulators; and access to research and due diligence that individual investors rarely have the resources to conduct. For a fiduciary, the ability to demonstrate a sound process — not merely a favourable outcome — is itself a material benefit.',
      'There is also an operational dividend that is easy to overlook. Managing digital assets directly imposes a permanent burden: securing private keys, monitoring counterparties, reconciling on-chain and off-chain records, and keeping pace with a fast-moving regulatory and technical landscape. Delegating that burden to a specialist with dedicated infrastructure frees an allocator to focus on the decisions that actually add value — the size and role of the allocation — while the operational machinery is run to an institutional standard. In an asset class where operational failure, rather than market movement, has historically caused the largest losses, that dividend is substantive rather than cosmetic.',
      'It is important to be precise about what institutional management does and does not offer. It does not remove volatility, guarantee returns, or eliminate risk; no responsible manager claims otherwise. What it offers is that the volatility is budgeted, the risk is controlled, and the assets are protected — so that the allocation can be held through a full cycle rather than abandoned at the point of maximum stress.',
      { h: 'Institutional vs Retail Crypto Investing' },
      'The difference between institutional and retail crypto investing is structural, not a matter of scale. Retail investing is typically a self-directed transaction: an individual buys an asset on an exchange, holds it in a personal or exchange wallet, and bears sole responsibility for security, timing and record-keeping. Institutional management is a governed process with independent controls, professional custody and defined accountability.',
      {
        p: [
          'The practical differences run across custody, risk, execution and governance:',
        ],
      },
      'On custody, retail investors typically rely on an exchange or a single personal wallet — a single point of failure — whereas institutions use qualified custodians with distributed key management. On risk, retail positions are often sized by conviction or capital available, whereas institutional positions are sized by risk contribution within enforced limits. On execution, retail trades on a single venue, whereas institutions diversify venues and apply best-execution and counterparty controls. On governance, a retail investor answers only to themselves, whereas an institutional manager operates under fiduciary duty, segregation of duties and independent oversight.',
      'The result is that two investors can hold the same asset and be running entirely different risks. The asset is identical; the way it is owned, controlled and governed is not.',
      { h: 'Common Challenges' },
      'Institutional crypto asset management is not without genuine challenges, and a credible manager is candid about them. Acknowledging these constraints is part of the discipline; pretending they do not exist is a warning sign.',
      { h3: 'Volatility and drawdown' },
      'Digital assets exhibit volatility and drawdowns well beyond those of most traditional asset classes. This is a parameter to be budgeted, not a flaw to be wished away, and it demands sizing and temperament that many investors underestimate until they are tested by a real drawdown.',
      { h3: 'Regulatory evolution' },
      {
        p: [
          'The regulatory perimeter around digital assets continues to develop and varies by jurisdiction, which affects eligible assets, custody arrangements and reporting. Institutions serving clients across markets such as the UAE and Singapore must manage a moving and multi-jurisdictional framework. We track this in our note on the ',
          { to: '/insights/regulatory-perimeter-2026', text: 'regulatory perimeter' },
          '.',
        ],
      },
      { h3: 'Operational and counterparty risk' },
      'The infrastructure — exchanges, custodians, protocols and lending counterparties — is younger than its traditional equivalents, and its failures have been consequential. Rigorous, ongoing counterparty due diligence is therefore a permanent operational requirement rather than a one-time onboarding step.',
      { h: 'Who Should Consider Institutional Crypto Asset Management?' },
      'Institutional crypto asset management is designed for qualified investors who want considered, controlled exposure to digital assets without assuming the operational burden and security risk of managing them directly. It is most relevant to family offices, high-net-worth individuals, and institutional investors — the audiences for whom governance, custody and fiduciary process are not optional.',
      'It tends to suit investors who share a particular disposition: a long-horizon view, an acceptance that a small, well-sized allocation may play a diversifying role, and a preference for a demonstrable process over a speculative outcome. It is not suited to those seeking leverage, short-term trading gains, or guaranteed returns — expectations the asset class cannot responsibly satisfy.',
      {
        p: [
          'For allocators weighing whether a measured allocation fits their mandate, the most useful next step is a conversation grounded in their specific objectives and constraints. Explore how the firm approaches this in ',
          { to: '/firm', text: 'about NexusCapital' },
          ' and our ',
          { to: '/strategies', text: 'investment strategies' },
          ', or ',
          { to: '/contact', text: 'request a confidential portfolio consultation' },
          '.',
        ],
      },
      { h: 'Conclusion' },
      'Institutional crypto asset management is not a new way to speculate on cryptocurrency; it is the application of established institutional discipline — allocation, construction, risk management and custody — to a newer and more volatile asset class. Its purpose is to make exposure survivable and governable, so that the decision to hold digital assets is an allocation decision made on the same terms as any other.',
      'For the institutions and families weighing the asset class, the durable advantage will not belong to those who timed an entry, but to those who built a repeatable, well-controlled process for owning it through a full cycle. That process — not any single trade — is what institutional crypto asset management provides.',
      { h: 'Risk Disclaimer' },
      'This article is provided for informational and educational purposes only and does not constitute investment, legal, tax or financial advice, nor an offer or solicitation to buy or sell any asset. Digital assets are highly volatile and speculative, and their value can fall as well as rise; you may lose some or all of your capital. Past performance is not indicative of future results, and no return is promised or guaranteed. Any examples are illustrative only. The regulatory treatment of digital assets varies by jurisdiction and continues to evolve. Prospective investors should conduct their own due diligence and seek independent professional advice appropriate to their circumstances before making any allocation.',
    ],
    faqs: [
      {
        q: 'What is institutional crypto asset management?',
        a: 'Institutional crypto asset management is the professional management of digital assets on behalf of institutions, family offices and high-net-worth investors. It applies the same portfolio construction, risk management, compliance and custody disciplines used across traditional asset classes to cryptocurrencies — treating them as a governed, risk-budgeted allocation held through institutional-grade custody, rather than as a speculative trade.',
      },
      {
        q: 'How is institutional crypto investing different from retail crypto investing?',
        a: 'The difference is structural, not just scale. Retail investing is typically a self-directed transaction with a single point of failure for custody and positions sized by conviction. Institutional management is a governed process: positions are sized by risk contribution within enforced limits, assets are held by qualified custodians with distributed key management, execution is diversified and controlled, and the manager operates under fiduciary duty and independent oversight.',
      },
      {
        q: 'How much should an institution allocate to digital assets?',
        a: 'There is no universal figure. Allocations are sized by risk contribution rather than headline capital, and a first allocation is typically a low-single-digit percentage of total assets — enough to be meaningful, small enough that a severe drawdown does not threaten the broader portfolio. The right figure depends on the investor’s mandate, objectives and risk tolerance.',
      },
      {
        q: 'What is crypto custody and why does it matter?',
        a: 'Crypto custody is how digital assets are securely held and controlled on an investor’s behalf. Because blockchains remove the intermediaries that safeguard traditional assets, whoever controls the private keys effectively controls the asset. Institutional custody distributes signing authority — via multi-party computation or multi-signature — so that no single person, device or location can move client assets, supported by operational governance such as allow-lists and time-locks.',
      },
      {
        q: 'How is risk managed in an institutional crypto portfolio?',
        a: 'Through an independent risk framework of limits, monitoring and controls owned by a function separate from investment decision-making. It addresses market risk (via sizing, diversification and rebalancing), liquidity risk, counterparty risk, and risks specific to digital assets such as smart-contract and key-management risk. Each risk is identified and priced before capital is committed.',
      },
      {
        q: 'Does institutional management remove the risk of crypto?',
        a: 'No. It does not remove volatility, guarantee returns, or eliminate risk, and no responsible manager claims otherwise. What it offers is that volatility is budgeted, risk is controlled within defined limits, and assets are protected through institutional custody — so the allocation can be held through a full cycle rather than abandoned under stress.',
      },
      {
        q: 'Why are institutional investors entering digital assets now?',
        a: 'Because the infrastructure required to hold the asset class safely has matured: regulated custody, regulated market access including exchange-traded products in several jurisdictions, clearer accounting and audit practice, and a body of independent research. This allows allocators to assess digital assets on portfolio grounds — diversification, liquidity and asset properties — rather than on price speculation.',
      },
      {
        q: 'Who is institutional crypto asset management for?',
        a: 'It is designed for qualified investors seeking considered, controlled exposure without managing digital assets directly — principally family offices, high-net-worth individuals and institutional investors. It suits long-horizon investors who value a demonstrable process over a speculative outcome, and is not suited to those seeking leverage, short-term trading gains or guaranteed returns.',
      },
      {
        q: 'What assets are included in an institutional digital asset portfolio?',
        a: 'The eligible universe depends on the mandate. A conservative mandate may confine itself to the largest, most liquid assets and regulated vehicles; a broader mandate may include a considered sleeve of network and infrastructure tokens, each admitted only after independent due diligence. Diversification is applied across assets, sectors and access vehicles.',
      },
      {
        q: 'What are the main challenges of institutional crypto asset management?',
        a: 'The principal challenges are the asset class’s high volatility and drawdowns, an evolving and multi-jurisdictional regulatory perimeter, and operational and counterparty risk across a younger infrastructure of exchanges, custodians and protocols. A credible manager is candid about these constraints and builds controls around them rather than downplaying them.',
      },
      {
        q: 'How are digital asset holdings reported to clients?',
        a: 'Holdings and performance are reported transparently on a defined cadence, and in a well-run arrangement clients can see their holdings, addresses and movements at all times. Transparency is treated as part of custody itself — trust is evidenced through reporting rather than merely asserted.',
      },
      {
        q: 'Is institutional crypto asset management regulated?',
        a: 'The regulatory treatment of digital assets and their management varies by jurisdiction and continues to evolve, affecting eligible assets, custody and reporting. Institutions serving clients across markets such as the UAE and Singapore operate within these frameworks and adapt as they develop. This article is educational only and is not legal or regulatory advice.',
      },
    ],
  },
  {
    id: 'institutional-allocation-2026',
    related: ['bitcoin-treasury-reserve', 'position-sizing-drawdown-control'],
    category: 'Market Outlook',
    title: 'The Institutional Allocation to Digital Assets',
    excerpt:
      'Why a measured, risk-budgeted allocation — not a trade — is how serious capital approaches the asset class.',
    definition: {
      term: 'an institutional allocation to digital assets',
      text: 'An institutional allocation to digital assets is a strategic, risk-budgeted position in cryptocurrencies — sized by the risk it contributes rather than the headline capital committed, custodied through institutional infrastructure, and rebalanced on a rule. It treats crypto as a long-horizon allocation built to withstand volatility, not a tactical trade that reacts to it.',
    },
    date: '2026-05-18',
    readingTime: '8 min',
    author: 'Eleanor Vance, CIO',
    content: [
      {
        p: [
          'For most of the last decade, ',
          {
            href: 'https://www.fidelitydigitalassets.com/research-and-insights',
            text: 'institutional engagement with digital assets',
          },
          ' was a question of whether. That question has been settled. The conversation now is one of how much, in what form, and under what controls — a conversation institutions are well equipped to have, because it is the same one they apply to every other asset class.',
        ],
      },
      'We approach digital assets not as a bet on price, but as an allocation decision. The discipline that governs an allocation to private credit or emerging-market equity applies here without modification: define the role of the asset in the portfolio, size the position to its risk, and hold it through a defined horizon.',
      { h: 'An allocation, not a trade' },
      'The single most common error we observe is treating digital assets as a tactical trade rather than a strategic allocation. Trading invites the portfolio to react to volatility; allocation requires it to withstand volatility. A position sized correctly — typically a low-single-digit percentage of total assets for a first allocation — can absorb the drawdowns characteristic of the asset class without threatening the broader portfolio.',
      'Risk budgeting is the mechanism that makes this possible. Rather than asking how much capital to commit, we ask how much risk the allocation should contribute, and we size from there. Because digital assets carry high standalone volatility, even a modest capital weight delivers a meaningful risk contribution.',
      { h: 'What measured looks like' },
      'A measured allocation is diversified across assets and access vehicles, custodied through institutional infrastructure, and rebalanced on a rule rather than a reaction. It is reported transparently and reviewed on the same cadence as the rest of the portfolio. None of this is novel. It is simply the application of established institutional practice to a newer asset class.',
      'The institutions that will look back on this period favourably are not those who timed an entry, but those who built a durable, repeatable process for owning the asset class through a full cycle.',
      {
        p: [
          'For institutions building that process, two companion notes go deeper — on holding ',
          { to: '/insights/bitcoin-treasury-reserve', text: 'bitcoin as a treasury reserve' },
          ' and on ',
          { to: '/insights/position-sizing-drawdown-control', text: 'sizing positions for survival' },
          '.',
        ],
      },
      {
        p: [
          'To discuss how a measured allocation might fit your mandate, explore our ',
          { to: '/strategies', text: 'investment strategies' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much should an institution allocate to digital assets?',
        a: 'There is no universal figure. We size allocations by risk contribution rather than headline capital, and a first allocation is typically a low-single-digit percentage of total assets — enough to be meaningful, small enough to absorb the drawdowns characteristic of the asset class without threatening the broader portfolio.',
      },
      {
        q: 'Is a digital asset allocation a trade or a long-term position?',
        a: 'We treat it as a strategic allocation, not a tactical trade. Trading invites the portfolio to react to volatility; allocation requires it to withstand volatility. Positions are defined by their role in the portfolio, sized to their risk, and held through a defined horizon.',
      },
      {
        q: 'How do you manage the volatility of the allocation?',
        a: 'Through risk budgeting. Instead of asking how much capital to commit, we ask how much risk the allocation should contribute and size from there. Because digital assets carry high standalone volatility, even a modest capital weight delivers a meaningful — and controlled — risk contribution.',
      },
    ],
  },
  {
    id: 'custody-foundation-of-trust',
    related: ['mpc-multisig-custody', 'stewardship-report'],
    category: 'Custody & Security',
    title: 'Custody Is the Foundation of Trust',
    excerpt:
      'As institutions enter digital assets, how assets are held and secured matters more than any single trade.',
    definition: {
      term: 'crypto custody',
      text: 'Crypto custody is how digital assets are securely held and controlled on an institution’s behalf. Because blockchains remove the intermediaries that safeguard traditional assets, custody moves to the centre of the risk conversation — combining distributed key-management with operational governance so that no single person, device or location can move client assets.',
    },
    date: '2026-04-02',
    readingTime: '6 min',
    author: 'Marcus Thorne, Head of Security',
    content: [
      'In traditional markets, custody is largely invisible. Assets sit with a regulated custodian, settlement is intermediated, and ownership is rarely in doubt. Digital assets remove those intermediaries by design, which means the question of how an asset is held moves from the background to the centre of the risk conversation.',
      {
        p: [
          'For an institution, no return justifies an uncontrolled custody arrangement. The history of this asset class is, in large part, a history of custody failures — ',
          {
            href: 'https://www.coindesk.com/learn/what-happened-to-ftx-the-fall-of-a-crypto-giant/',
            text: 'exchanges that commingled client funds',
          },
          ', keys held by single individuals, and operational shortcuts that worked until they did not.',
        ],
      },
      { h: 'Removing single points of failure' },
      'Sound institutional custody begins with a simple principle: no single person, device, or location should be able to move client assets. Modern key-management — whether multi-signature or multi-party computation — distributes signing authority so that a transaction requires a quorum of independent approvals. A compromised laptop or a coerced employee is no longer sufficient to cause loss.',
      'Around that cryptographic core sits the operational governance that makes it institutional: segregation of duties, withdrawal allow-lists, time-locks on large transfers, and independent reconciliation. Technology removes the single point of failure; process ensures it stays removed.',
      { h: 'Visible by default' },
      'Custody should also be transparent to the client. Holdings, addresses and movements are visible to the institutions we serve at all times. Trust is not asked for; it is evidenced. That is the standard we hold ourselves to, because in this asset class custody is not a back-office function — it is the foundation on which everything else rests.',
      {
        p: [
          'We explore the mechanics of distributed key-management in more depth in our note on ',
          { to: '/insights/mpc-multisig-custody', text: 'MPC and multi-signature custody' },
          ', and account for how it is applied in the annual ',
          { to: '/insights/stewardship-report', text: 'stewardship letter' },
          '.',
        ],
      },
      {
        p: [
          'To understand how custody anchors everything we do, see our ',
          { to: '/expertise', text: 'custody and security expertise' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does custody matter so much for digital assets?',
        a: 'Digital assets remove the intermediaries that make custody almost invisible in traditional markets. There is no regulated custodian standing between you and loss by default, so how an asset is held moves from the background to the centre of the risk conversation. No return justifies an uncontrolled custody arrangement.',
      },
      {
        q: 'How are client assets protected from a single point of failure?',
        a: 'Sound custody begins with a simple principle: no single person, device or location should be able to move client assets. Modern key-management — multi-signature or multi-party computation — distributes signing authority so a transaction requires a quorum of independent approvals, supported by segregation of duties, allow-lists and time-locks.',
      },
      {
        q: 'Can clients see their own holdings?',
        a: 'Yes. Holdings, addresses and movements are visible to the institutions we serve at all times. We regard transparency as part of custody itself — trust should be evidenced, not asked for.',
      },
    ],
  },
  {
    id: 'reading-onchain-yield',
    related: ['sustainable-protocol-yield', 'tokenization-real-world-assets'],
    category: 'On-Chain Yield',
    title: 'Reading Risk in On-Chain Yield',
    excerpt:
      'A framework for separating sustainable, risk-adjusted yield from incentives that cannot last.',
    definition: {
      term: 'on-chain yield',
      text: 'On-chain yield is income earned from activity on a blockchain network — such as transaction fees, lending spreads or trading volume shared with capital providers. A headline rate reveals little on its own; what matters is whether the yield is paid from genuine revenue or from newly issued tokens that dilute existing holders.',
    },
    date: '2026-02-21',
    readingTime: '7 min',
    author: 'Priya Anand, Portfolio Manager',
    content: [
      'On-chain yield is among the most misunderstood features of digital asset markets. A headline rate tells you almost nothing on its own; what matters is where the yield comes from, who is paying it, and what has to remain true for it to persist.',
      'We underwrite on-chain yield the way we would underwrite any income stream: by tracing it back to a source and stress-testing the assumptions that sustain it.',
      { h: 'Where does the yield come from?' },
      {
        p: [
          'Broadly, on-chain yield falls into two categories. The first is fee-backed: returns paid from genuine economic activity — transaction fees, lending spreads, trading volume. This yield is, in principle, durable, because it reflects real demand. The second is incentive-backed: ',
          {
            href: 'https://www.coindesk.com/learn/what-is-yield-farming-the-rocket-fuel-of-defi/',
            text: 'returns paid in newly issued tokens',
          },
          ' to attract capital. This yield can be substantial, but it is funded by dilution and tends to compress the moment incentives are withdrawn.',
        ],
      },
      'The critical question is therefore simple to state and harder to answer: is the protocol paying me out of revenue, or out of emissions? A yield that survives the removal of token incentives is one worth holding. A yield that depends on them is a countdown.',
      { h: 'The risks beneath the rate' },
      'Even durable yield carries layered risk — smart-contract risk, counterparty risk, liquidity risk, and the risk that the underlying collateral is itself volatile. We require that each of these be identified and priced before any capital is committed. A 6% yield underwritten to its source is worth more to a portfolio than a 20% yield no one can explain.',
      {
        p: [
          'We apply the same lens to staking in our note on ',
          { to: '/insights/sustainable-protocol-yield', text: 'sustainable protocol yield' },
          ', and to on-chain instruments in ',
          { to: '/insights/tokenization-real-world-assets', text: 'tokenization of real-world assets' },
          '.',
        ],
      },
      {
        p: [
          'To see how yield underwriting informs our portfolios, explore our ',
          { to: '/expertise', text: 'research and investment expertise' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is on-chain yield?',
        a: 'On-chain yield is income earned from activity on a blockchain network — for example transaction fees, lending spreads or trading volume shared with capital providers. A headline rate tells you almost nothing on its own; what matters is where the yield comes from and what must remain true for it to persist.',
      },
      {
        q: 'How can I tell if an on-chain yield is sustainable?',
        a: 'Trace it to its source. Fee-backed yield is paid from genuine economic activity and is, in principle, durable. Incentive-backed yield is paid in newly issued tokens to attract capital — it is funded by dilution and tends to compress the moment incentives are withdrawn. A yield that survives the removal of token incentives is one worth holding.',
      },
      {
        q: 'What risks come with on-chain yield?',
        a: 'Even durable yield carries layered risk: smart-contract risk, counterparty risk, liquidity risk, and the risk that the underlying collateral is itself volatile. We require each to be identified and priced before any capital is committed.',
      },
    ],
  },
  {
    id: 'stewardship-report',
    related: ['custody-foundation-of-trust', 'position-sizing-drawdown-control'],
    category: 'Stewardship',
    title: 'The 2026 Digital Asset Stewardship Letter',
    excerpt:
      'Our annual account of how we manage risk, security and governance on behalf of the capital entrusted to us.',
    definition: {
      term: 'the Digital Asset Stewardship Letter',
      text: 'The Digital Asset Stewardship Letter is NexusCapital’s annual account, in plain terms, of how it has stewarded the capital entrusted to it — the decisions made, the risks accepted and declined, and the principles of discipline, security and governance that guided both. It is a record of fiduciary conduct, not a marketing document.',
    },
    date: '2026-01-15',
    readingTime: '12 min',
    author: 'The Investment Committee',
    content: [
      'Each year we set out, in plain terms, how we have stewarded the capital entrusted to us. This letter is not a marketing document. It is an account — of the decisions we made, the risks we accepted and declined, and the principles that guided both.',
      { h: 'On discipline' },
      'The past year rewarded patience and punished reaction. We held our strategic allocations through two sharp drawdowns, rebalancing on rule rather than sentiment. In both cases, the portfolios that did least performed best. We continue to believe that the hardest discipline — doing nothing when doing something feels urgent — is also the most valuable.',
      { h: 'On security' },
      'No client asset was lost or impaired. Our custody arrangements were independently reviewed twice during the year, and our key-management quorum was tested under simulated compromise. We treat the absence of incident not as luck but as the product of process, and we decline to relax that process when markets are calm.',
      { h: 'On governance' },
      'We voted, engaged, and where necessary declined to participate in protocol decisions that we judged contrary to the long-term interests of token holders. Active ownership is not confined to public equities; it applies wherever we hold a stake and a voice.',
      { h: 'On what we owe you' },
      'Our duty is fiduciary before it is anything else. We seek to be right rather than to appear right, and we would rather forgo a return than compromise the standard by which we hold your capital. That is the commitment beneath every figure in the report that follows.',
      {
        p: [
          'The principles beneath this letter are set out at greater length in our notes on ',
          { to: '/insights/custody-foundation-of-trust', text: 'custody as the foundation of trust' },
          ' and ',
          { to: '/insights/position-sizing-drawdown-control', text: 'drawdown control' },
          '.',
        ],
      },
      {
        p: [
          'To learn more about the firm and the philosophy behind this stewardship, visit ',
          { to: '/firm', text: 'about NexusCapital' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the Digital Asset Stewardship Letter?',
        a: 'It is our annual account, in plain terms, of how we have stewarded the capital entrusted to us — the decisions we made, the risks we accepted and declined, and the principles that guided both. It is not a marketing document; it is a record of conduct.',
      },
      {
        q: 'How does NexusCapital approach governance over the assets it holds?',
        a: 'We practise active ownership. We vote, engage, and where necessary decline to participate in protocol decisions we judge contrary to the long-term interests of token holders. Active ownership is not confined to public equities; it applies wherever we hold a stake and a voice.',
      },
      {
        q: 'What does fiduciary duty mean in practice here?',
        a: 'It means our duty to clients comes before anything else. We seek to be right rather than to appear right, and we would rather forgo a return than compromise the standard by which we hold client capital.',
      },
    ],
  },
  {
    id: 'bitcoin-treasury-reserve',
    related: ['institutional-allocation-2026', 'position-sizing-drawdown-control'],
    category: 'Market Outlook',
    title: 'Bitcoin as an Institutional Treasury Reserve',
    excerpt:
      'What corporate treasurers and allocators should weigh before holding a strategic position — liquidity, volatility budgeting and accounting reality.',
    definition: {
      term: 'a bitcoin treasury reserve',
      text: 'A bitcoin treasury reserve is a strategic allocation to bitcoin held on a corporate or institutional balance sheet alongside cash and short-duration instruments. Treated seriously, it is funded from excess reserves rather than working capital and sized to a defined volatility budget, so that a drawdown can never force a sale at the wrong moment.',
    },
    date: '2026-06-10',
    readingTime: '9 min',
    author: 'Eleanor Vance, CIO',
    content: [
      {
        p: [
          'The idea of holding bitcoin on a corporate or institutional balance sheet has moved from the fringe to ',
          {
            href: 'https://www.coindesk.com/markets/2025/01/07/the-next-wave-of-corporate-bitcoin-adoption-seems-to-be-on-its-way',
            text: 'the agenda of serious treasury committees',
          },
          '. The case rests on a simple proposition: a scarce, liquid, globally portable asset with no counterparty may have a role alongside cash and short-duration instruments. The execution, however, is where the discipline lies.',
        ],
      },
      { h: 'Liquidity first' },
      'A treasury reserve exists to be available. Any allocation to bitcoin must therefore respect the primary purpose of the reserve: it cannot compromise the liquidity the organisation depends on. We treat a strategic bitcoin position as a long-horizon allocation funded from excess reserves, never from working capital, and never sized such that a drawdown would force a sale at the wrong moment.',
      { h: 'Budgeting for volatility' },
      'Bitcoin’s volatility is not a flaw to be ignored; it is a parameter to be budgeted. A position sized to a defined risk contribution — rather than a headline capital figure — keeps the allocation within tolerances the organisation can live with through a full cycle. The question is never simply "how much should we buy," but "how much volatility are we prepared for this position to contribute."',
      { h: 'Accounting and operational reality' },
      'Treasurers must also account for the practical layer: custody arrangements that satisfy auditors, accounting treatment that reflects fair value, internal controls over transfers, and a clear policy governing when and how the position may change. A strategic reserve is a governance decision as much as an investment one. Approached with that seriousness, it can be a considered allocation; approached casually, it is a liability.',
      {
        p: [
          'This builds on our broader view of the ',
          { to: '/insights/institutional-allocation-2026', text: 'institutional allocation to digital assets' },
          ', and on the discipline of ',
          { to: '/insights/position-sizing-drawdown-control', text: 'sizing positions for survival' },
          '.',
        ],
      },
      {
        p: [
          'To weigh a strategic reserve against your own balance sheet, explore our ',
          { to: '/strategies', text: 'digital asset strategies' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should a company hold bitcoin on its balance sheet?',
        a: 'It can be a considered allocation when treated seriously. The case rests on bitcoin being a scarce, liquid, globally portable asset with no counterparty. The discipline lies in the execution: a strategic position should be funded from excess reserves, never from working capital, and sized so a drawdown cannot force a sale at the wrong moment.',
      },
      {
        q: 'How much bitcoin should a treasury hold?',
        a: 'Volatility is a parameter to budget, not a flaw to ignore. A position sized to a defined risk contribution — rather than a headline capital figure — keeps the allocation within tolerances the organisation can live with through a full cycle. The question is how much volatility you are prepared for the position to contribute.',
      },
      {
        q: 'What accounting and operational issues arise?',
        a: 'Treasurers must address the practical layer: custody that satisfies auditors, accounting treatment that reflects fair value, internal controls over transfers, and a clear policy governing when and how the position may change. A strategic reserve is a governance decision as much as an investment one.',
      },
    ],
  },
  {
    id: 'position-sizing-drawdown-control',
    related: ['institutional-allocation-2026', 'reading-onchain-yield'],
    category: 'Risk Management',
    title: 'Sizing Positions for Survival: A Note on Drawdown Control',
    excerpt:
      'Returns are won over years and lost in weeks. How disciplined position limits and volatility targeting keep a portfolio in the game.',
    definition: {
      term: 'position sizing',
      text: 'Position sizing is the discipline of limiting how much risk any single asset may contribute to a portfolio. In volatile markets it targets a constant volatility contribution rather than a fixed capital weight — trimming positions as assets grow more volatile — so the portfolio survives drawdowns and stays in the game to compound.',
    },
    date: '2026-05-02',
    readingTime: '7 min',
    author: 'Julian Reyes, Head of Risk',
    content: [
      'The mathematics of loss is unforgiving. A portfolio that falls 50% must rise 100% to recover. A fall of 80% requires a fivefold gain. In an asset class capable of such moves, the first objective of risk management is not to maximise return — it is to ensure the portfolio survives to compound.',
      { h: 'Position limits as a constitution' },
      'We treat position limits as constitutional rather than discretionary. No single asset, however compelling the thesis, may exceed a defined share of risk. This rule binds us most precisely when conviction is highest, which is exactly when it is most needed. Concentration has made fortunes and destroyed them; the difference is usually survival, not skill.',
      { h: 'Targeting volatility, not price' },
      'Because the volatility of digital assets shifts dramatically across regimes, a fixed capital weight delivers wildly different risk over time. We instead target a volatility contribution: as an asset becomes more volatile, the position is trimmed; as it calms, the position can grow. The portfolio’s risk stays roughly constant even as markets do not.',
      { h: 'Pre-deciding the hard decisions' },
      'The worst moment to decide how much loss you can tolerate is during the loss. We define drawdown thresholds and the responses to them in advance, in writing, when judgement is clear. When the threshold is reached, we act on the rule rather than the emotion. Discipline of this kind is unglamorous, and it is the single largest determinant of whether a portfolio is still standing at the end of a cycle.',
      {
        p: [
          'Position discipline is the other half of the ',
          { to: '/insights/institutional-allocation-2026', text: 'institutional allocation decision' },
          ', and it shapes how we read sources of return such as ',
          { to: '/insights/reading-onchain-yield', text: 'on-chain yield' },
          '.',
        ],
      },
      {
        p: [
          'To see how risk-first management is built into every mandate, explore our ',
          { to: '/strategies', text: 'portfolio strategies' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is position sizing so important in digital assets?',
        a: 'Because the mathematics of loss is unforgiving. A portfolio that falls 50% must rise 100% to recover; a fall of 80% requires a fivefold gain. In an asset class capable of such moves, the first objective of risk management is not to maximise return but to ensure the portfolio survives to compound.',
      },
      {
        q: 'What is volatility targeting?',
        a: 'Because the volatility of digital assets shifts dramatically across regimes, a fixed capital weight delivers wildly different risk over time. We instead target a volatility contribution: as an asset becomes more volatile the position is trimmed, and as it calms the position can grow — so portfolio risk stays roughly constant even as markets do not.',
      },
      {
        q: 'How do you control drawdowns?',
        a: 'We pre-decide the hard decisions. Drawdown thresholds and the responses to them are defined in advance, in writing, when judgement is clear. When a threshold is reached we act on the rule rather than the emotion.',
      },
    ],
  },
  {
    id: 'regulatory-perimeter-2026',
    related: ['tokenization-real-world-assets', 'custody-foundation-of-trust'],
    category: 'Regulation & Policy',
    title: 'The New Regulatory Perimeter for Digital Assets',
    excerpt:
      'From MiCA to evolving guidance in Asia and the Gulf, a practical map of the rules now shaping how institutions can hold and trade crypto.',
    definition: {
      term: 'the regulatory perimeter for digital assets',
      text: 'The regulatory perimeter for digital assets is the evolving set of rules — from Europe’s MiCA to regimes across Asia and the Gulf — governing how institutions may hold and trade crypto. It centres on licensed custody, supervised intermediaries and disclosure, turning regulatory clarity into a precondition for serious capital rather than a constraint on it.',
    },
    date: '2026-04-20',
    readingTime: '10 min',
    author: 'Sofia Marchetti, Regulatory Counsel',
    content: [
      'For institutions, regulatory clarity is not a constraint on participation — it is a precondition for it. The maturing of digital-asset regulation across major jurisdictions has done more to enable serious capital than any market rally. This note maps the perimeter as it stands, and what it means in practice.',
      { h: 'A framework, not a patchwork' },
      {
        p: [
          {
            href: 'https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica',
            text: 'Europe’s comprehensive framework',
          },
          ' set an early template: licensing for service providers, clear rules for stablecoin issuance, and disclosure obligations that institutions recognise from other markets. Other jurisdictions across Asia and the Gulf have advanced their own regimes, often centred on licensed custody and trading venues. The direction of travel is consistent even where the detail differs — toward supervised intermediaries and defined investor protections.',
        ],
      },
      { h: 'What it means for allocators' },
      'The practical effect is that institutions can now access the asset class through regulated venues and custodians, with the legal certainty their mandates require. It also raises the bar: counterparties must be licensed, custody must meet defined standards, and reporting must satisfy the same scrutiny as any other holding. We regard these requirements as a benefit, not a burden — they screen out precisely the counterparties an institution should avoid.',
      { h: 'Staying ahead of change' },
      'Regulation in this space remains dynamic, and we treat regulatory monitoring as a standing function rather than a periodic exercise. The institutions best positioned are those that build to the spirit of the rules — transparency, segregation, accountability — rather than to the letter of any single regime that may yet evolve.',
      {
        p: [
          'Clear rules are also what make newer structures investable — a theme we take up in our note on ',
          { to: '/insights/tokenization-real-world-assets', text: 'tokenization of real-world assets' },
          ' and in our view of ',
          { to: '/insights/custody-foundation-of-trust', text: 'custody as the foundation of trust' },
          '.',
        ],
      },
      {
        p: [
          'To see how we operationalise these standards, explore our ',
          { to: '/expertise', text: 'custody and governance expertise' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can institutions legally hold digital assets?',
        a: 'In major jurisdictions, yes — and increasingly through supervised channels. Maturing frameworks let institutions access the asset class via regulated venues and custodians, with the legal certainty their mandates require. Regulatory clarity is not a constraint on participation; it is a precondition for it.',
      },
      {
        q: 'What is MiCA?',
        a: 'Europe’s comprehensive framework for digital assets, which set an early template: licensing for service providers, clear rules for stablecoin issuance, and disclosure obligations institutions recognise from other markets. Other regimes across Asia and the Gulf have advanced along consistent lines — toward licensed custody, supervised intermediaries and defined investor protections.',
      },
      {
        q: 'What does the regulatory perimeter mean for allocators?',
        a: 'It raises the bar in a useful way: counterparties must be licensed, custody must meet defined standards, and reporting must satisfy the same scrutiny as any other holding. We regard these requirements as a benefit — they screen out precisely the counterparties an institution should avoid.',
      },
    ],
  },
  {
    id: 'mpc-multisig-custody',
    related: ['custody-foundation-of-trust', 'regulatory-perimeter-2026'],
    category: 'Custody & Security',
    title: 'Beyond Cold Storage: MPC and Multi-Signature Custody',
    excerpt:
      'How modern key-management models remove single points of failure — and the operational controls that make them genuinely institutional.',
    definition: {
      term: 'MPC and multi-signature custody',
      text: 'MPC and multi-signature custody are key-management models that remove single points of failure. Multi-signature requires a quorum of independent keys to authorise a transaction; multi-party computation never assembles a single key at all, using distributed shares to jointly produce a signature. Both split authority so no individual, device or location can move assets alone.',
    },
    date: '2026-03-14',
    readingTime: '8 min',
    author: 'Marcus Thorne, Head of Security',
    content: [
      'Cold storage — keeping private keys entirely offline — was the first serious answer to the custody problem. It solved one risk, exposure to network attackers, while leaving others untouched: the single key, the single operator, the single point at which a process could fail. Institutional custody has since moved beyond it.',
      { h: 'Two models, one principle' },
      {
        p: [
          'Multi-signature custody requires several independent keys to authorise a transaction, with a defined quorum — say, three of five. ',
          {
            href: 'https://csrc.nist.gov/projects/threshold-cryptography',
            text: 'Multi-party computation',
          },
          ' goes further: a single key is never assembled in one place at all, but generated and used as distributed shares that jointly produce a signature. Both share one principle — that authority to move assets is split so that no individual, device, or location holds enough to act alone.',
        ],
      },
      { h: 'The controls that make it institutional' },
      'The cryptography is necessary but not sufficient. What makes custody institutional is the governance wrapped around it: signers drawn from separate teams, withdrawal allow-lists that constrain where assets can go, time-locks that delay large transfers, and independent reconciliation that catches discrepancies early. A quorum means little if all signers report to the same person.',
      { h: 'Resilience as the goal' },
      'The objective is a system that fails safe. The loss of any one key, the compromise of any one device, or the coercion of any one individual should be an incident the system absorbs, not a loss the client bears. That resilience — designed in advance and tested deliberately — is what separates genuinely institutional custody from storage that merely looks secure.',
      {
        p: [
          'This is the technical foundation beneath our broader argument that ',
          { to: '/insights/custody-foundation-of-trust', text: 'custody is the foundation of trust' },
          ', and it sits inside the ',
          { to: '/insights/regulatory-perimeter-2026', text: 'regulatory standards' },
          ' institutions now expect.',
        ],
      },
      {
        p: [
          'To see these controls in practice, explore our ',
          { to: '/expertise', text: 'custody and security expertise' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between multi-signature and MPC custody?',
        a: 'Multi-signature requires several independent keys to authorise a transaction, with a defined quorum — say, three of five. Multi-party computation goes further: a single key is never assembled in one place at all, but generated and used as distributed shares that jointly produce a signature. Both split authority so no individual, device or location can act alone.',
      },
      {
        q: 'Is cold storage enough for institutional custody?',
        a: 'No. Cold storage solved one risk — exposure to network attackers — while leaving others untouched: the single key, the single operator, the single point at which a process could fail. Institutional custody has moved beyond it to distributed key-management and layered governance.',
      },
      {
        q: 'What operational controls make custody genuinely institutional?',
        a: 'The cryptography is necessary but not sufficient. What makes custody institutional is the governance around it: signers drawn from separate teams, withdrawal allow-lists, time-locks on large transfers, and independent reconciliation. A quorum means little if all signers report to the same person.',
      },
    ],
  },
  {
    id: 'tokenization-real-world-assets',
    related: ['regulatory-perimeter-2026', 'reading-onchain-yield'],
    category: 'Market Outlook',
    title: 'Tokenization and the Rise of Real-World Assets',
    excerpt:
      'As treasuries, credit and funds move on-chain, we examine where tokenization adds real efficiency — and where it is merely a wrapper.',
    definition: {
      term: 'tokenization of real-world assets',
      text: 'Tokenization of real-world assets represents ownership of an asset — money-market funds, private credit or government securities — as a digital token on a blockchain. It can make settlement near-instant, around-the-clock and finely divisible, but it changes how an asset is held and transferred, not the underlying asset or the risk it carries.',
    },
    date: '2026-03-01',
    readingTime: '9 min',
    author: 'Priya Anand, Portfolio Manager',
    content: [
      {
        p: [
          'Tokenization — representing ownership of an asset as a digital token — has become one of the most discussed developments in the space, drawing in ',
          {
            href: 'https://app.rwa.xyz/',
            text: 'money-market funds, private credit and government securities',
          },
          '. The opportunity is real. So is the temptation to confuse a new wrapper for a new asset.',
        ],
      },
      { h: 'Where tokenization adds value' },
      'The genuine benefits are operational. Tokenized assets can settle near-instantly, around the clock, without the chain of intermediaries that traditional settlement requires. They can be divided finely, making access possible at smaller sizes. And programmable settlement can remove reconciliation and reduce counterparty risk. Where an asset suffers from slow, costly, or opaque settlement, tokenization can meaningfully improve it.',
      { h: 'Where it does not' },
      'Tokenization changes how an asset is held and transferred; it does not change what the asset is. A tokenized credit instrument carries the same credit risk as its off-chain equivalent. A token is also only as reliable as the legal structure linking it to the underlying claim — and that link, not the token, is where the real risk often sits. We underwrite the asset and the structure first, and regard the token as plumbing.',
      { h: 'A discerning approach' },
      'We expect tokenization to reshape settlement infrastructure over the coming years, and we engage with it accordingly. But we apply the same scrutiny we would to any holding: what is the underlying asset, who stands behind the claim, and does the on-chain representation genuinely improve the economics — or merely the marketing.',
      {
        p: [
          'Tokenization advances alongside the ',
          { to: '/insights/regulatory-perimeter-2026', text: 'maturing regulatory perimeter' },
          ', and demands the same yield discipline we set out in ',
          { to: '/insights/reading-onchain-yield', text: 'reading risk in on-chain yield' },
          '.',
        ],
      },
      {
        p: [
          'To discuss where tokenized assets fit a portfolio, explore our ',
          { to: '/strategies', text: 'investment strategies' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is tokenization of real-world assets?',
        a: 'Tokenization represents ownership of an asset — money-market funds, private credit, government securities — as a digital token on a blockchain. It changes how an asset is held and transferred, not what the asset fundamentally is.',
      },
      {
        q: 'Does tokenization reduce the risk of an asset?',
        a: 'No. A tokenized credit instrument carries the same credit risk as its off-chain equivalent. A token is also only as reliable as the legal structure linking it to the underlying claim — and that link, not the token, is often where the real risk sits. We underwrite the asset and the structure first.',
      },
      {
        q: 'Where does tokenization add genuine value?',
        a: 'The benefits are operational: near-instant, around-the-clock settlement without a chain of intermediaries, fine divisibility that widens access, and programmable settlement that reduces reconciliation and counterparty risk. Where an asset suffers from slow, costly or opaque settlement, tokenization can meaningfully improve it.',
      },
    ],
  },
  {
    id: 'sustainable-protocol-yield',
    related: ['reading-onchain-yield', 'bitcoin-treasury-reserve'],
    category: 'On-Chain Yield',
    title: 'Sustainable Yield: Staking and Protocol Economics',
    excerpt:
      'Separating durable, fee-backed return from emissions that simply move value between holders — a framework for underwriting on-chain income.',
    definition: {
      term: 'sustainable staking yield',
      text: 'Sustainable staking yield is the return from securing a proof-of-stake network that is backed by real network fees rather than token issuance. Fee-backed rewards reflect genuine usage and can persist; issuance is dilution dressed as income — value moved between holders, not a true gain — and tends to compress once incentives are withdrawn.',
    },
    date: '2026-02-05',
    readingTime: '7 min',
    author: 'Priya Anand, Portfolio Manager',
    content: [
      'Staking — committing assets to help secure a proof-of-stake network in return for rewards — is often presented as a near risk-free yield. It is neither risk-free nor uniform, and understanding why is essential to treating it as a genuine source of return rather than a headline number.',
      { h: 'Two sources of staking reward' },
      'Staking rewards come from two places. The first is protocol issuance: new tokens minted and distributed to those who stake. In isolation this is dilution — value moved from holders who do not stake to those who do. The second is network fees: real payments from users of the network, shared with those securing it. A mature network in which fee revenue forms a meaningful share of rewards offers something closer to a true yield.',
      { h: 'The risks to weigh' },
      {
        p: [
          'Staking introduces specific risks: lock-up periods that constrain liquidity, "slashing" ',
          {
            href: 'https://ethereum.org/en/staking/',
            text: 'penalties for validator misbehaviour',
          },
          ', and the operational risk of the validator itself. And the reward is denominated in a volatile asset — a 5% staking yield on a token that falls 30% is not a 5% return. We assess each of these before treating staking income as part of a portfolio’s return.',
        ],
      },
      { h: 'Underwriting the yield' },
      'Our test is the same one we apply to all on-chain income: trace the yield to its source, and ask what must remain true for it to persist. Staking yield backed by real network usage, on a network we would hold regardless, is a return worth capturing. Staking yield that is simply issuance dressed as income is a transfer, not a gain.',
      {
        p: [
          'This extends the framework in our note on ',
          { to: '/insights/reading-onchain-yield', text: 'reading risk in on-chain yield' },
          ', and informs how we treat assets held for ',
          { to: '/insights/bitcoin-treasury-reserve', text: 'long-horizon reserves' },
          '.',
        ],
      },
      {
        p: [
          'To see how we underwrite yield inside live mandates, explore our ',
          { to: '/expertise', text: 'research and investment expertise' },
          ' or ',
          { to: '/contact', text: 'book a portfolio review' },
          '.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is staking?',
        a: 'Staking means committing assets to help secure a proof-of-stake network in return for rewards. It is often presented as a near risk-free yield, but it is neither risk-free nor uniform — understanding why is essential to treating it as a genuine source of return rather than a headline number.',
      },
      {
        q: 'Is staking yield risk-free?',
        a: 'No. Staking introduces lock-up periods that constrain liquidity, “slashing” penalties for validator misbehaviour, and the operational risk of the validator itself. The reward is also denominated in a volatile asset — a 5% staking yield on a token that falls 30% is not a 5% return.',
      },
      {
        q: 'How do you tell sustainable staking yield from dilution?',
        a: 'Staking rewards come from two places: protocol issuance (new tokens, which in isolation is dilution — value moved from holders who do not stake to those who do) and network fees (real payments from users). Yield backed by genuine network usage, on a network we would hold regardless, is a return worth capturing; issuance dressed as income is a transfer, not a gain.',
      },
    ],
  },
];
