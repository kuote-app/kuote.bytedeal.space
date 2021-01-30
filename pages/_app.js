import "tailwindcss/tailwind.css";

const Image = ({ path }) => (
  <div
    className="rounded-lg"
    style={{
      backgroundImage: `url(${path})`,
      height: 540,
      width: 300
    }}
  />
);

const Preview = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
    <div className="text-2xl text-gray-700 m-7">
      Beautiful pictures with quotes of great people
    </div>
    <div className="flex flex-row flex-wrap justify-center md:space-x-4">
      <Image path="preview1.png" />
      <Image path="preview2.png" />
      <Image path="preview3.png" />
    </div>

    <div className="max-w-xs">
      <a href="https://play.google.com/store/apps/details?id=space.bytedeal.kuote">
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
    </div>
  </div>
);

export default Preview;
