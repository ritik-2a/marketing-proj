export const Carouls = () => {
  return (
    <div className="rk-image">
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        // style={{ backgroundColor: "aqua", height: "30%", margin: "2rem" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="p7.jpg" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    // <div
    //   id="myCarousel"
    //   className="carousel slide mb-6"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#myCarousel"
    //       data-bs-slide-to="0"
    //       className=""
    //       aria-label="Slide 1"
    //       _mstaria-label="66157"
    //       _msthash="13"
    //       style={{ direction: "ltr" }}
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#myCarousel"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //       className=""
    //       _mstaria-label="66313"
    //       _msthash="14"
    //       style={{ direction: "ltr" }}
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#myCarousel"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //       _mstaria-label="66469"
    //       _msthash="15"
    //       className="active"
    //       style={{ direction: "ltr" }}
    //       aria-current="true"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item" _mstvisible="0">
    //       <svg
    //         className="bd-placeholder-img"
    //         width="100%"
    //         height="100%"
    //         xmlns="http://www.w3.org/2000/svg"
    //         aria-hidden="true"
    //         preserveAspectRatio="xMidYMid slice"
    //         focusable="false"
    //         _mstVisible="1"
    //       >
    //         <rect
    //           width="100%"
    //           height="100%"
    //           fill="var(--bs-secondary-color)"
    //           _mstVisible="2"
    //         ></rect>
    //       </svg>
    //       <div className="container" _mstvisible="1">
    //         <div className="carousel-caption text-start" _mstvisible="2">
    //           <h1
    //             _msttexthash="218790"
    //             _msthash="16"
    //             _mstvisible="3"
    //             style={{ direction: "ltr", textAlign: "left" }}
    //           >
    //             Example title.
    //           </h1>
    //           <p
    //             className="opacity-75"
    //             _msttexthash="16085186"
    //             _msthash="17"
    //             _mstvisible="3"
    //             style={{ direction: "ltr", textAlign: "left" }}
    //           >
    //             Statistical studies according to the American Language
    //             Association indicate that the demand for Arabic increased by
    //             126% in the United States of America alone between 2002 and
    //             2009.
    //           </p>
    //           <p _mstvisible="3">
    //             <a
    //               className="btn btn-lg btn-primary"
    //               href="#"
    //               _msttexthash="230178"
    //               _msthash="18"
    //               _mstvisible="4"
    //               style={{ direction: "ltr" }}
    //             >
    //               Register Today
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <svg
    //         className="bd-placeholder-img"
    //         width="100%"
    //         height="100%"
    //         xmlns="http://www.w3.org/2000/svg"
    //         aria-hidden="true"
    //         preserveAspectRatio="xMidYMid slice"
    //         focusable="false"
    //       >
    //         <rect
    //           width="100%"
    //           height="100%"
    //           fill="var(--bs-secondary-color)"
    //         ></rect>
    //       </svg>
    //       <div className="container">
    //         <div className="carousel-caption">
    //           <h1
    //             _msttexthash="635050"
    //             _msthash="19"
    //             style={{ direction: "ltr" }}
    //           >
    //             The title of another example.
    //           </h1>
    //           <p
    //             _msttexthash="16739749"
    //             _msthash="20"
    //             style={{ direction: "ltr" }}
    //           >
    //             According to the British Council, teaching English in Britain
    //             contributes to strengthening its economy by more than two
    //             billion pounds a year, and has created more than 26,000 jobs.
    //           </p>
    //           <p>
    //             <a
    //               className="btn btn-lg btn-primary"
    //               href="#"
    //               _msttexthash="135525"
    //               _msthash="21"
    //               style={{ direction: "ltr" }}
    //             >
    //               Learn more
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="carousel-item active" _mstvisible="0">
    //       <svg
    //         className="bd-placeholder-img"
    //         width="100%"
    //         height="100%"
    //         xmlns="http://www.w3.org/2000/svg"
    //         aria-hidden="true"
    //         preserveAspectRatio="xMidYMid slice"
    //         focusable="false"
    //         _mstVisible="1"
    //       >
    //         <rect
    //           width="100%"
    //           height="100%"
    //           fill="var(--bs-secondary-color)"
    //           _mstVisible="2"
    //         ></rect>
    //       </svg>
    //       <div className="container" _mstvisible="1">
    //         <div className="carousel-caption text-end" _mstvisible="2">
    //           <h1
    //             _msttexthash="726518"
    //             _msthash="22"
    //             _mstvisible="3"
    //             style={{ direction: "ltr" }}
    //           >
    //             One more for a good measurement.
    //           </h1>
    //           <p
    //             _msttexthash="31581147"
    //             _msthash="23"
    //             _mstvisible="3"
    //             style={{ direction: "ltr" }}
    //           >
    //             Statistics on the volume of language investment outside the UK
    //             vary from year to year, but British Council chief executive
    //             Eddie Byers believes that investment in English education abroad
    //             is not only calculated financially but also politically.
    //           </p>
    //           <p _mstvisible="3">
    //             <a
    //               className="btn btn-lg btn-primary"
    //               href="#"
    //               _msttexthash="323544"
    //               _msthash="24"
    //               _mstvisible="4"
    //               style={{ direction: "ltr" }}
    //             >
    //               Browse the gallery
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#myCarousel"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span
    //       className="visually-hidden"
    //       _msttexthash="119327"
    //       _msthash="25"
    //       style={{ direction: "ltr" }}
    //     >
    //       Previous
    //     </span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#myCarousel"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span
    //       className="visually-hidden"
    //       _msttexthash="49634"
    //       _msthash="26"
    //       style={{ direction: "ltr" }}
    //     >
    //       next
    //     </span>
    //   </button>
    // </div>
  );
};
