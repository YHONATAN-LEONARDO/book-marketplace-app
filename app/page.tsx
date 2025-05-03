import Card from "@/components/atoms/Card";
import Footer from "@/components/molecules/Footer";
import Navbtn from "@/components/molecules/Navbtn";
import Navegador from "@/components/molecules/Navegador";

async function ingresar() {
  const response = await fetch(
    "https://680a53631f1a52874ce01275.mockapi.io/audiobooks"
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const books = await ingresar();

  return (
    <>
      <Navegador />
      <Navbtn />
      <div className="contenedor">

        {books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            cover={book.cover}
            price={book.price}
            author={book.author}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
}
