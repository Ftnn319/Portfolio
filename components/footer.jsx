import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          <p>
            Email:{' '}
            <a
              href="mailto:feitan0125@gmail.com"
              className="text-blue-400 hover:underline"
            >
              feitan0125@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+97688369995"
              className="text-blue-400 hover:underline"
            >
              +976 8836 9995
            </a>
          </p>
          <p>Location:{' '}
          <a
            href="https://www.google.com/maps/place/Ulaanbaatar,+Mongolia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            >
                Ulaanbaatar, Mongolia
            </a>

            </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Socials</h2>
          <div className="flex space-x-6 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100011665167377"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/things_of_baljka/"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Ftnn319"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 D.Baljinnyam. All rights reserved.
      </div>
    </footer>
  );
}
