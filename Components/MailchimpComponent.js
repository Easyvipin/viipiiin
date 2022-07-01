import MailchimpSubscribe from "react-mailchimp-subscribe";
import Subscribe from "./Subscribe";

const url = process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL;
// simplest form (only email)

// use the render prop and your custom form
const MailchimpComponent = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <Subscribe
          message={message}
          status={status}
          onSubmitted={(formData) => subscribe(formData)}
        />
      </div>
    )}
  />
);

export default MailchimpComponent;
