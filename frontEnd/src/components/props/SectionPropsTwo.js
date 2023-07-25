import React from "react";

function SectionPropsTwo(props) {
  const {
    className,
    displayTopLogoWraperLeft,
    logoTv,
    displayTDPLeft,
    displayTitleLeft,
    productTitle,
    discription,
    displayPriceLeft,
    price,
    linkUrl,
    linkName,
    linkName2,
    displayWatchMoreWraper,
    logoTvShow,
    displayTvShowLogoWraper,
    linkNameLeft,
    logoSeries,
    displayTopLogoWraperRight,
    productTitleRight,
    discriptionRight,
    displayDiscriptionWraperRight,
    discriptionRightBottom,
    linkNameRight,
    displayLink2Right,
    linkName2Right,
  } = props;
  return (
    <section className={className}>
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div
                style={{ display: displayTopLogoWraperLeft }}
                className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={logoTv} />
                </div>
              </div>
              <div style={{ display: displayTDPLeft }}>
                <div
                  style={{ display: displayTitleLeft }}
                  className="title-wraper">
                  {productTitle}
                </div>
                <div className="description-wraper">{discription}</div>
                <div
                  style={{ display: displayPriceLeft }}
                  className="price-wrapper">
                  {price}
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href={linkUrl}>{linkName}</a>
                    </li>
                    <li>
                      <a href={linkUrl}>{linkName2}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{ display: displayTvShowLogoWraper }}
                className="tvshow-logo-wraper">
                <img src={logoTvShow} />
              </div>

              <div
                style={{ display: displayWatchMoreWraper }}
                className="watch-more-wrapper">
                <a href={linkUrl}>{linkNameLeft}</a>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wraper">{productTitleRight}</div>

              <div
                style={{ display: displayTopLogoWraperRight }}
                className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={logoSeries} />
                </div>
              </div>

              <div
                style={{ display: displayDiscriptionWraperRight }}
                className="description-wraper">
                {discriptionRight}
                <br />
                {discriptionRightBottom}
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href={linkUrl}>{linkNameRight}</a>
                  </li>
                  <li>
                    <a style={{ display: displayLink2Right }} href={linkUrl}>
                      {linkName2Right}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPropsTwo;
