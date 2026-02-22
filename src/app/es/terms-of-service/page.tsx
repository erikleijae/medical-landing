import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Condiciones de servicio
        </h1>
        <p className="mt-1 text-sm text-slate-500">DeepClinic Copilot</p>

        {/* Intro */}
        <section className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            DeepClinic Copilot provides a personalised documentation service that allows users to transcribe and document
            patient conversations using an application on an internet-connected computer, tablet, or phone. The service
            aims to facilitate the creation of medical records for healthcare providers. The service is available online
            via web browser and requires an internet connection.
          </p>
          <p>
            The service is provided by DeepClinic Copilot AB (org.nr 559444-6857). These General Terms and Conditions
            govern the use of the Service. As used in these Terms of Use, &quot;DeepClinic Copilot&quot;, &quot;our service&quot; or &quot;Service&quot;
            means the digital documentation service provided by DeepClinic Copilot AB.
          </p>
        </section>

        {/* 1. Definitions */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">1. Definitions</h2>
          <p>For the purposes of this Agreement, the terms set out below have the following meanings:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">User:</span> Any employee or contractor of the Customer who uses the
              Service.
            </li>
            <li>
              <span className="font-semibold">Agreement:</span> The Agreement with the associated appendices and
              supplements between the Customer and the Supplier, whereby the Supplier undertakes to provide the Service
              to the Customer.
            </li>
            <li>
              <span className="font-semibold">Confidential information:</span> Information that is subject to
              confidentiality or professional secrecy in accordance with the Public Access to Information and Secrecy Act
              (2009:400) or the Patient Safety Act (2010:659), as applicable under Swedish law. If the Customer is based
              in another jurisdiction, equivalent local laws on confidentiality and professional secrecy may also apply.
            </li>
            <li>
              <span className="font-semibold">Service:</span> The services that the Supplier shall provide to the
              Customer under the Agreement, which are further specified in the Service Description.
            </li>
            <li>
              <span className="font-semibold">Service description:</span> The description of the content and scope of
              the Service that is an appendix to the Agreement, according to which the Provider shall provide the
              Service.
            </li>
            <li>
              <span className="font-semibold">The Secrecy Act:</span> The Act (2020:914) on Confidentiality in
              Connection with the Outsourcing of Technical Processing or Storage of Data, as applicable under Swedish
              law. Where relevant, equivalent national regulations on data confidentiality may also apply.
            </li>
          </ul>
        </section>

        {/* 2. Obligations of the Supplier */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">2. Obligations of the Supplier</h2>
          <p>
            2.1 The Supplier shall provide the Service on an ongoing basis during the contract period. The Service shall
            be performed and provided in a professional manner.
          </p>
          <p>
            2.2 The Supplier shall provide the Customer with support as needed during regular business hours
            (support@deepclinic.ai) and to provide the Service with an uptime of 99% on a quarterly basis,
            excluding periods of permitted downtime. The Provider is responsible for maintaining and updating the Service
            so that it remains functional and secure in accordance with applicable standards and practices in IT and
            healthcare. The permitted downtime for the Service, for maintenance and updates, is between the hours of
            21:00 &amp; 05:00 CET. This scheduled downtime is not counted in the uptime calculation. The Supplier
            undertakes to inform the Customer in advance as far as possible of any major planned interruptions that
            occur during these times.
          </p>
        </section>

        {/* 3. Acceptable use */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">3. Acceptable use</h2>
          <p>
            DeepClinic Copilot must be used responsibly and in line with its intended purpose of creating accurate, editable
            drafts of medical notes.
          </p>
          <p className="font-semibold">User responsibilities:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Review and edit notes:</span> Ensure all draft notes are reviewed,
              corrected, and verified for accuracy before inclusion in patient records or Electronic Health Records (EHR).
            </li>
            <li>
              <span className="font-semibold">Professional judgment:</span> Rely on professional expertise when using
              outputs from DeepClinic Copilot. The Service is a support tool, not a replacement for clinical
              decision-making.
            </li>
            <li>
              <span className="font-semibold">Compliance:</span> Use DeepClinic Copilot in accordance with applicable
              laws, regulations, and clinical standards in your jurisdiction.
            </li>
          </ul>
          <p className="font-semibold">Prohibited actions:</p>
          <p>Users must not:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Input false or misleading information into the system.</li>
            <li>
              Attempt to use DeepClinic Copilot to generate medical diagnoses, treatment recommendations, or advice.
            </li>
            <li>
              Engage in actions that compromise the security, integrity, or performance of the Service (e.g.,
              reverse-engineering or tampering with the system).
            </li>
            <li>Share access credentials or allow unauthorised individuals to use their account.</li>
            <li>Use DeepClinic Copilot for purposes outside its intended use.</li>
          </ul>
          <p>Any violation of these terms may result in suspension or termination of access.</p>
        </section>

        {/* 4. Right to use the Service and account access */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">
            4. Right to use the Service and account access
          </h2>
          <p>
            4.1 The Customer obtains a non-transferable and time-limited right to use the Service in accordance with the
            terms of this Agreement. This right is limited to the number of users and the contract period specified in
            the Agreement.
          </p>
          <p>
            4.2 A user account is intended for each user&apos;s personal use. The user must not give others access to the
            account. To help maintain control of the account and to prevent unauthorised users from accessing the
            account, the user should maintain control of the devices used to access the Service and not disclose the
            password or details associated with the account to anyone. The user is responsible for providing and
            maintaining accurate information about their account.
          </p>
          <p>
            4.3 DeepClinic Copilot may terminate or block an account if necessary to protect the user, DeepClinic Copilot, or
            our partners from identity theft or other fraudulent activity.
          </p>
        </section>

        {/* 5. Obligations of the Customer */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">5. Obligations of the Customer</h2>
          <p>
            5.1 The Customer is responsible for having the necessary hardware and software to use the Service. To access
            the Service, access to the internet and a prepared device are required.
          </p>
          <p>5.2 The Customer may only use the Service in their own business.</p>
          <p>
            5.3 The Customer undertakes to use the Service in accordance with applicable laws and regulations and in
            accordance with the instructions and guidelines provided by the Provider. The Customer is responsible for its
            Users&apos; use of the Service and shall ensure that they do not use the Service in a way that may be considered
            misuse or that harms the Provider&apos;s rights.
          </p>
          <p>
            5.4 In particular, the Customer and the users for whom the Customer is responsible, except in cases where
            expressly approved by DeepClinic Copilot, may not:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              (i) circumvent, remove, modify, disable, impair, block, obscure, or defeat any of the Content Protection
              Policies or other portions of the Service;
            </li>
            <li>(ii) use any robot, spider, scraper, or other automated means to access the Service;</li>
            <li>
              (iii) decompile, reverse engineer, or disassemble any software or other products or processes available
              through the Service;
            </li>
            <li>(iv) insert code or product or manipulate the content of the Service in any way;</li>
            <li>(v) use any method of data mining, data collection or extraction;</li>
            <li>
              (vi) upload, post, email, or otherwise transmit any material designed to interrupt, destroy, or limit the
              functionality of any computer software or hardware or telecommunications equipment associated with the
              Service, including software viruses or any other computer code, files, or programs.
            </li>
          </ul>
          <p>
            5.5 DeepClinic Copilot reserves the right to terminate or limit Customer&apos;s use of the Service if Customer or the
            users for whom Customer is responsible violate these Terms of Service or engage in illegal or fraudulent use
            of the Service.
          </p>
          <p>
            5.6 The Customer may not wholly or partially assign or pledge its rights and/or obligations under this
            Agreement without the Supplier&apos;s written approval.
          </p>
        </section>

        {/* 6. Customer data */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">6. Customer data</h2>
          <p>
            6.1 The Customer holds all rights to the Customer&apos;s data. The Supplier does not obtain any rights to the
            Customer&apos;s data, or part thereof, under the Agreement. The Supplier may only use the Customer&apos;s data,
            including Confidential Data, for the provision of the Service to the Customer in accordance with the
            Agreement, and not in any part for the Supplier&apos;s own purposes. Access to Customer&apos;s data shall be limited to
            those persons who need access to Customer&apos;s data in order to perform their duties.
          </p>
          <p>
            6.2 The Supplier is under no circumstances entitled to retain the Customer&apos;s data. The Supplier guarantees
            that the Customer&apos;s data will be disclosed to the Customer immediately upon request. The disclosure must be
            made with the urgency required by the circumstances and taking into account the work required.
          </p>
          <p>
            6.3 The Customer&apos;s data shall be disclosed in the format set out in the Agreement. If the format has not been
            specified, the Customer&apos;s data shall be disclosed in the format requested by the Customer. If such a request
            requires special conversion work, the Customer shall compensate the Supplier for this work in a reasonable
            amount.
          </p>
          <p>
            6.4 The Provider shall ensure that the data that the Customer deletes in the Service is permanently removed
            from the Provider&apos;s equipment within a reasonable period of time, but no later than within thirty (30) days.
          </p>
          <p>
            6.5 The Supplier shall cease all processing of the Customer&apos;s data upon termination of the Agreement, with the
            exception of return to the Customer, or the person designated by the Customer, and for permanent deletion.
          </p>
          <p>
            6.6 Upon termination of the Agreement, the Supplier shall ensure that the Customer&apos;s data is promptly returned
            to the Customer, or in accordance with the Customer&apos;s instructions, permanently deleted from the Supplier&apos;s
            Operating Environment within a reasonable time, but no later than within thirty (30) days.
          </p>
        </section>

        {/* 7. Confidentiality */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">7. Confidentiality</h2>
          <p>
            7.1 A party may not disclose documents or in any other way reproduce to a third party information about the
            other party&apos;s activities that may be regarded as a business or professional secret or that otherwise relate to
            the other party&apos;s internal affairs, to any other extent than is necessary for the provision of the Service and
            the performance of the Agreement.
          </p>
          <p>
            7.2 The duty of confidentiality does not apply to information that a party can show has become known to it
            otherwise than through the provision of the Service or that is publicly known. The duty of confidentiality also
            does not apply when a party is obliged under Swedish law to disclose information.
          </p>
          <p>
            7.3 Within the framework of the Agreement, the Supplier is given access to Confidential Information on the
            basis of the secrecy breaching rule in Chapter 10. 2 a § OSL, as applicable under Swedish law, since the
            Service only covers technical processing or technical storage. If the Customer is based in another
            jurisdiction, equivalent local laws on confidentiality and data protection may also apply. The Supplier shall
            ensure that the duty of confidentiality under the Secrecy Act is complied with by the persons for whom the
            Supplier is responsible. A party is also obliged to ensure that employees, hired consultants and
            subcontractors take into account the above-mentioned legal rules.
          </p>
          <p>
            7.4 Confidentiality under this section shall survive the termination of the Agreement. The Supplier shall
            immediately inform the Customer&apos;s contact person if it becomes discovered that the Supplier&apos;s employees, or
            others for whom the Supplier is responsible, have breached a duty of confidentiality or other obligation under
            this section.
          </p>
        </section>

        {/* 8. Personal data */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">8. Personal data</h2>
          <p>
            The processing of personal data within the framework of this Agreement is governed by the Data Processing
            Agreement signed by the Customer during the signup process. Both parties undertake to comply with applicable
            legislation regarding the processing of personal data.
          </p>
          <p>
            Find more details about the end-user privacy policy for healthcare professionals in our Privacy Policy, which
            is available here:
          </p>
          <p>
            <Link href="/es/privacy-policy" className="text-sm font-medium text-sky-700 hover:text-sky-900">
              Privacy Policy for healthcare professionals
            </Link>
          </p>
        </section>

        {/* 9. Safety */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">9. Safety</h2>
          <p>
            The Provider shall take appropriate technical and organisational security measures to ensure security and
            confidentiality in the provision of the Service.
          </p>
        </section>

        {/* 10. Intellectual property rights */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">10. Intellectual property rights</h2>
          <p>
            10.1 The Provider guarantees that the Provider holds the intellectual property rights, such as copyright to
            computer programs, rights of use according to licence agreements, etc., that are required for the provision of
            the Service. The Supplier is also responsible for ensuring that the Customer has the right to use the Service
            in accordance with the Agreement.
          </p>
          <p>
            10.2 The Customer is responsible for ensuring that the necessary intellectual property rights, such as
            copyright to computer programs and rights of use according to licence agreements, exist for the Customer&apos;s
            software, and that these allow the Supplier the right to use the Customer&apos;s software in the Operating
            Environment for the provision of the Service in accordance with the Agreement.
          </p>
        </section>

        {/* 11. Development of the Service */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">11. Development of the Service</h2>
          <p>
            Any improvements, innovations or developments made by DeepClinic Copilot AB, either alone or together with the
            Customer, will be and remain the property of DeepClinic Copilot AB. Customer shall have no rights to such
            improvements, innovations or developments.
          </p>
        </section>

        {/* 12. Limitation of liability */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">12. Limitation of liability</h2>
          <p>
            The Provider is not liable for any indirect or consequential damages arising from the use or inability to use
            the Service. The Supplier&apos;s aggregate liability under this Agreement, for any reason or action, is limited to
            the total amount paid by the Customer to the Supplier during the six (6) months preceding the event giving
            rise to the claim.
          </p>
        </section>

        {/* 13. Force majeure and changed conditions */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">13. Force majeure and changed conditions</h2>
          <p>
            13.1 The parties are exempt from penalties for failure to perform certain obligations under this Agreement, if
            the failure is due to a so-called exonerating circumstance of material importance. According to this Agreement,
            e.g. government action, new or amended legislation, labour market conflict, blockade, fire, flood, loss or
            destruction of data or property of significant importance or accident of major importance shall be considered
            as an exonerating circumstance. If a party wishes to request an exemption on the basis of exempt liability,
            the party must inform the other party without unreasonable delay of this in order to invoke the circumstance.
          </p>
          <p>
            13.2 The Parties agree that in the event that new legislation, regulation or legal developments change the
            Parties&apos; legal rights or obligations or affect either Party&apos;s ability to perform its obligations under this
            Agreement, the Parties will negotiate in good faith the terms of this Agreement in order to comply with the new
            developments in order to continue the business relationship between the Parties.
          </p>
        </section>

        {/* 14. Dispute resolution */}
        <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">14. Dispute resolution</h2>
          <p>
            14.1 This Agreement shall be governed by and shall be construed and applied in accordance with the laws of
            Sweden, excluding conflict of law rules. Any disputes arising in connection with this Agreement shall primarily
            be resolved by mutual agreement of the parties. If the dispute cannot be resolved through negotiation, it shall
            be settled through arbitration administered by the Arbitration Institute of the Stockholm Chamber of Commerce
            (SCC). The seat of the arbitration shall be Stockholm, Sweden and the language of the proceedings shall be
            Swedish.
          </p>
          <p>
            14.2 The parties undertake and agree that any arbitration proceeding as set forth above shall be treated as
            strictly confidential, and that all information disclosed during the proceeding as well as the information
            relating to the proceeding as such and the content of any decision made by the SCC shall constitute
            confidential information and shall be treated in accordance with the confidentiality provisions of this
            Agreement.
          </p>
        </section>

        {/* 15. Payment and billing */}
        <section className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700">
          <h2 className="text-base font-semibold text-slate-900">15. Payment and billing</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.1 Plans and pricing</h3>
            <p>
              DeepClinic Copilot provides both free, usage-limited plans and paid subscription plans. The specific features,
              usage limits, and pricing of each plan may vary depending on the User&apos;s location and currency. All pricing,
              payment terms, and plan details are subject to change at DeepClinic Copilot&apos;s sole discretion.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.2 Subscription and usage fees</h3>
            <p>
              If the Customer or its Users exceed the limits of the free plan or opt to use any paid features, the
              Customer will be charged the applicable subscription or usage fees (&quot;Fees&quot;). These Fees, along with any
              applicable taxes, duties, or additional charges, will be clearly communicated at the time of sign-up or
              upgrade and may vary by region, currency, and payment method.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.3 Taxes and other charges</h3>
            <p>
              <span className="font-semibold">15.3.1 General tax responsibility.</span> Unless otherwise stated, all Fees
              are exclusive of any taxes, duties, levies, or similar governmental assessments (collectively, &quot;Taxes&quot;). The
              Customer is responsible for paying all applicable Taxes associated with its purchases under this Agreement,
              except for taxes based on DeepClinic Copilot&apos;s net income.
            </p>
            <p>
              <span className="font-semibold">15.3.2 Swedish customers.</span> DeepClinic Copilot AB is a Swedish company.
              For Customers located in Sweden, DeepClinic Copilot will charge and collect Swedish value-added tax (VAT) or
              any other applicable taxes as required by Swedish law.
            </p>
            <p>
              <span className="font-semibold">15.3.3 Customers in other regions.</span> For Customers located outside
              Sweden, the applicable Taxes (including VAT, GST, or other consumption taxes) will depend on the
              jurisdiction in which the Customer operates or resides. The Customer acknowledges that DeepClinic Copilot may
              be required to charge certain Taxes based on local rules, and the Customer agrees to pay such Taxes. If
              DeepClinic Copilot is not required to collect Taxes for a particular jurisdiction, the Customer remains
              responsible for any Taxes owed to the relevant authorities.
            </p>
            <p>
              <span className="font-semibold">15.3.4 Bank and conversion fees.</span> DeepClinic Copilot is not liable for
              any bank fees, foreign exchange fees, or other surcharges that may be assessed by the Customer&apos;s payment
              provider.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.4 Accepted payment methods</h3>
            <p>
              <span className="font-semibold">15.4.1 Credit or debit card.</span> All Fees must be paid by a valid credit
              or debit card. The Customer must provide current, complete, and accurate card information and promptly
              update it if it changes.
            </p>
            <p>
              <span className="font-semibold">15.4.2 Authorised charges.</span> By submitting card information, the
              Customer authorises DeepClinic Copilot and its designated payment processors to charge the provided card for
              all Fees due under the chosen plan or usage.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.5 Changes to fees and payment terms</h3>
            <p>
              DeepClinic Copilot reserves the right to modify its Fees, payment terms, and pricing structures at any time.
              Such modifications may include changing, adding, or removing free plan usage limits, subscription tiers, or
              the pricing of any paid offerings. DeepClinic Copilot will make reasonable efforts to notify the Customer of
              any material changes to the Fees or payment terms in advance (e.g., by email or notification within the
              Service). The Customer&apos;s continued use of the Service following any Fee change constitutes acceptance of
              the revised Fees.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.6 Billing cycle and statements</h3>
            <p>
              <span className="font-semibold">15.6.1 Billing cycle.</span> Subscription Fees (if applicable) will be
              billed in advance on a periodic basis (e.g., monthly, quarterly, or annually), depending on the chosen plan.
              Usage-based Fees will be billed as indicated in the applicable plan.
            </p>
            <p>
              <span className="font-semibold">15.6.2 Statements of charges.</span> DeepClinic Copilot will provide a
              statement of charges, which may be delivered electronically (via email or made available in the Service&apos;s
              account dashboard). This document is not an invoice for future payment but rather a record of the charges
              applied to the card on file.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.7 Late payments and non-payment</h3>
            <p>
              <span className="font-semibold">15.7.1 Payment failure.</span> If payment is declined or otherwise not
              received on time, DeepClinic Copilot may charge interest on overdue amounts at the maximum rate permitted by
              applicable law.
            </p>
            <p>
              <span className="font-semibold">15.7.2 Suspension or termination.</span> DeepClinic Copilot may suspend or
              terminate the Customer&apos;s access to the Service if Fees remain unpaid after reasonable notice has been
              provided.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.8 Refunds</h3>
            <p>
              Unless required by applicable law or otherwise agreed in writing, all Fees are non-refundable. However,
              DeepClinic Copilot may, at its sole discretion, choose to offer refunds or credits in specific cases (e.g.,
              service disruptions exceeding agreed-upon uptime).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">15.9 Currency conversion</h3>
            <p>
              All Fees will be charged in the currency specified in the Customer&apos;s subscription plan. If a currency
              conversion is necessary, it will be handled by the Customer&apos;s payment provider at its conversion rates and
              fees. DeepClinic Copilot is not responsible for any currency conversion fees or charges imposed by the
              Customer&apos;s payment provider.
            </p>
          </div>
        </section>

        <p className="mt-10 text-xs text-slate-500">Last updated: October 5th, 2025</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d5ff7c] px-5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-[#c9f46c]"
          >
            Contact us about these terms
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
