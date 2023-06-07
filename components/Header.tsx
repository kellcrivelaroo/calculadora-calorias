import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, forwardRef } from "react";
import { BsCalculatorFill, BsQuestionCircle } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

export const Header = forwardRef((props, ref) => {
  const router = useRouter();

  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      } catch (e) {}
    }
  }, []);

  function roll() {
    if (ref) {
      (ref as any).current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push("/calculos");
    }
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="flex h-8 justify-between items-center max-w-5xl lg:m-auto mx-12">
          <a
            className="flex items-center hover:text-sky-600 pl-0 md:pl-3"
            href="http://github.com/kellcrivelaro"
            target={"_blank"}
            rel={"author noreferrer"}
          >
            <ImGithub size={20} />
          </a>
          <div className="flex gap-4 justify-end items-center pr-0 md:pr-3">
            <Link href="/" rel={"author noreferrer"}>
              <div className="flex items-center gap-1 hover:text-sky-600 transition-colors cursor-pointer">
                <span>
                  <BsCalculatorFill size={16} />
                </span>
                <p className="hidden md:block">Calculadora</p>
              </div>
            </Link>
            {/* <Link href="/calculos"> */}
            <div
              className="flex items-center gap-1 hover:text-sky-600 transition-colors cursor-pointer"
              onClick={roll}
            >
              <span>
                <BsQuestionCircle size={16} />
              </span>
              <p className="hidden md:block">Como o calculo é feito?</p>
            </div>
            {/* </Link> */}
          </div>
        </nav>
        <div
          id="h-HR"
          className="border-t-[1px] border-slate-400 h-0 mx-6"
        ></div>
      </header>
    </>
  );
});
