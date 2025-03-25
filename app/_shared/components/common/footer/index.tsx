import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Icons, Images } from "assets";
import { routeConstant } from "routes/constants";
import useWindowDimensions from "hooks/useWindowDimensions";

const Footer = () => {
  const { width } = useWindowDimensions();
  const socialLink = [
    {
      // icon: <Icons.Facebook />,
      icon: Images.Facebook,
      link: "https://www.facebook.com/hayesmediahtx",
    },
    {
      // icon: <Icons.LinkedIn />,
      icon: Images.LinkedIn,
      link: "https://www.linkedin.com/company/hayesmedia/",
    },
    {
      // icon: <Icons.Twitter />,
      icon: Images.Twitter,
      link: "https://x.com/HayesMediaHTX",
    },
    {
      // icon: <Icons.Youtube />,
      icon: Images.Youtube,
      link: "https://www.youtube.com/@hayesmedia5639",
    },
  ];

  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.customContainer, "h-full")}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid grid-cols-12 lg:gap-6 md:gap-4 gap-8 h-full"
          )}
        >
          <div
            className={classNames(
              styles.logoContainer,
              "lg:col-span-3 md:col-span-2 col-span-12 flex items-center md:justify-start justify-center"
            )}
          >
            <Image
              data-aos={width > 768 && "flip-right"}
              className={classNames(styles.logo)}
              width={150}
              height={150}
              src={Images.Logo}
              alt="Hayes Media logo"
              priority
            />
          </div>

          {/* Footer Links */}
          <div
            className={classNames(
              styles.menuContainer,
              "md:col-span-6 col-span-12 flex justify-around"
            )}
          >
            {/* <div className="grid grid-cols-2 gap-16">
              {footerLinks.map((items, index) => (
                <div key={index} className="flex md:justify-end justify-center">
                  <div key={index} className="flex flex-col lg:gap-4 gap-2">
                    <h2 className="font-semibold">{items.heading}</h2>
                    <ul
                      className={classNames(
                        styles.menus,
                        "flex flex-col lg:gap-3 gap-1.5"
                      )}
                    >
                      {items.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.path || "#"}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div
            className={classNames(
              styles.socialContainer,
              "lg:col-span-3 md:col-span-4 col-span-12 flex md:justify-end justify-center items-center md:mb-0 mb-5"
            )}
          >
            <div className="flex flex-col gap-4">
              <h3
                className={classNames(
                  styles.socialHeading,
                  "text-white md:text-left text-center"
                )}
              >
                Follow us on
              </h3>
              <div
                className={classNames(
                  styles.socialContent,
                  "flex items-center gap-2 md:justify-start justify-center"
                )}
              >
                {socialLink.map((item, index) => (
                  <Link
                    className={classNames(styles.socialItem)}
                    key={index}
                    href={item.link}
                  >
                    <span key={index}>
                      {/* {item.icon} */}
                      <Image src={item.icon} alt="social-icon" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            styles.copyright,
            "mt-3 flex items-center justify-center"
          )}
        >
          <p>© 2025 Hayes Media Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
