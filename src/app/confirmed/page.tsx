import Image from "next/image"
import iconSuccess from "../../components/assets/icon-success.svg"
import { Dispatch, SetStateAction } from "react";

interface Props {
    email: string;
    onEmailChange: Dispatch<SetStateAction<string>>;
  }

const Confirmed = (props: Props) => {
    const {email} = props;
    

  return (
    <main className="bg-charcoalGrey flex justify-center items-center w-full min-h-screen">
        <div className="min-h-screen md:min-h-0 md:w-[28rem] flex flex-col justify-between gap-12 p-8 bg-white md:rounded-3xl md:p-8">
            <div className="flex flex-col justify-center flex-1 gap-8">
                <div>
                    <Image
                    className=""
                    src={iconSuccess}
                    alt="Icon Success"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="text-charcoalGrey text-4xl font-bold">Thanks for subscribing!</div>
                    <div className="text-charcoalGrey">A confirmation email has been sent to&nbsp;
                    <span className="font-bold">
                        {email}
                    </span>
                    . 
                        Please open it and click the button inside to confirm your subscription.
                    </div>
                </div>
            </div>
            <a href="/" className="bg-charcoalGrey hover:bg-tomato rounded-lg px-4 py-4 text-white font-semibold text-center">
                Dismiss message
            </a>
        </div>
    </main>
  )
}

export default Confirmed