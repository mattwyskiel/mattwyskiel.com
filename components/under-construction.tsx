export default function UnderConstruction() {
  return (
    <div className="px-10 pb-10">
      <div className="p-4 border-[#cbc76e] rounded-xl border-8 text-center">
        <p className="font-bold">This website is under construction</p>
        <p>
          After many years, I’m finally renovating this website in order to
          better tell the stories that I’ve collected over my career. However,
          due to the age of the last version’s look (yikes), I wanted to do this
          redesign{" "}
          <a
            className="text-blue-900 hover:text-blue-950"
            href="https://github.com/mattwyskiel/mattwyskiel.com"
          >
            incrementally
          </a>
          . So, please pardon our appearance, we are open during construction :)
        </p>
      </div>
    </div>
  );
}
