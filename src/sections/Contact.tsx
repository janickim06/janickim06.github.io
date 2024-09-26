import { Link } from "@adamjanicki/ui";
import SectionWrapper from "src/components/SectionWrapper";
import "src/sections/contact.css";

type Props = {
  to: string;
  children: string;
};
const ExternalLink = ({ to, children }: Props) => {
  return (
    <Link target="_blank" rel="noreferrer" to={to}>
      {children}
    </Link>
  );
};

const Contact = () => (
  <SectionWrapper title="Contact Information">
    <>
      <p>
        <ExternalLink
          to={"https://www.linkedin.com/in/matthew-janicki-b69b12326/"}
        >
          My LinkedIn Profile
        </ExternalLink>
        <br />
        <ExternalLink to={"/Matthew_Janicki_Resume_2024.pdf"}>
          My Resume
        </ExternalLink>
        <br />
        Cell Phone:{" "}
        <ExternalLink to="sms:+17034880779&body=Hello! I loved your website and would like to offer you a position with us.">
          703-488-0779
        </ExternalLink>{" "}
        <br />
        Email:{" "}
        <ExternalLink to="mailto:matthewjjanicki@gmail.com">
          matthewjjanicki@gmail.com
        </ExternalLink>{" "}
        <br />
        University Email:{" "}
        <ExternalLink to="mailto:mzd4uk@virginia.edu">
          mzd4uk@virginia.edu
        </ExternalLink>
        <br />
        Github: <ExternalLink to="https://github.com/janickim06">janickim06</ExternalLink>
      </p>
    </>
  </SectionWrapper>
);

export default Contact;
