import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/responsive.css"
import "../css/index.css"

import homeImage from "../images/june-8.png"

function June08PressRelease() {
  return (
    <Layout>
      <SEO
        title="Press Release Announcement. June 8 Press Release. Introducing the Wireless Outdoor Cinema Company. Turn Your Backyard into a Year-Round Drive-in"
        description="The Wireless Outdoor Cinema Company today announced the unveiling of their new line of Outdoor Cinema Packages for homeowners and businesses throughout Maine and New Hampshire. The Wireless Outdoor Cinema is a year-round, weather-resistant, pressure-treated wood movie screen frame that comes with a removable cinematic screen, an HD Wi-Fi Projector, Off-Grid Battery Pack and a Wireless Surround Bar Speaker. The Wireless Outdoor Cinema offers a new way for homeowners to enjoy their backyards, year-round, under the stars and moon watching their favorite movie, TV show, sporting event, or playing video games on a larger than life screen."
      />

      <div className="white-back pb-8">
        <div className="container mx-auto">
          <div className="container-insider">
            <div className="flex items-center text-sm flex-wrap change">
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link to="/in-the-news">In the News</Link>
              <span className="mx-2">&gt;</span>
              <span to="#">June 8 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="press-release-padding pt-12">
              <p className="text-xl">Press Release Announcement</p>
              <p className="text-xl">June 8, 2020</p>
            </div>
            <div>
              <h1 className="text-14 pt-10 press-release-padding press-line-height">
                Introducing the Wireless Outdoor Cinema Company
              </h1>
            </div>
            <div className="press-release-padding pt-10">
              <p className="text-23 font-extralight pb-5">
                <strong>
                  BRIDGTON, MAINE – June 8, 2020 – The Wireless Outdoor Cinema
                  Company
                </strong>{" "}
                today announced the unveiling of the new line of Outdoor Cinema
                Packages for homeowners and businesses throughout New England.
                The Wireless Outdoor Cinema provides a year-round,
                weather-resistant, pressure-treated wooden frame system that
                comes with a removable cinematic screen, a 1080p LED Projector,
                Off-Grid Battery Station, and a Wireless Surround Bar Speaker.
                The Wireless Outdoor Cinema offers a new way for homeowners to
                enjoy their backyards year-round, under the stars and moon
                watching their favorite movie, TV show, sporting event, or
                playing video games on a larger-than-life screen.
              </p>
              <p className="text-23 font-extralight pb-5">
                “After I built and set up my first Wireless Outdoor Cinema on my
                property, I knew immediately other homeowners would love this
                outdoor experience as much as I do,” said Todd Morton, owner of
                the Wireless Outdoor Cinema Company. “The cinema setup looks
                impressive on your property with its 4” x 4“ pressure-treated
                framing system for the screen, and comes with an easy setup to
                start watching your favorite movie, show, or use your Xbox,
                PlayStation, or Wii to game under the stars and moon.”
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>
                  Features and benefits of the Wireless Outdoor Cinema include:
                </strong>
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Enjoy outdoor evenings year-round watching movies with nature
                and friends
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Movie screen frames are built with pressure-treated wood,
                weather-resistant hardware and stays up on your property without
                the hassle of breaking them down
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • 1080p LED Projector allows you to connect to your smartphone,
                tablet, laptop, DVD Player, Roku, Amazon Fire TV Stick, Google
                Chromecast Stick, Xbox, PlayStation, Wii, and Speakers
              </p>
              <p className="text-23 font-extralight pb-5 ml-8 indent">
                • Wireless with no dragging out extension cords and tripping
                over them at night
              </p>
              <p className="text-23 font-extralight pb-5">
                The Wireless Outdoor Cinema packages will be available starting
                June 15, 2020, with the 96” Jedi Bobcat Wireless Outdoor Cinema
                base package starting at $2,499. For more information on the
                complete line of cinema packages please visit:
                www.wirelessoutdoorcinema.com
              </p>
              <p className="text-23 font-extralight pb-5">
                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                <br /> The Wireless Outdoor Cinema Company provides homeowners
                and businesses with a complete outdoor movie theater solution to
                enjoy big-screen entertainment year-round. The cinema packages
                are designed to help achieve a fast and easy setup every time
                you want to go outside and enjoy your favorite entertainment.
                Cinema packages include a Pressure-treated Frame to attach the
                screen to, a Cinematic Screen, 1080p LED Projector, Sound
                System, Roku 4k Media Player, and a light-weight custom cedar
                wood Projector and Equipment Stand.
              </p>
            </div>
            <div className="press-release-padding pt-5">
              <div className="border-b border-gray-400" />
              <h2 className="text-31 pb-5 pt-5">Press Contact</h2>
              <p className="text-23">
                Wireless Outdoor Cinema Company
                <br />
                Todd Morton – owner
              </p>
              <p className="text-blue-600 text-23">
                todd@wirelessoutdoorcinema.com
              </p>
              <p className="text-23">(207) 647-8759</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default June08PressRelease