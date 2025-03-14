"use client";
import { useCallback } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { RoughNotation } from "react-rough-notation";
import { FaBlog } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { RiCommunityLine } from "react-icons/ri";
import Card from "@/components/home/card";
import {
  Github,
  AppStore,
  GooglePlay,
  MicrosoftStore,
  AmazonAppStore,
  SnapStore,
  Flathub,
} from "@/components/shared/icons";
import { useTranslation } from "@/i18n/client";
import { allPosts } from "contentlayer/generated";

export default function Home({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = useTranslation(lng, "common");
  const { t: th } = useTranslation(lng, "header");
  const { t: ts } = useTranslation(lng, "support");
  const post = allPosts
    .filter((post) => post.slug.startsWith(`${lng}/blog`))
    .sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    })
    .at(0);

  const Section = useCallback(
    ({ title, links }: { title: string; links: any[] }) => {
      return (
        <div className="mt-14 w-full max-w-screen-xl animate-fade-up px-5 xl:px-0">
          <div className="flex flex-row flex-nowrap items-center justify-center text-center text-3xl before:mr-5 before:h-[1px] before:max-w-xs before:flex-1 before:border-b-[1px] before:border-dashed before:border-b-gray-300 before:content-[''] after:ml-5 after:h-[1px] after:max-w-xs after:flex-1 after:border-b-[1px] after:border-dashed after:border-b-gray-300 after:content-[''] dark:before:border-b-gray-600 dark:after:border-b-gray-600">
            {title}
          </div>
          <div className="mt-6 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {links.map(({ title, description, demo, url }) => (
              <Card
                key={title}
                title={title}
                description={description}
                demo={demo}
                url={url}
              />
            ))}
          </div>
        </div>
      );
    },
    [],
  );

  const appStores = [
    {
      title: "App Store",
      description: t("app-store"),
      demo: (
        <AppStore className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
    {
      title: "Google Play",
      description: t("google-play"),
      demo: (
        <GooglePlay className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
    {
      title: "Microsoft Store",
      description: t("microsoft-store"),
      demo: (
        <MicrosoftStore className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
    {
      title: "Amazon Appstore",
      description: t("amazon-appstore"),
      demo: (
        <AmazonAppStore className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
    {
      title: "Snap Store",
      description: t("snap-store"),
      demo: (
        <SnapStore className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
    {
      title: "Flathub",
      description: t("flathub"),
      demo: (
        <Flathub className="h-24 w-24 text-gray-600 transition-all dark:text-white/80" />
      ),
      url: "#",
    },
  ];

  return (
    <div className="my-16 w-full max-w-screen-xl">
      <div className="mx-auto w-full max-w-xl px-5 xl:px-0">
        {post && (
          <Link
            href={`/${post.slug}`}
            rel="noreferrer"
            className="mx-auto mb-12 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-[#ff7979] bg-opacity-10 px-7 py-2 text-[#ff7979] transition-colors hover:bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-30"
          >
            <FaBlog className="h-5 w-5" />
            <p className="text-sm font-semibold">{post.title}</p>
          </Link>
        )}
        <div className="mb-8 flex items-center justify-center space-x-20">
          <Image
            className="rounded-full"
            alt="logo"
            src="/logo.png"
            width={160}
            height={160}
          />
        </div>
        <h1
          className="font-display animate-fade-up bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-black/80 opacity-0 drop-shadow-sm dark:text-white/80 md:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer className="gap-0">{th("title")}</Balancer>
          <AiOutlineTrademarkCircle className="inline-block align-top text-[22px] text-[#ff7979]" />
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-[#ff7979] opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <RoughNotation
              animate
              type="highlight"
              show={true}
              color="#c7ecee"
              animationDelay={1000}
              animationDuration={2500}
            >
              {t("slogan")}
            </RoughNotation>
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {/*<Link*/}
          {/*  className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 dark:bg-black dark:text-white/80"*/}
          {/*  href="https://github.com/brago-inc"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <Github />*/}
          {/*  <p>*/}
          {/*    <span className="sm:inline-block">Star on GitHub</span>*/}
          {/*  </p>*/}
          {/*</Link>*/}
          <Link
            className="flex min-w-32 max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 dark:bg-black dark:text-white/80"
            href="support"
            rel="noopener noreferrer"
          >
            <RiCommunityLine className="h-6 w-6" />
            <p>
              <span className="sm:inline-block">{ts("community")}</span>
            </p>
          </Link>
        </div>
      </div>
      <Section title={t("appstores")} links={appStores} />
    </div>
  );
}
