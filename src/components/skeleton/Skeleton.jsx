import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={640}
    height={160}
    viewBox="0 0 640 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="177" y="26" rx="3" ry="3" width="172" height="18" /> 
    <rect x="180" y="63" rx="3" ry="3" width="154" height="18" /> 
    <rect x="25" y="176" rx="3" ry="3" width="410" height="6" /> 
    <rect x="25" y="192" rx="3" ry="3" width="380" height="6" /> 
    <rect x="25" y="208" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="81" cy="70" r="67" /> 
    <circle cx="546" cy="63" r="32" />
  </ContentLoader>
)

export default Skeleton