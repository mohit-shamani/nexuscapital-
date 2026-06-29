// Each post carries a `content` array. A string is a paragraph; an object
// { h: '…' } is a sub-heading. Rendered by src/pages/InsightPost.jsx.
export const insights = [
  {
    id: 'institutional-allocation-2026',
    related: ['bitcoin-treasury-reserve', 'position-sizing-drawdown-control'],
    category: 'Market Outlook',
    title: 'The Institutional Allocation to Digital Assets',
    excerpt:
      'Why a measured, risk-budgeted allocation — not a trade — is how serious capital approaches the asset class.',
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
