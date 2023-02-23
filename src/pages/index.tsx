import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";
import Head from "next/head";
import { prisma } from "@/server/db";

export default ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div>
			<Head>
				<title>Hra pro Batu</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex min-h-screen flex-col items-center bg-slate-800">
				<div className="flex flex-col items-center justify-center gap-4 mt-[300px]">
          <h1 className="text-white font-bold text-4xl">Hra pro Baťu</h1>
          <p className="text-white table text-center w-[270px] md:text-md">
            Než budeš hrát, nejprve se budeš muset přihlásit
          </p>
          
          <div className="flex flex-row gap-3">
            <button 
              className="flex flex-row gap-2 bg-slate-600 text-white p-3 rounded-lg" 
              onClick={() => signIn("discord")}
            >
              Přihlaš se před Discord
            </button>
          </div>
				</div>
			</main>
		</div>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/game'
      }
    };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}
