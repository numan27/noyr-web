"use client";

import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import HeroSection from "components/collections/heroSection";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Terms and Conditions"
        desc="Please read these terms and conditions carefully before using our website"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className={classNames(styles.content, "space-y-8")}>
          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>1. Introduction</h2>
            <p className={classNames(styles.sectionText)}>
              Welcome to{" "}
              <Link
                href="https://noyr.store"
                className="text-blue-600 hover:underline"
              >
                Noyr
              </Link>
              . By accessing and using our website, you accept and agree to be
              bound by the terms and conditions set forth in this agreement. If
              you do not agree to these terms, please do not use our website.
            </p>
            <p className={classNames(styles.sectionText)}>
              These Terms and Conditions govern your use of our website located
              at{" "}
              <Link
                href="https://noyr.store"
                className="text-blue-600 hover:underline"
              >
                https://noyr.store
              </Link>{" "}
              and any related services provided by Noyr. By accessing or using
              our website, you agree to be bound by these Terms and Conditions.
              If you disagree with any part of the terms, you may not access our
              website.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              2. Intellectual Property
            </h2>
            <p className={classNames(styles.sectionText)}>
              All content on this website, including but not limited to text,
              graphics, logos, images, photographs, digital downloads, data
              compilations, software, and the design, selection, and arrangement
              thereof, is the property of Noyr and is protected by international
              copyright laws. The compilation of all content on this site is the
              exclusive property of Noyr.
            </p>
            <p className={classNames(styles.sectionText)}>
              The trademarks, service marks, and logos used and displayed on our
              website are registered and unregistered trademarks of Noyr.
              Nothing on this website should be construed as granting any
              license or right to use any trademark without our prior written
              permission.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>3. User Conduct</h2>
            <p className={classNames(styles.sectionText)}>
              You agree not to use the website for any purpose that is unlawful
              or prohibited by these terms. You may not use the site in any
              manner that could damage, disable, overburden, or impair the site
              or interfere with any other party's use of the site. Specifically,
              you agree not to:
            </p>
            <ul className={classNames(styles.sectionList)}>
              <li>
                Use the website in any way that violates any applicable national
                or international law or regulation
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use or
                enjoyment of the website
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                website
              </li>
              <li>
                Use the website to distribute unsolicited promotional or
                commercial content
              </li>
              <li>
                Use any robot, spider, or other automatic device to monitor or
                copy any content from the website
              </li>
            </ul>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              4. Product Information
            </h2>
            <p className={classNames(styles.sectionText)}>
              We strive to ensure that all product information is accurate and
              up-to-date. However, we cannot guarantee that all product
              descriptions, pricing, or other content on the website is
              accurate, complete, or current. All product specifications,
              descriptions, and prices are subject to change without notice.
            </p>
            <p className={classNames(styles.sectionText)}>
              Product colors and images are for illustrative purposes only.
              Actual colors may vary due to differences in monitor settings and
              device displays. For the most accurate product information, please
              contact our customer service team at{" "}
              <Link
                href="mailto:support@noyr.com"
                className="text-blue-600 hover:underline"
              >
                support@noyr.com
              </Link>
              .
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              5. Orders and Payment
            </h2>
            <p className={classNames(styles.sectionText)}>
              By placing an order through our website, you warrant that you are
              legally capable of entering into binding contracts. All orders are
              subject to acceptance and availability. We reserve the right to
              refuse any order without giving a reason.
            </p>
            <p className={classNames(styles.sectionText)}>
              We accept various payment methods, including credit cards, debit
              cards, and other payment methods as indicated on our website. All
              payments are processed securely through our payment gateway
              partners. For more information about our payment methods, please
              visit our{" "}
              <Link
                href="/shipping-and-returns"
                className="text-blue-600 hover:underline"
              >
                Shipping and Returns
              </Link>{" "}
              page.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              6. Privacy Policy
            </h2>
            <p className={classNames(styles.sectionText)}>
              Your use of our website is also governed by our Privacy Policy.
              Please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              to understand our practices regarding your personal information.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              7. Limitation of Liability
            </h2>
            <p className={classNames(styles.sectionText)}>
              Noyr shall not be liable for any direct, indirect, incidental,
              special, or consequential damages that result from the use of, or
              the inability to use, the website or materials on the site. This
              includes, but is not limited to, damages for loss of profits,
              data, or other intangible losses, even if Noyr has been advised of
              the possibility of such damages.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              8. Changes to Terms
            </h2>
            <p className={classNames(styles.sectionText)}>
              We reserve the right to modify these terms at any time. Your
              continued use of the website following any changes indicates your
              acceptance of the new terms. We will notify you of any material
              changes to these terms by posting a notice on our website or
              sending you an email.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              9. Governing Law
            </h2>
            <p className={classNames(styles.sectionText)}>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which Noyr
              operates. Any disputes relating to these terms and conditions will
              be subject to the exclusive jurisdiction of the courts of that
              jurisdiction.
            </p>
          </section>

          <section className={classNames(styles.section)}>
            <h2 className={classNames(styles.sectionTitle)}>
              10. Contact Information
            </h2>
            <p className={classNames(styles.sectionText)}>
              If you have any questions about these terms and conditions, please
              contact us at:
            </p>
            <ul className={classNames(styles.sectionList)}>
              <li>
                Email:{" "}
                <Link
                  href="mailto:support@noyr.com"
                  className="text-blue-600 hover:underline"
                >
                  support@noyr.com
                </Link>
              </li>
              <li>
                Website:{" "}
                <Link
                  href="https://noyr.store"
                  className="text-blue-600 hover:underline"
                >
                  https://noyr.store
                </Link>
              </li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
