import Image from "next/image";
import bannerMobile from "../../components/assets/illustration-sign-up-mobile.svg";
import bannerDesktop from "../../components/assets/illustration-sign-up-desktop.svg";
import iconList from "../../components/assets/icon-list.svg";
import Link from "next/link";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface Props {
  email: string;
  onEmailChange: Dispatch<SetStateAction<string>>;
}

export default function Home(props: Props) {
  const {email} = props;
  const {onEmailChange} = props;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onEmailChange((e.currentTarget.email as HTMLInputElement).value)
  }

  return (
    <main className="bg-charcoalGrey flex justify-center items-center w-full min-h-screen">
      <div className="md:h-3/4 flex flex-col md:flex-row-reverse gap-12 p-4 bg-white md:rounded-3xl md:p-8">
        <div id="banner" className="h-full -m-4">
          <div id="banner-mobile" className="">
            <Image
              className="w-full object-contain md:hidden"
              src={bannerMobile}
              alt="Banner Mobile"
            />
          </div>
          <div id="banner-desktop" className="">
            <Image
              className="object-contain hidden md:block"
              src={bannerDesktop}
              alt="Banner Desktop"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center md:p-8">
          <div className="font-bold text-4xl text-charcoalGrey">
            Stay Updated!
          </div>
          <div className="flex flex-col gap-4">
            <div>
              Join 60,000+ product managers receiving monthly updates on:
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="Icon List" />
                <div>Product discovery and building what matters</div>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="Icon List" />
                <div>Measuring to ensure updates are a success</div>
              </div>
              <div className="flex items-start gap-4">
                <Image src={iconList} alt="Icon List" />
                <div>And much more!</div>
              </div>
            </div>
          </div>
          <form onSubmit={submitForm} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <input
                className="border border-opacity-30 border-charcoalGrey rounded-lg px-4 py-4 peer col-span-2 order-last
                invalid:border-red-500
                invalid:bg-tomato 
                invalid:bg-opacity-20 
                invalid:text-tomato
                invalid:focus:border-red-500 
                invalid:active:border-red-500 
                invalid:focus-visible:outline-red-500"
                placeholder="email@company.com"
                type="email"
                id="email"
                name="email"
                required
              />
              <label htmlFor="email" className="text-sm text-charcoalGrey font-bold">Email address</label>
              <span className="text-sm text-tomato font-bold invisible peer-invalid:visible text-end">Valid email required</span>
            </div>
            <button type="submit" className="bg-charcoalGrey hover:bg-tomato rounded-lg px-4 py-4 text-white font-semibold">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
