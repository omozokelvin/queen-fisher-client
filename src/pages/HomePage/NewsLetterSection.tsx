import MailIcon from '../../../public/icons/mail-alt.svg';
import EnvelopeFood from '../../../public/images/envelope-food.svg';

export default function NewsLetterSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--orange-900)',
        paddingBlock: '138px',
        position: 'relative',
        marginBottom: '80px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          className="heading-2"
          style={{ color: 'white', marginBottom: '32px' }}
        >
          Subscribe on our newsletter
        </h2>

        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '20px',
            color: 'white',
            maxWidth: '573px',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
          orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi,
          velit, aliquam tortor vestibulum.
        </p>

        <form
          style={{
            minWidth: '565px',
            display: 'flex',
            columnGap: '4px',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #98A2B3',
              height: '44px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              paddingInline: '18.5px',
              columnGap: '10.5px',
            }}
          >
            <img src={MailIcon} alt="mail icon" />

            <div
              style={{
                width: '100%',
              }}
            >
              <label htmlFor="newsletter_email" hidden>
                Subscribe to news letter
              </label>
              <input
                id="newsletter_email"
                type="email"
                placeholder="Email address"
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '20px',
                  color: 'var(--gray-400)',
                  width: '100%',
                  border: 'unset',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: 'var(--yellow-400)',
              minWidth: '178px',
              height: '44px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.875rem',
              lineHeight: '20px',
              color: 'var(--main-text)',
            }}
          >
            Subscribe
          </button>
        </form>

        <p
          className="body-1"
          style={{
            color: 'white',
          }}
        >
          We will never spam you. Only useful mails with promo and events
        </p>
      </div>

      <img
        src={EnvelopeFood}
        alt="Food in envelope"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      />
    </section>
  );
}
