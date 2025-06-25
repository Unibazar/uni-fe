import Head from "next/head";
import WorkingOnIt from "@/components/common/WorkingOnIt/WorkingOnIt.js"
import ProductHomePage from "./Product-HomePage";


export default function Listing() {
    return (
        <>
            <Head>
                <title>Dashboard-listing | Unibazar</title>
                <meta name="description" content="Unibazar is a tech platform that enables seamless product listing, inventory management, and order tracking across multiple platforms, all from a single, intuitive dashboard. With Unibazar, sellers can streamline their workflows, save time, and focus on growing their businesses effortlessly." key="desc" />
            </Head>
           
            <div ><ProductHomePage/> </div>
           
        </>
    )
}
