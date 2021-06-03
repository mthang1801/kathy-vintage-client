import React from "react"
import { SideBySideMagnifier } from "react-image-magnifiers"
import { Wrapper } from "./styles/ProductImageMagnifier.styles"
const ProductImageMagnifier = ({ image, width }) => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent:
            width < 800 || typeof window !== "undefined" && window.innerWidth < 992 ? "center" : "space-between",
        }}
      >
        <SideBySideMagnifier
          className="input-position"
          style={{ order: false }}
          imageSrc={image}
          largeImageSrc={image}
          alwaysInPlace={false}
          overlayOpacity={0.5}
          switchSides={false}
          zoomPosition="left"
          inPlaceMinBreakpoint={641}
          fillAvailableSpace={false}
          fillAlignTop={true}
          fillGapTop={0}
          fillGapRight={0}
          fillGapBottom={10}
          fillGapLeft={0}
          zoomContainerBorder="1px solid #ccc"
          zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
        />        
      </div>
    </Wrapper>
  )
}

export default ProductImageMagnifier
