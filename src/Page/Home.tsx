import VisitCardComp from "@/components/Card/VisitCardComp";
import Header from "@/components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-20 max-w-7xl mx-auto px-5 ">
        {/*  here Start here Card item that Show The destination to go  By Bicycle */}

        <section className="my-20  ">
          <VisitCardComp />
        </section>

        {/*  here Start here Card item that Show The destination to go  By Bicycle */}
      </main>
    </>
  );
};

export default Home;
