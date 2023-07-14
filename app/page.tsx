import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I'm Praveen 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        As an enthusiastic full-stack developer, I'm currently freelancing and
        focusing on creating excellent apps for Audvice in Salzburg. My past
        experience includes working on significant projects for several
        companies such as Jitera in Tokyo, Vested Finance and WorkerB in
        California, along with CityMall in Gurugram and rtCamp in Pune. In my
        spare time, I enjoy sharing my knowledge and experiences on platforms
        like Medium, Twitter, and GitHub. With a strong grasp of the latest web
        technologies, I'm driven to design outstanding user experiences and
        robust back-end systems.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Hiking"
            src={"/images/4.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Electric Unicycle"
            src={"/images/1.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Watching sunset"
            src={"/images/2.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Exploring Tosh"
            src={"/images/3.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Working from mountains"
            src={"/images/7.png"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Hiking with dog"
            src={"/images/6.png"}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        Away from the computer, I'm quite adventurous. I love trekking and
        climbing mountains. They give me a new viewpoint much like the unique
        challenges I face in each project. Plus, I'm really into electric
        unicycles - another way I blend my love for tech with fun. Watching
        sunrises and sunsets gives me peace and recharges me for my tech
        adventures.
      </p>
    </section>
  );
}
