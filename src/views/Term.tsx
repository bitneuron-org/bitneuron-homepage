const Term = () => {
  return (
    <div className="pt-24 max-w-7xl m-auto px-4 sm:px-0">
      <h1 id="title" className="text-[24px] font-bold sm:text-4xl leading-tight">
        BitNeuron TERMS OF USER AGREEMENT
      </h1>
      {[
        `Please read this Terms of Use Agreement (“Terms of Use”) carefully. These Terms of Use
        govern the use of the website-hosted user interface (“Interface”) provided by BitNeuron
        Foundation (“BitNeuron”) and apply to all users accessing the Interface. The Interface is an
        automated market maker built on multiple blockchains (“Protocol”) and is governed by and
        belongs to a decentralized autonomous organization governance mechanism. The Interface is
        one, but not the exclusive, method by which users can access the Protocol. By accessing or
        using the Interface in any way, including accessing or using any of the services, content,
        or resources available or enabled via the Interface (each a “Service” and collectively, the
        “Services”), by clicking on the “I Accept” button, completing the registration process, or
        otherwise accessing or using the Interface or any of the Services, you represent that (1)
        you have read, understand, and agree to be bound by these Terms of Use, (2) you are of legal
        age to form a binding contract with BitNeuron, (3) you have the authority to enter into these
        Terms of Use personally or on behalf of the entity you have named as the user through the
        registration process, and to bind that entity to these Terms of Use, (4) you are not a
        citizen or resident of, or organized or located in, any country that is the subject of
        comprehensive country-wide, territory-wide, or regional economic sanctions by the United
        States, and (4) you are not designated on any list of prohibited or restricted parties
        (including but not limited to the “Specially Designated National” list maintained by the
        Office of Foreign Assets Control (“OFAC”) of the U.S. Department of the Treasury or Denied
        Persons List maintained by the U.S. Department of Commerce). The term “you” refers to the
        individual or legal entity, as applicable, accessing or using the Interface or any of the
        Services. If you do not agree to be bound by these Terms of Use, you may not access or use
        the Interface or any of the Services. You further represent that your access and use of the
        Interface and Services will fully comply with all applicable laws and regulations, and that
        you will not access or use the Interface or any of the Services to conduct, promote, or
        otherwise facilitate any illegal activity.`,
        "Section 13 (Dispute Resolution) of these Terms of Use is an arbitration clause that requires most disputes between us to be resolved on an individual, non-class action basis through binding and final arbitration instead of in court. See Section 13 for more information regarding this arbitration clause, and how to opt out.",
        "Your use of, and participation in, certain Services may be subject to additional terms (“Supplemental Terms”) and such Supplemental Terms will either be notified to you in the Interface or presented to you for your acceptance when you sign up to use the supplemental Service. If these Terms of Use are inconsistent with the Supplemental Terms, the Supplemental Terms shall control with respect to such Service. These Terms of Use and any applicable Supplemental Terms are referred to herein as the “Agreement.",
        "Please note that the Agreement is subject to change by BitNeuron in its sole discretion at any time. When changes are made, BitNeuron will make a copy of the updated Agreement available on the Interface and update the “Effective Date” at the top of these Terms of Use. If BitNeuron makes any material changes to the Agreement, we will provide notice of such material changes on the Interface and attempt to notify you by sending an e-mail to the e-mail address provided in your account registration. Any changes to the Agreement will be effective immediately for new users of the Interface and Services, and will be effective for existing registered users upon the earlier of (a) thirty (30) days after the “Effective Date” at the top of these Terms of Use, or (b) your consent to and acceptance of the updated Agreement if BitNeuron provides a mechanism for your immediate acceptance in a specified manner (such as a click-through acceptance), which BitNeuron may require before further use of the Interface or Services is permitted. If you do not agree to the updated Agreement, you must stop using the Interface and all Services upon the effective date of the updated Agreement. Otherwise, your continued use of the Interface or any of the Services after the effective date of the updated Agreement constitutes your acceptance of the updated Agreement. You agree that BitNeuron's continued provision of the Interface and Services is adequate consideration for the changes in the updated Agreement. Please regularly check the Interface to view the then-current Agreement.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        1. USE OF THE SERVICES.
      </h1>
      {[
        "1.1. BitNeuron Properties.",
        "The Interface, the Services, and the information and content available on the Interface and the Services, including the Software (each, a BitNeuron Property” and collectively, the “BitNeuron Properties”) are owned by BitNeuron and its suppliers, and are protected by intellectual property laws throughout the world. Use of any software and associated documentation that is made available via the Services (“Software”), other than the Protocol (which is comprised of open source software running on public blockchains), is governed by the Agreement. Subject to your compliance with the Agreement, BitNeuron grants you a non-assignable, non-transferable, non-sublicensable, revocable, non-exclusive license to use the Software for the sole purpose of enabling you to use the Services in the manner permitted by the Agreement. BitNeuron, its suppliers and service providers reserve all rights not granted in the Agreement. Some Software may be offered under open source licenses that we will make available to you upon your request. There may be provisions in the open source licenses that expressly override some of these terms.",
        "1.2. Updates and Usage.",
        "You understand that BitNeuron Properties are evolving. You acknowledge and agree that BitNeuron may update BitNeuron Properties or suspend access to the BitNeuron Properties with or without notifying you. You may need to update third-party software from time to time in order to use BitNeuron Properties.",
        "1.3. Assumption of Risk.",
        "By accessing and using the Interface or Protocol, you represent and warrant that you understand that there are inherent risks associated with cryptographic and blockchain-based technologies, and that you are financially and technically sophisticated enough to understand such risks. In particular, you accept that the value of your digital assets is variable and your digital assets may lose some or all of their value when supplied to the Protocol through the Interface. You further acknowledge and understand that blockchain-based transactions are irreversible, and that BitNeuron does not have the ability to modify or cancel any of your interactions with the relevant blockchain. You agree that BitNeuron is not responsible for any losses or damages associated with your interactions with decentralized networks and technology. You further acknowledge that BitNeuron is not responsible for any of the variables or risks associated with cryptographic and blockchain-based technologies. BitNeuron facilitates interactions with decentralized networks and technology, and BitNeuron does not own or control the Protocol. BitNeuron cannot be held liable for any resulting losses that you experience while accessing or using the Interface or Protocol. Accordingly, you understand and agree to assume full responsibility for all of the risks of accessing and using the Interface to interact with the Protocol.",
        "1.4. Restrictions.",
        "The rights granted to you in the Agreement are subject to the following restrictions: (a) Usage. You shall not: (a) license, sell, rent, lease, transfer, assign, reproduce, distribute, host or otherwise commercially exploit any BitNeuron Properties, including the Interface; (b) frame or utilize framing techniques to enclose any trademark, logo, or other BitNeuron Properties (including images, text, page layout or form); (c) use any metatags or other “hidden text” using BitNeuron’s name or trademarks; (d) modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any BitNeuron Properties except to the extent the foregoing restrictions are expressly prohibited by applicable law; or (e) use any manual or automated software, devices or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools or the like) to “scrape” or download data from any web pages contained in the Interface (except that we grant the operators of public search engines revocable permission to use spiders to copy",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        2. REGISTRATION
      </h1>
      {[
        "2.1. Account Registration",
        'To use certain features of BitNeuron Properties, you need to register an account. A "Registered User" refers to a user with a BitNeuron account.',
        "2.2. Registration Data",
        "You must provide accurate and up-to-date information when registering and update it as needed. You must be at least 18 years old and legally able to form a binding contract. You are responsible for all activity on your account and must monitor its use to prevent unauthorized access. Notify BitNeuron of any security breaches and do not share your account information.",
        "2.3. Identifying Information",
        "BitNeuron may require additional identifying information to prevent terrorism funding and money laundering. Failure to provide or verify information may result in account suspension or termination.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">3. FEES</h1>
      {[
        "3.1. Payment",
        "You agree to pay all fees and charges related to your account. By providing payment information, you authorize BitNeuron to invoice your account. Notify BitNeuron of any changes in payment information.",
        "3.2. Taxes",
        "You are responsible for any taxes related to your use of BitNeuron Properties. If required, BitNeuron will collect taxes in addition to fees and charges.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        4. CONTENT RESPONSIBILITY
      </h1>
      {[
        "4.1. Content Origin",
        "All content is the responsibility of the originating party.",
        "4.2. No Pre-Screening Obligation",
        "BitNeuron is not obligated to pre-screen content but may do so and remove content at its discretion.",
        "4.3. Your Content Responsibility",
        "You are responsible for the content you submit and its security, accuracy, legality, and privacy during transmission.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        5. OWNERSHIP.
      </h1>
      {[
        "5.1. BitNeuron Properties.",
        "Except with respect to Your Content and User Content, you agree that BitNeuron and its suppliers own all rights, title and interest in BitNeuron Properties. You may not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying any BitNeuron Properties. “BitNeuron” and all related graphics, logos, trademarks, service marks and trade names used on or in connection with any BitNeuron Properties are the trademarks of BitNeuron and may not be used without permission in connection with your, or any third-party, products or services. Other trademarks, service marks and trade names that may appear on or in BitNeuron Properties are the property of their respective owners.",
        "5.2. Your Content.",
        "BitNeuron does not claim ownership of Your Content. However, when you submit, post or publish Your Content on or in BitNeuron Properties, you represent that you own or have the right to submit, post, or publish, as applicable, such Your Content. You agree that you, not BitNeuron, are responsible for all of Your Content that you Make Available on or in BitNeuron Properties.",
        "5.3. License to Your Content.",
        "You grant BitNeuron a non-exclusive license to use, reproduce, and modify Your Content (in whole or in part) for the purposes of operating and providing BitNeuron Properties to you and to our other Registered Users. Please remember that other Registered Users may search for, see, use, modify and reproduce any of Your Content that you submit to any “public” area of BitNeuron Properties.",
        "5.4. Feedback.",
        "You agree that submission of any ideas, suggestions, documents, and/or proposals to BitNeuron through its suggestion, feedback, wiki, forum, or similar pages (“Feedback”) is at your own risk and that BitNeuron has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback. You represent and warrant that you have all rights necessary to submit the Feedback. You hereby grant to BitNeuron a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of BitNeuron Properties and/or BitNeuron’s business.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        6. INVESTIGATIONS.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4">
        BitNeuron may, but is not obligated to, monitor or review BitNeuron Properties and Content
        at any time. Without limiting the foregoing, BitNeuron shall have the right, in its sole
        discretion, to remove any of Your Content for any reason (or no reason), including if such
        Content violates the Agreement or any applicable law. Although BitNeuron does not generally
        monitor user activity occurring in connection with BitNeuron Properties or Content, if
        BitNeuron becomes aware of any possible violations by you of any provision of the Agreement,
        BitNeuron reserves the right to investigate such violations, and BitNeuron may, at its sole
        discretion, immediately terminate your license to use BitNeuron Properties, or change, alter
        or remove Your Content, in whole or in part, without prior notice to you.
      </p>
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        7. INTERACTIONS WITH OTHER USERS.
      </h1>
      {[
        "7.1. User Responsibility.",
        "You are solely responsible for your interactions with other Registered Users and any other parties with whom you interact in connection with the BitNeuron Properties; provided, however, that BitNeuron reserves the right, but has no obligation, to intercede in such disputes. You agree that BitNeuron will not be responsible for any liability incurred as the result of such interactions.",
        "7.2. Content Provided by Other Users.",
        "BitNeuron Properties may contain User Content provided by other Registered Users. BitNeuron is not responsible for and does not control User Content. BitNeuron has no obligation to review or monitor, and does not approve, endorse or make any representations or warranties with respect to, User Content. You use all User Content and interact with other Registered Users at your own risk.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        8. INDEMNIFICATION.
      </h1>
      {[
        "You agree to indemnify and hold BitNeuron, its parents, subsidiaries, affiliates, officers, employees, agents, partners, suppliers, and licensors (each, a “BitNeuron Party” and collectively, the “BitNeuron Parties”) harmless from any losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of any and all of the following: (a) Your Content; (b) your use of, inability to use, or access to any BitNeuron Property; (c) your violation of the Agreement; (d) your violation of any rights of another party, including any Registered Users; or (e) your violation of any applicable laws, rules or regulations. BitNeuron reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with BitNeuron in asserting any available defenses. This provision does not require you to indemnify any of the BitNeuron Parties for any unconscionable commercial practice by such party or for such party’s fraud, deception, false promise, misrepresentation or concealment, or suppression or omission of any material fact in connection with any Services provided hereunder. You agree that the provisions in this section will survive any termination of your Account, the Agreement and/or your access to BitNeuron Properties.",
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        9. DISCLAIMERS.
      </h1>
      {[
        "9.1. Non-Custodial and No Fiduciary Duties.",
        "BitNeuron does not hold custody of any cryptographic private keys to any digital wallets. You acknowledge that BitNeuron is not responsible for any loss, damage or liability arising from your loss of any cryptographic private keys. The Agreement is not intended to, and does not, create or impose any fiduciary duties on BitNeuron. You also acknowledge that virtual currencies, cryptocurrencies, and other blockchain-based digital assets are not legal tender, are not backed by the United States government, and are not subject to Federal Deposit Insurance Corporation or Securities Investor Protection Corporation protections.  The value of such digital assets may be derived from the continued willingness of market participants to engage in transactions involving the digital assets, and as a result there is the potential for permanent and total loss of value of a particular digital asset should the market for that digital asset disappear.  The volatility and unpredictability of the value of a digital asset may result in significant loss over a short period of time.  Additionally, other market developments, or legislative and regulatory changes or actions at the State, Federal, or international level may adversely affect the use, transfer, exchange, and value of digital assets, as well as the nature of and availability of blockchain protocols, decentralized and centralized exchanges, and other mechanisms by which individuals may possess and exchange digital assets.",
        "9.3. Not Registered with the SEC (or any other Agency).",
        `We are not registered with the U.S. Securities and Exchange Commission as a national securities exchange or in any other capacity. You understand and acknowledge that we do not broker trading orders on your behalf nor do we collect or earn fees from your trades on the Protocol. We also do not facilitate the execution or settlement of your trades, which occur entirely on public distributed blockchains, or otherwise accept and transmit value on your behalf or on anyone else’s behalf. We are not a money transmitter or virtual currency services provider.
        
        9.4. No Warranties: As Is.

        You expressly understand and agree that to the extent permitted by applicable law, your use of BitNeuron properties and the protocol is at your sole risk, and BitNeuron properties and the protocol are provided on an "as is" and "as available" basis, with all faults. BitNeuron parties expressly disclaim all warranties, representations, and conditions of any kind, whether express or implied, including, but not limited to, the implied warranties or conditions of merchantability, fitness for a particular purpose and non-infringement arising from use of the BitNeuron properties.

        (a) BitNeuron PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) THE BitNeuron PROPERTIES OR PROTOCOL WILL MEET YOUR REQUIREMENTS; (2) YOUR USE OF BitNeuron PROPERTIES OR PROTOCOL WILL BE UNINTERRUPTED, TIMELY, OR SECURE; (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF BitNeuron PROPERTIES OR PROTOCOL WILL BE ACCURATE OR RELIABLE; OR (4) THAT THE BitNeuron PROPERTIES OR PROTOCOL WILL BE FREE FROM ERRORS, DEFECTS, VIRUSES, OR OTHER HARMFUL ELEMENTS.
        
        (b) Any content downloaded from or otherwise accessed through BitNeuron properties or protocol is accessed at your own risk, and you shall be solely responsible for any damage to your property, including, but not limited to, your computer system and any device you use to access BitNeuron properties or protocol, or any other loss that results from accessing such content.
        
        (c) The BitNeuron properties may be subject to delays, cancellations and other disruptions. BitNeuron makes no warranty, representation or condition with respect to the BitNeuron properties or protocol, including but not limited to, the quality, effectiveness, reputation and other characteristics thereof.
        
        (d) No advice or information, whether oral or written, obtained from BitNeuron or through any BitNeuron properties or the protocol will create any warranty not expressly made herein.
        
        9.5. No Liability for Conduct of Third Parties.
        
        You acknowledge and agree that BitNeuron parties are not liable, and you agree not to seek to hold BitNeuron parties liable, for the conduct of third parties, including operators of the protocol and external sites, and that the risk of injury from such third parties rests entirely with you.
        
        9.6. No Liability for Conduct of Other Users.
        
        You are solely responsible for all of your communications and interactions with other users of BitNeuron properties and the protocol. you understand that BitNeuron does not make any attempt to verify the statements or actions of users of BitNeuron properties or protocol. BitNeuron makes no warranty that the goods or services provided by third parties will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
        
        9.7. Third-Party Materials and Resources.
        
        In connection with the Services, you may have access to materials that are provided or hosted by another party. You agree that it is impossible for BitNeuron to monitor such materials and that you access these materials at your own risk. The Interface may contain references or links to third-party resources, including (but not limited to) information, materials, products, or services, that BitNeuron does not own or control. In addition, third parties may offer promotions related to your access and use of the Interface or Protocol. We do not endorse or assume any responsibility for any such resources or promotions. If you access any such resources or participate in any such promotions, you do so at your own risk, and you understand that the Agreement does not apply to your dealings or relationships with any third parties. You expressly relieve us of any and all liability arising from your use of any such resources or participation in any such promotions.`,
      ].map((p, idx) => (
        <p key={idx} className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
          {p}
        </p>
      ))}
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        10. LIMITATION OF LIABILITY.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        {`10.1. Disclaimer of Certain Damages.

You understand and agree that, to the fullest extent provided by law, in no event shall BitNeuron parties be liable for any loss of profits, revenue, data or other intangible property, indirect, incidental, special, or consequential damages, or damages or costs due to loss of production or use, business interruption, or procurement of substitute services, in each case whether or not BitNeuron has been advised of the possibility of such damages, arising out of or in connection with the agreement or any communications, interactions or meetings with other users of BitNeuron properties or any third parties, on any theory of liability, resulting from: (a) the use or inability to use the BitNeuron properties; (b) the cost of procurement of substitute services resulting from any goods, data, information or services purchased or obtained; or messages received for transactions entered into through any BitNeuron properties; (c) unauthorized access to or alteration of your transmissions of data; (d) statements or conduct of any third party on BitNeuron properties or the protocol; (e) hacking, tampering, or other unauthorized access to or use of the interface or protocol; (f) any access to or use of any information obtained by any unauthorized access to or use of the interface or protocol; or (g) any other matter related to BitNeuron properties or protocol, whether based on warranty, copyright, contract, tort (including negligence), product liability or any other legal theory. the foregoing limitation of liability shall not apply to liability of a BitNeuron party for (i) death or personal injury caused by a BitNeuron party's negligence; or for (ii) any injury caused by a BitNeuron party's fraud or fraudulent misrepresentation. BitNeuron assumes no liability or responsibility for any: (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from any access or use of the BitNeuron properties or protocol; (iii) unauthorized access or use of any secure server or database in our control, or the use of any information or data stored therein; (d) interruption or cessation of function related to the interface or protocol; (iv) bugs, viruses, trojan horses, or the like that may be transmitted to or through the interface or protocol; (v) errors or omissions in, or loss or damage incurred as a result of the use of, any content made available through the interface or protocol; and (vi) the defamatory, offensive, or illegal conduct of any third party.

10.2. Cap on Liability.

To the fullest extent provided by law, BitNeuron parties will not be liable to you for more than the greater of (a) the total amount paid to BitNeuron by you during the three-month period prior to the act, omission or occurrence giving rise to such liability; or (b) the remedy or penalty imposed by the statute under which such claim arises. the foregoing cap on liability shall not apply to liability of a BitNeuron party for (i) death or personal injury caused by a BitNeuron party's negligence; or for (ii) any injury caused by a BitNeuron party's fraud or fraudulent misrepresentation.

10.3. User Content.

Except for BitNeuron's obligations to protect your personal data as set forth in the BitNeuron's privacy policy, BitNeuron assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any content (including, but not limited to, your content and user content), user communications or personalization settings.

10.4. Exclusion of Damages.

Certain jurisdictions do not allow the exclusion or limitation of certain damages. if these laws apply to you, some or all of the above exclusions or limitations may not apply to you, and you might have additional rights.

10.5. Basis of the Bargain.

The exclusions and limitations of damages set forth above are fundamental elements of the basis of the bargain between BitNeuron and you.`}
      </p>
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        11. MONITORING AND ENFORCEMENT.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        BitNeuron reserves the right to: (a) take appropriate legal action, including without
        limitation, referral to law enforcement, for any illegal or unauthorized use of the
        BitNeuron Properties and/or (b) terminate or suspend your access to all or part of the
        BitNeuron Properties for any or no reason, including without limitation, any violation of
        the Agreement. If BitNeuron becomes aware of any possible violations by you of the
        Agreement, BitNeuron reserves the right to investigate such violations. If, as a result of
        the investigation, BitNeuron believes that criminal activity has occurred, BitNeuron
        reserves the right to refer the matter to, and to cooperate with, any and all applicable
        legal authorities. BitNeuron is entitled, except to the extent prohibited by applicable law,
        to disclose any information or materials on or in BitNeuron Properties, including Your
        Content, in BitNeuron’s possession in connection with your use of BitNeuron Properties, to
        (i) comply with applicable laws, legal process or governmental request; (ii) enforce the
        Agreement, (iii) respond to any claims that Your Content violates the rights of third
        parties, (iv) respond to your requests for customer service, or (v) protect the rights,
        property or personal safety of BitNeuron, its Registered Users or the public, and all
        enforcement or other government officials, as BitNeuron in its sole discretion believes to
        be necessary or appropriate.
      </p>
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        12. TERM AND TERMINATION.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        {`12.1. Term.

The Agreement commences on the earlier to occur of (a) the date when you accept it (as described in the first paragraph of these Terms of Use above) and (b) the date you first used any of the BitNeuron Properties, and remains in full force and effect while you use any BitNeuron Properties, unless terminated earlier in accordance with the Agreement.

12.2. Termination by BitNeuron.

If you have materially breached any provision of the Agreement, or if BitNeuron is required to do so by law (e.g., where the provision of any of the Services or other BitNeuron Properties becomes unlawful), BitNeuron has the right to, immediately and without notice, suspend or terminate any Services or other BitNeuron Properties provided to you. You agree that all such terminations will be made in BitNeuron’s sole discretion and that BitNeuron will not be liable to you or any third party for any termination of your Account.

12.3. Termination of Services by You.

If you want to terminate the Services provided by BitNeuron, you may do so by (a) notifying BitNeuron at any time and (b) closing your Account for all of the Services that you use.

12.4. Effect of Termination.

Termination of any Service includes removal of access to such Service and barring of further use of the Service. Termination of all Services also includes deletion of your password and all related information, files and Content associated with or inside your Account (or any part thereof), including Your Content. Upon termination of any Service, your right to use such Service will automatically terminate immediately. You understand that any termination of Services may involve deletion of Your Content associated therewith from our live databases. BitNeuron will not have any liability whatsoever to you for any suspension or termination, including for deletion of Your Content. All provisions of the Agreement which by their nature should survive, shall survive termination of Services, including without limitation, ownership provisions, disclaimers, indemnification obligations, and limitation of liability.

12.5. No Subsequent Registration.

If your registration(s) with, or ability to access BitNeuron Properties is discontinued by BitNeuron due to your violation of any portion of the Agreement or for conduct otherwise inappropriate, then you agree that you shall not attempt to re-register with or access BitNeuron Properties through use of a different member name or otherwise, and you acknowledge that you will not be entitled to receive a refund for fees related to those BitNeuron Properties to which your access has been terminated. In the event that you violate the immediately preceding sentence, BitNeuron reserves the right, in its sole discretion, to immediately take any or all of the actions set forth herein without any notice or warning to you.
`}{" "}
      </p>
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        13. INTERNATIONAL USERS.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        BitNeuron Properties can be accessed from countries around the world and may contain
        references to Services and Content that are not available in your country. These references
        do not imply that BitNeuron intends to announce such Services or Content in your country.
        BitNeuron Properties are controlled and offered by BitNeuron from its facilities in the
        United States of America. BitNeuron makes no representations that BitNeuron Properties are
        appropriate or available for use in other locations. Those who access or use BitNeuron
        Properties from other countries do so at their own volition and are responsible for
        compliance with local law.
      </p>
      <h1>14. DISPUTE RESOLUTION.</h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        {`Please read the following arbitration agreement (“Arbitration Agreement) in this Section 14 (Dispute Resolution) carefully. It requires users to arbitrate disputes with BitNeuron and limits the manner in which you can seek relief from us.

14.1. Applicability of Arbitration Agreement.

You agree that any dispute between you and us (or other BitNeuron Parties) relating in any way to the Services or the Agreement will be resolved by binding arbitration, rather than in court, except that (1) you and the BitNeuron Parties may assert claims in small claims court if the claims qualify; and (2) you or the BitNeuron Parties may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents).

This Arbitration Agreement shall apply, without limitation, to all claims that arose or were asserted before the effective date of this Agreement or any prior version of the Agreement.

14.2. Arbitration Rules and Forum.

The Federal Arbitration Act governs the interpretation and enforcement of this Arbitration Agreement. To begin an arbitration proceeding, you must send a letter requesting arbitration and describing your claim to our registered agent: [INSERT]. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider. Disputes involving claims and counterclaims with an amount in controversy under $250,000, not inclusive of attorneys’ fees and interest, shall be subject to JAMS’ most current version of the Streamlined Arbitration Rules and procedures available at http://www.jamsadr.com/rules-streamlined-arbitration/; all other claims shall be subject to JAMS’s most current version of the Comprehensive Arbitration Rules and Procedures, available at http://www.jamsadr.com/rules-comprehensive-arbitration/. JAMS’s rules are also available at www.jamsadr.comor by calling JAMS at 800-352-5267. If JAMS is not available to arbitrate, the parties will select an alternative arbitral forum. If the arbitrator finds that you cannot afford to pay JAMS’s filing, administrative, hearing and/or other fees and you cannot obtain a waiver from JAMS, BitNeuron will pay them for you. You may choose to have the arbitration conducted by telephone, based on written submissions, or in person in the U.S. county where you live or at another mutually agreed location. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.

14.3. Authority of Arbitrator.

Without limiting the scope of Section 14.1 (Applicability of Arbitration Agreement), the arbitrator shall have exclusive authority to resolve any dispute related to the interpretation, applicability, enforceability or formation of this Arbitration Agreement including, but not limited to any claim that all or any part of this Arbitration Agreement is void or voidable. The arbitrator will decide the rights and liabilities, if any, of you and the BitNeuron Parties. The arbitration proceeding will not be consolidated with any other matters or joined with any other proceedings or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim or dispute. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual party under applicable law, the arbitral forum’s rules, and the Agreement (including the Arbitration Agreement). The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which any award (or decision not to render an award) is based, including the calculation of any damages awarded. The arbitrator shall follow the applicable law. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and us.

14.4. Waiver of Jury Trial.

You and the BitNeuron parties hereby waive any constitutional and statutory rights to sue in court (other than small claims court as permitted herein) and have a trial in front of a judge or a jury. you and the BitNeuron parties are instead electing that all covered claims and disputes shall be resolved by arbitration under this Arbitration Agreement, except as specified in Section 14.1 (Applicability of Arbitration Agreement) above. an arbitrator can award on an individual basis the same damages and relief as a court and must follow this Agreement as a court would. however, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.

14.5. Waiver of Class or Other Non-Individualized Relief.

All claims and disputes within the scope of this arbitration agreement must be arbitrated on an individual basis and not on a class or collective basis, only individual relief is available for claims covered by this arbitration agreement, and claims by or against one user cannot be arbitrated or consolidated with those of or against any other user or person. if a decision is issued stating that applicable law precludes enforcement of any of this section's limitations as to a given claim for relief, then the applicable claim, and only that applicable claim, must be severed from the arbitration and brought into the state or federal courts located in New York, New York in accordance with Section 15.6 (Exclusive Venue). all other claims shall be arbitrated.

14.6. 30-Day Right to Opt Out.

You have the right to opt out of the provisions of this Arbitration Agreement by sending a timely written notice of your decision to opt out to the following address: legal@bitneuron.org, within 30 days after first becoming subject to this Arbitration Agreement. Your notice must include your name and address and a clear statement that you want to opt out of this Arbitration Agreement. If you opt out of this Arbitration Agreement, all other parts of this Agreement will continue to apply to you. Opting out of this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have with us, or may enter into in the future with us or other BitNeuron Parties.

14.7. Severability.

Except as provided in Section 14.5 (Waiver of Class or Other Non-Individualized Relief), if any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Arbitration Agreement shall continue in full force and effect.

14.8. Survival of Agreement.

This Arbitration Agreement will survive the termination or expiration of the Agreement or your relationship with BitNeuron.

14.9. Modification.

Notwithstanding any provision in this Agreement to the contrary, we agree that if BitNeuron makes any future material change to this Arbitration Agreement, you may reject that change within thirty (30) days of such change becoming effective by writing BitNeuron at the following address: BitNeuron, legal@bitneuron.org.`}
      </p>
      <h1 className="text-[18px] font-semibold sm:text-2xl leading-tight text-green">
        15. GENERAL PROVISIONS.
      </h1>
      <p className="text-[12px] font-light sm:text-xl my-4 whitespace-pre-line">
        {`15.1. Electronic Communications.

The communications between you and BitNeuron may take place via electronic means (including e-mails, text messages and push notifications), whether you visit BitNeuron Properties or send BitNeuron communications, or whether BitNeuron posts notices on BitNeuron Properties or communicates with you via e-mail, text message or push notification. For contractual purposes, you (a) consent to receive communications from BitNeuron in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that BitNeuron provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing. The foregoing does not affect your statutory rights, including but not limited to the Electronic Signatures in Global and National Commerce Act at 15 U.S.C. §7001 et seq. (“E-Sign”).

15.2. Release.

You hereby release BitNeuron Parties and their successors from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from your use of BitNeuron Properties, including but not limited to, any interactions with or conduct of other Users or third-party products, services, or websites of any kind arising in connection with or as a result of the Agreement or your use of BitNeuron Properties. If you are a California resident, you hereby waive California Civil Code Section 1542, which states, “A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.” The foregoing release does not apply to any claims, demands, or any losses, damages, rights and actions of any kind, including personal injuries, death or property damage for any unconscionable commercial practice by a BitNeuron Party or for such party’s fraud, deception, false, promise, misrepresentation or concealment, suppression or omission of any material fact in connection with the Interface or any Services provided hereunder.

15.3. Assignment.

The Agreement, and your rights and obligations hereunder, may not be assigned, subcontracted, delegated or otherwise transferred by you without BitNeuron’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.

15.4. Force Majeure.

BitNeuron shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, pandemics, epidemics, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents, strikes or shortages of labor or materials.

15.5. Questions, Complaints, Claims.

If you have any questions, complaints or claims with respect to BitNeuron Properties, please contact us at: legal@bitneuron.org. We will do our best to address your concerns. If you feel that your concerns have been addressed incompletely, we invite you to let us know for further investigation.

15.6. Exclusive Venue.

To the extent the parties are permitted under the Agreement to initiate litigation in a court, both you and BitNeuron agree that all claims and disputes arising out of or relating to the Agreement will be litigated exclusively in the state or federal courts located in Santa Clara County, California.

15.7. Governing Law.

The terms and any action related thereto will be governed and interpreted by and under the laws of the state of California, consistent with the federal arbitration act, without giving effect to any principles that provide for the application of the law of another jurisdiction. the United Nations Convention on Contracts for the International Sale of Goods does not apply to the agreement.

15.8. Notice.

Where BitNeuron requires that you provide an e-mail address, you are responsible for providing BitNeuron with your most current e-mail address. In the event that the last e-mail address you provided to BitNeuron is not valid, or for any reason is not capable of delivering to you any notices required/ permitted by the Agreement, BitNeuron’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice. You may give notice to BitNeuron at the following address: legal@bitneuron.org. Such notice shall be deemed given when received by BitNeuron by letter delivered by nationally recognized overnight delivery service or first class postage prepaid mail at the above address.

15.9. Waiver.

Any waiver or failure to enforce any provision of the Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.

15.10. Severability.

If any portion of this Agreement is held invalid or unenforceable, that portion shall be construed in a manner to reflect, as nearly as possible, the original intention of the parties, and the remaining portions shall remain in full force and effect.

15.11. Entire Agreement.

The Agreement is the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.
`}
      </p>
      <h1 className="text-[18px] sm:mt-48 mt-20 font-semibold sm:text-2xl leading-tight text-green">
        CONTACT INFORMATION
      </h1>
      <p className="text-[12px] text-gray-light sm:text-xl my-4 whitespace-pre-line">
        If you have any questions about these Terms or the Services, please contact BitNeuron at
        legal@bitneuron.org
      </p>
    </div>
  );
};

export default Term;
