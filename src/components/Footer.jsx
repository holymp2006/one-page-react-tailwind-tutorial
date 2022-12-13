import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import HeaderLogo from "./snippets/HeaderLogo";

const Footer = () => {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 py-16 px-4 text-gray-300 lg:grid-cols-3">
      <div>
        <HeaderLogo />
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          officiis quo, unde aperiam at qui. Nam facere reiciendis perferendis
          natus omnis sed quis nulla, recusandae, suscipit sit a id temporibus!
        </p>
        <ul className="my-6 flex justify-between md:w-[75%]">
          <li>
            <FaFacebookSquare size={30} />
          </li>
          <li>
            <FaInstagram size={30} />
          </li>
          <li>
            <FaTwitterSquare size={30} />
          </li>
          <li>
            <FaGithubSquare size={30} />
          </li>
          <li>
            <FaDribbbleSquare size={30} />
          </li>
        </ul>
      </div>

      <div className="flex justify-between lg:col-span-2 mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Job</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
