export default function Video({className}: Readonly<{className?: string}>) {
  return (
    <section className={`${className} h-screen w-screen`}>
      <video
        src={"/videos/video-home.mp4"}
        // poster={"/images"}
        className="absolute inset-0 z-40 h-full w-full object-cover"
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
        x-webkit-airplay="deny"
        muted
        loop
      />
      <h1 className="sr-only">Agência Newe</h1>
      <div className="absolute w-full bottom-4 left-0 right-0 mx-auto z-20 justify-center lg:flex hidden">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
      <div className="absolute w-full bottom-4 left-0 right-0 mx-auto z-20 justify-center lg:hidden flex">
        <div className="phone">
          <div className="swiper"></div>
        </div>
      </div>
    </section>
  );
}