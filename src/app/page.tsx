"use client";

import Image from "next/image";
import bannerMobile from "../components/assets/illustration-sign-up-mobile.svg";
import bannerDesktop from "../components/assets/illustration-sign-up-desktop.svg";
import iconList from "../components/assets/icon-list.svg";
import Link from "next/link";
import Home from "./home/page"
import Confirmed from "./confirmed/page"
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState('')

  return (
    <>
      {email == '' ? (<Home params={{onEmailChange: setEmail, email: email}} />) : (<Confirmed email={email} onEmailChange={setEmail} />)}
    </>
  );
}
