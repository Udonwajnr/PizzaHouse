import Hero from './components/Hero'
import Layout from './components/Layout'
import MostLoved from './components/MostLoved'
import Menu from './components/Menu'
import Delight from './components/Delight'
import SpecialDiscount from './components/SpecialDiscount'
export default function Home() {
  return (
    <Layout>
      <main>
        <Hero/>
        <MostLoved/>
        <Menu/>
        <Delight/>
        <SpecialDiscount/>
      </main>
    </Layout>
  )
}
