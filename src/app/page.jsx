import Assets from "@/components/Assets";
import Footer from "@/components/Footer";
import Indices from "@/components/Indices";
import UpdateArea from "@/components/UpdateArea";

import 'swiper/css';

export default function Home() {
  return (
    <>
      <UpdateArea />
      <Indices />
      <Assets />
      <Footer />
    </>
  )
}
