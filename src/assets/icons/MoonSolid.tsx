import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
}

export default function MoonSolid(props: Props) {
  return (
    <Svg viewBox="0 0 512 512" width="100%" height="100%" {...props}>
      <Path
        fill={props.color}
        d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
      />
    </Svg>
  );
}
