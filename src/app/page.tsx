import { redirect } from "next/navigation";

const Home: React.FC = () => {
  redirect('/auth')
}

export default Home